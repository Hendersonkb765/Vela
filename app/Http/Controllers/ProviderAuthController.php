<?php

namespace App\Http\Controllers;

use App\Models\Osc;
use App\Models\User; // Import the User class
use App\Models\GoogleToken; // Import the TokenGoogle class
use App\Models\GoogleDrivefolder; // Import the Googlefolder class
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Services\Google\Drive\Folder;

class ProviderAuthController extends Controller
{
    //
    function redirect($provider){

        return Socialite::driver($provider)->with(['prompt' => 'select_account','access_type' => 'offline'])->redirect();
    }
    function callback($provider){
        try{
            $socialUser = Socialite::driver($provider)->user();
            if($socialUser->isOsc == true){
                dd('é osc');
            }
            $user =User::where('email',$socialUser->email)->exists();
            if(!$user){
                $user = User::Create([
                    'name' => $socialUser->name,
                    'email' => $socialUser->email,
                    'provider' => $provider,
                    'image_url' => $socialUser->avatar
                ]);

                Auth::login($user);
                //Cache::forever('ismember', false);
            }
            else{
                $userid = User::where('email',$socialUser->email)->first()->id;
                Auth::loginUsingId($userid);
            }/*
            GoogleToken::create([
                'access_token' => $socialUser->token,
                'refresh_token' => $socialUser->refreshToken,
                'osc_id' => Auth::user()->osc_id,
            ]);
            */
            return redirect()->route('dashboard');
    /*
            if(Cache::get('ismember')){

                //rota para quem tem organização associada
                return redirect()->route('dashboard');
            }
    */        
        }
        catch (\Exception $e){
            dd($e);

        }

    }
    function callbackOscGoogle(){
        try{
            
            
            $socialUser = Socialite::driver('google')->user();
            GoogleToken::updateOrcreate(
                ['osc_id'=> Auth::user()->osc->first()->id],
                [
                'access_token' => $socialUser->token,
                'refresh_token' => $socialUser->refreshToken,
                //'osc_id' => Auth::user()->osc->first()->id,
                ]);
            $oscId = Auth::user()->osc->first()->id;
            $oscRecodExists = GoogleDrivefolder::where('osc_id',$oscId);

            if(!empty($oscRecodExists)){
                $folderDrive = new Folder($oscId);
                $folderDrive->createDefaultDirectories();
            }
           
            return redirect()->route('dashboard');     
        }
        catch (\Exception $e){
            dd($e);

        }
    }
    
}
