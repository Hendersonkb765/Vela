<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Osc;
use App\Models\TargetAudience; // Add this line
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\ConnectionException;

class CompleteRegistrationController extends Controller
{


    public function create()
    {

        return Inertia::render('FirstSteps/ProfileSetup/ProfileSetup',['user' => [
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'url_image' => Auth::user()->url_image
        ]]);
        // return Auth::user()->provider === 'google'
        //     ? Inertia::render('FirstSteps/ProfileSetup/ProfileSetup', [
        //         'user' => [
        //             'name' => Auth::user()->name,
        //             'email' => Auth::user()->email,
        //             'url_image' => Auth::user()->url_image
        //         ]
        //     ])
        //     : Inertia::render('FirstSteps/ProfileSetup/ProfileSetup');
    }

    public function store(Request $request): RedirectResponse
    {
        try {
            /*
            $request->validate([
                'name' => 'required|string|max:255',
                'birthday' => 'required|date|before:today',
                //'roleInOrganization' => 'required|string|enum:Presidente,Gerente,Administrador,Membro',
            ]);
        */
            $userRequest = $request['user'];
            if (isset($userRequest['profilePicture'])) {
                $imageData = $userRequest['profilePicture'];
                list($type, $imageData) = explode(';', $imageData);
                list(, $imageData) = explode(',', $imageData);
                $imageData = base64_decode($imageData);
                $imageName = uniqid() . '.png';
                Auth::user()->url_image = 'storage/profile/'.$imageName;
                if (!Storage::exists('profile-photos')) {
                    Storage::makeDirectory('profile-photos');
                }
                Storage::disk('public')->put('profile-photos/' . $imageName, $imageData);
            }
            $userRequest['profilePicture'];
            $user = $request->user()->fill([
                'name' => $userRequest['name'],
                'position' => $userRequest['roleInOrganization'],
                'birthday' => $userRequest['birthday'],
            ]);
            $user->save();

            if ($request['hasOrganization'] === true) {
                $this->createFirstOsc($request);
            }
            return redirect()->route('dashboard');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Erro ao completar o registro.');
            //return response()->json(['error' => 'Erro ao completar o registro.'], 500);

        }
    }
    public function createFirstOsc(Request $request)
    {
        try{

        $image = $request->input('organization.organizationProfilePicture');
        
        if (isset($image)) {
            $imageData = $image;
            list($type, $imageData) = explode(';', $imageData);
            list(, $imageData) = explode(',', $imageData);
            $imageData = base64_decode($imageData);
            $imageName = uniqid() . '.png';
            Auth::user()->url_image = $imageName;
            if (!Storage::exists('profile-photos-osc')) {
                Storage::makeDirectory('profile-photos-osc');
            }
            Storage::disk('local')->put('profile-photos-osc/' . $imageName, $imageData);
        }
        else{
            $imageName = null;
        }
        $osc = Osc::create([
            'cnpj' => $request->input('organization.CNPJ', null),
            'institutional_email' => $request->input('organization.institutional_email', null),
            'fantasy_name' => $request->input('organization.organizationName', null),
            'presidents_name' => Auth::user()->name,
            'img_url' => $request->input($imageName.'.png', null),
        ]);
        
        $osc->user()->attach(Auth::user()->id);
        $osc->axis()->attach(1);
        
        $focusAreas = $request->input('organization.focusAreas');
        if(isset($focusAreas)){
            for ($i = 1; $i <= count($focusAreas); $i++){
                $osc->targetAudience()->attach($i);
            }
        }
        $osc->save();
        }
        catch(\Exception $e){
            dd($e);
        }
    }
    /*
    public function storePresident(Request $request)
    {

        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:' . User::class,
                'password' => 'required|confirmed|min:8',
                'birthday' => 'required|date|before:today',
                'sex' => 'required',
            ]);

            $request->validate(
                [
                    'osc_name' => 'required|string|max:255',
                    'foundation_date' => 'required|date|before:today',
                ]
            );

            DB::beginTransaction();


            $osc = Osc::create([
                'name' => $request->osc_name,
                'presidents_name' => $request->name,
                'foundation_date' => $request->foundation_date,
                'user_id' => $user->id,
            ]);

            DB::commit();

            event(new Registered($user));
        } catch (ConnectionException $e) {
            DB::rollBack();
            echo "Ops! Parece que você está sem conexão com a internet!";
        } catch (\Illuminate\Database\QueryException $e) {
            DB::rollBack();
            echo "Ops! Não foi possivel realizar o cadastro, tente novamente mais tarde!";
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect(route('dashboard', absolute: false));
        }
    }
        */
}
