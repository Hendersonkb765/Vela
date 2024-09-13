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
use App\Models\Level; // Add this line
use App\Models\TargetAudience; // Add this line
use App\Models\Axis; // Add this line
use App\Models\Task; // Add this line
use App\Models\Step; // Add this line
use App\Models\Requirement; // Add this line
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\ConnectionException;

class CompleteRegistrationController extends Controller
{


    public function create()
    {

        return Auth::user()->provider === 'google'
            ? Inertia::render('FirstSteps/ProfileSetup/ProfileSetup', [
                'user' => [
                    'name' => Auth::user()->name,
                    'image_url' => Auth::user()->image_url
                ]
            ])
            : Inertia::render('FirstSteps/ProfileSetup/ProfileSetup');
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
                Auth::user()->image_url = asset('storage/profile-photos/'.$imageName);
                if (!Storage::disk('public')->exists('profile-photos')) {
                    Storage::disk('public')->makeDirectory('profile-photos');
                }
                Storage::disk('public')->put('profile-photos/' . $imageName, $imageData);
            }
            //$roleId = Role::where('name','=',$userRequest['roleInOrganization'])->first()->id;
            $user = $request->user()->fill([
                'name' => $userRequest['name'],
                'role_id' => $userRequest['roleInOrganization'],
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
            $imageName = uniqid().'.png';
            if (!Storage::disk('public')->exists('profile-photos-osc')) {
                Storage::disk('public')->makeDirectory('profile-photos-osc');
            }
            Storage::disk('public')->put('profile-photos-osc/' . $imageName, $imageData);
            $imageUrl = asset('storage/profile-photos-osc/'.$imageName);
            
        }
        else{
            $imageUrl = null;
        }
        $osc = Osc::create([
            'cnpj' => $request->input('organization.CNPJ', null),
            'institutional_email' => $request->input('organization.institutional_email', null),
            'fantasy_name' => $request->input('organization.organizationName', null),
            'presidents_name' => Auth::user()->name,
            'image_url' => $imageUrl,
        ]);
        $osc->user()->attach(Auth::user()->id);
        $axes = Axis::all();
        foreach($axes as $axis){
            $osc->axis()->attach($axis->id);
        }
        $task = Task::all();
        foreach($task as $task){
            $osc->task()->attach($task->id);
        }
        $level = Level::all();
        foreach($level as $level){
            $osc->level()->attach($level->id);
        }
      
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

}
