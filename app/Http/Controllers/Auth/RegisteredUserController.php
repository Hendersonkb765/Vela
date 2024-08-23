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
            event(new Registered($user));
    
            Auth::login($user);
    
            return redirect(route('dashboard',absolute: false));
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

    public function completeRegistration(Request $request): RedirectResponse{

        $userRequest = $request['user'];
        dd($userRequest);
        if($userRequest['profilePicture']){
            if(!Storage::exists('profile-photos')){
                Storage::makeDirectory('profile-photos');
            }
            Storage::disk('local')->put('fotos01', $userRequest['profilePicture']);
            $image = $userRequest->file('profilePicture')->store();
            dd($image);
        }
        try{
            /*
            $user->validate([
                'name' => 'required|string|max:255',
                //'url_image' => 'required|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
                //'position' => 'required|string|enum:Presidente,Gerente,Administrador',
                //'birthday' => 'required|date|before:today',
            ]);
            */ 
            
            $userRequest['profilePicture'];
            $user = $request->user()->fill([
                'name' => $userRequest['name'],
                'position' => $userRequest['roleInOrganization'],
                'birthday' => $userRequest['birthday'],
                
            ]);
            $user->save();
            
            return redirect()->back();

        }
        catch(Exception $e){
            return response()->json(['error' => 'Erro ao completar o registro.'], 500);

        }

    }
    public function completeRegistrationPresident(Request $request) : RedirectResponse{
        
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
                'user_id' => $user->id,
            ]);
            
            DB::commit();
    
            event(new Registered($user));

            
        }
        catch(ConnectionException $e){
            DB::rollBack();
            echo "Ops! Parece que você está sem conexão com a internet!";

        }
        catch(\Illuminate\Database\QueryException $e){
            DB::rollBack();
            echo "Ops! Não foi possivel realizar o cadastro, tente novamente mais tarde!";
        }
        catch(\Exception $e){
            DB::rollBack();
            return redirect(route('dashboard', absolute: false));
        }
       
        
    }
}
