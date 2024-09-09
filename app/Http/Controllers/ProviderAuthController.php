<?php

namespace App\Http\Controllers;

use App\Models\Osc;
use App\Models\User; // Import the User class
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class ProviderAuthController extends Controller
{
    //
    function redirect($provider){

        return Socialite::driver($provider)->with(['prompt' => 'select_account'])->redirect();
    }

    function callback($provider){
            
        try{
            
            $socialUser = Socialite::driver($provider)->user();
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
            }
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
    
}