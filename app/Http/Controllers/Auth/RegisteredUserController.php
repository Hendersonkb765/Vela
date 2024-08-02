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
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Http\Client\ConnectionException;

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

    
        try{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'birthday' => $request->birthday,
                'sex' => $request->sex,
                'position' => $request->position,
            ]);
            
            //$user->sendVerifyEmailNotification();
            
            event(new Registered($user));
    
            Auth::login($user);
    
            return redirect(route('dashboard', absolute: false));
        }
        catch(ConnectionException $e){
            echo "Ops! Parece que você está sem conexão com a internet!";

        }
        catch(\Illuminate\Database\QueryException $e){
            echo "Ops! Não foi possivel realizar o cadastro, tente novamente mais tarde!";
        }
        catch(\Exception $e){
            return redirect(route('dashboard', absolute: false));
        }
        
        
        
    }
    public function registered_President(Request $request) : RedirectResponse{
        


        try{
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:'.User::class,
                'password' => 'required|confirmed|min:8',
                'birthday' => 'required|date|before:today',
                'sex' =>'required',
            ]);
    
            $request->validate(
                [
                    'osc_name' => 'required|string|max:255',
                    'foundation_date' => 'required|date|before:today',
                ]
            );
    
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
                'name' => $request->osc_name,
                'presidents_name' => $request->name,
                'foundation_date' => $request->foundation_date,
            ]);
    
            DB::commit();
    
    
            
            //DB::rollBack();
            return redirect(route('dashboard', absolute: false));
        }
        catch(ConnectionException $e){
            echo "Ops! Parece que você está sem conexão com a internet!";

        }
        catch(\Illuminate\Database\QueryException $e){
            echo "Ops! Não foi possivel realizar o cadastro, tente novamente mais tarde!";
        }
        catch(\Exception $e){
            return redirect(route('dashboard', absolute: false));
        }
       
        
    }
}
