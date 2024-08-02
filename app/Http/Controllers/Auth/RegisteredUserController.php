<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use App\Models\Osc;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
       
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => 'required|confirmed|min:8',
            'birthday' => 'required|date|before:today',
            'sex' =>'required',
            'position' => 'required',
        ]);

        if($request->position == 'Presidente'){
            $createOsc = true;
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthday' => $request->birthday,
            'sex' => $request->sex,
            'position' => $request->position,
        ]);
        
        $user->sendVerifyEmailNotification();
        
        event(new Registered($user));

        Auth::login($user);

        return redirect(route('osc', absolute: false));
    }
    public function registeredPresident(Request $request) : RedirectResponse{
        

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => 'required|confirmed|min:8',
            'birthday' => 'required|date|before:today',
            'sex' =>'required',
        ]);

        DB::beginTransaction();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthday' => $request->birthday,
            'sex' => $request->sex,
            'position' => $request->position,
        ]);

        $osc = Osc::create([
            'name' => $request->name,
            'presidents_name' => $request->name,
            'foundation_date' => $request->foundation_date,
        ]);

        DB::commit();

        //DB::rollBack();
        



        return redirect()->route('dashboard');
    }
}
