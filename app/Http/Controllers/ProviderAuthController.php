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

    function callback($provider){

        $user = Socialite::driver($provider)->user();

        $user_registred = User::updateOrCreate([
            'email' => $user->getEmail()
        ],[
            'name' => $user->getName(),
            'password' => bcrypt('password')
        ])

        dd($user);
    }
}
