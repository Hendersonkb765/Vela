<?php

namespace App\Http\Controllers;

use App\Models\User; // Import the User class
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class ProviderAuthController extends Controller
{
    //
    function redirect($provider){

        return Socialite::driver($provider)->redirect();
    }

    function callback(){
        
        $user = Socialite::driver('google')->user();

        User::create([
            'name' => $user->name,
            'email' => $user->email,
            'provider'=> 'google',  
        ]);

        dd($user);
    }
}
