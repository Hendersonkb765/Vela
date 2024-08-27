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
use Exception;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

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
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => 'required|confirmed|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*?&#]/',
        
        ]);

        try{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'provider' => 'email',
                'password' => Hash::make($request->password),
              
            ]);
            
            //$user->sendVerifyEmailNotification();
            //event(new Registered($user));
    
            Auth::login($user);
    
            return redirect()->route('completeRegistration.create');
        }
        catch(ConnectionException $e){
            echo "Ops! Parece que você está sem conexão com a internet!";

        }
        catch(\Illuminate\Database\QueryException $e){
            echo "Ops! Não foi possivel realizar o cadastro, tente novamente mais tarde!";
        }
        catch(\Exception $e){
            dd($e);
            return redirect()->back();
        }
    }

   
}
