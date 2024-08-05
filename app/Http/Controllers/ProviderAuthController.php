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

        return Socialite::driver($provider)->redirect();
    }

    function callback($provider){

        try{

            $user = Socialite::driver($provider)->user();

            $userExist =User::where('email',$user->email)->exists();

            if(!$userExist){
                $user = User::Create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'provider' => $provider,
                    'url_image' => $user->avatar
                ]);

                Auth::login($user);
                Cache::forever('ismember', false);
            }
            else{
                $userid = User::where('email',$user->email)->first()->id;
                Auth::loginUsingId($userid);
            }
    
            if(Cache::get('ismember')){

                //rota para quem tem organização associada
                return redirect()->route('dashboard');
            }
            else{

                if(Osc::where('user_id',Auth::user()->id)->exists()){

                    Cache::forever('ismember', true);

                    return redirect()->route('dashboard');
                }

                //rota para usuario que não tem osc associada
                return redirect()->route('resources');
            }
        }
        catch (\Exception $e){
            dd($e);

        }

    }
    
}
