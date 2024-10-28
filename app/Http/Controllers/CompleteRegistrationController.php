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
use Illuminate\Validation\ValidationException;
use Illuminate\Database\ConnectionException;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\JsonResponse;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Events\Authenticated;
use App\Events\VerificationEmail;

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

    public function store(Request $request)
    {

        try {

            $request->validate([
                'user.name' => 'required|string|max:255',
                'user.birthday' => 'required|date|before:today',
                //'roleInOrganization' => 'required|string|enum:Presidente,Gerente,Administrador,Membro',
            ],[
                'user.name.required' => 'O campo nome é obrigatório.',
                'user.name.max' => 'O campo nome deve ter no máximo 255 caracteres.',
                'user.birthday.required' => 'O campo data de nascimento é obrigatório.',
                'user.birthday.date' => 'O campo data de nascimento deve ser uma data.',
                'user.birthday.before' => 'A data de nascimento deve ser anterior a data atual.',
            ]);

            $userRequest = $request['user'];
            if (isset($userRequest['profilePicture'])) {
                $imageData = $userRequest['profilePicture'];
                list($type, $imageData) = explode(';', $imageData);
                list(, $imageData) = explode(',', $imageData);
                $imageData = base64_decode($imageData);
                $imageName = uniqid() . '.png';
                $profileStatus= Storage::put('profile-users/'.$imageName, $imageData,'public');
                if($profileStatus){
                    Auth::user()->image_url = Storage::url('profile-users/' . $imageName);
                }
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
            event(new VerificationEmail($request->user()));
            //return response()->json(['status' => 200, 'message' => 'Registro completado com sucesso!']);

        }
        catch(ValidationException $e){
            return response()->json(['status'=>500,'error' => $e->errors()]);
        }
         catch (\Exception $e) {
            return response()->json(['status'=>500,'error' => 'Erro ao completar o registro.']);
            //return response()->json(['error' => 'Erro ao completar o registro.'], 500);

        }

    }
    public function createFirstOsc(Request $request)
    {
        try{

        $request->validate([
            'organization.organizationName' => 'required|string|max:255',
            'organization.focusAreas' => 'required',
            'organization.CNPJ' => ['nullable', function ($attribute, $value, $fail) {
                if (!$this->isValidCNPJ($value)) {
                    $fail('O CNPJ informado é inválido.');
                }
            }]
        ],[
            'organization.organizationName.required' => 'O campo nome da organização é obrigatório.',
            'organization.organizationName.max' => 'O campo nome da organização deve ter no máximo 255 caracteres.',
            'organization.focusAreas.required' => 'O campo áreas de atuação é obrigatório.',
            'organization.CNPJ.cnpj' => 'O CNPJ informado é inválido.'

        ]);

        $osc = Osc::create([
            'cnpj' => $request->input('organization.CNPJ', null),
            'institutional_email' => $request->input('organization.institutional_email', null),
            'fantasy_name' => $request->input('organization.organizationName', null),
            'presidents_name' => Auth::user()->name,

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
        $image = $request->input('organization.organizationProfilePicture');

        if (isset($image)) {

            $imageData = $image;
            list($type, $imageData) = explode(';', $imageData);
            list(, $imageData) = explode(',', $imageData);
            $imageData = base64_decode($imageData);
            $imageName =  uniqid() . '.png';

            Storage::put("oscs/{$osc->id}/{$imageName}", $imageData,'public');
            $imageUrl = Storage::url("oscs/{$osc->id}/{$imageName}");


        }
        else{
            $imageUrl = null;
        }

        $osc->image_url = $imageUrl;
        $osc->save();
        }
        catch(\Exception $e){
            dd($e);
        }
    }

    // Função para validar CNPJ
    // P.S: Em caso de bugs, não comunicar Gustavo, passar bem
    private function isValidCNPJ($cnpj)
    {
        // Remover qualquer caractere que não seja número
        $cnpj = preg_replace('/[^0-9]/', '', $cnpj);

        // Verifica se o CNPJ tem 14 dígitos
        if (strlen($cnpj) != 14) {
            return false;
        }

        // Cálculo do dígito verificador
        $firstCheckSum = 0;
        $secondCheckSum = 0;
        $multipliers1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        $multipliers2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        for ($i = 0; $i < 12; $i++) {
            $firstCheckSum += $cnpj[$i] * $multipliers1[$i];
        }

        $firstDigit = $firstCheckSum % 11 < 2 ? 0 : 11 - ($firstCheckSum % 11);

        if ($cnpj[12] != $firstDigit) {
            return false;
        }

        for ($i = 0; $i < 13; $i++) {
            $secondCheckSum += $cnpj[$i] * $multipliers2[$i];
        }

        $secondDigit = $secondCheckSum % 11 < 2 ? 0 : 11 - ($secondCheckSum % 11);

        return $cnpj[13] == $secondDigit;
    }

    public function validateCNPJ(Request $request)
    {
        $validatedData = $request->validate([
            'organization.CNPJ' => 'nullable|string|max:18|min:14',
        ], [
            'organization.CNPJ.min' => 'CNPJ não pode ser inferior a 14 caracteres.',
        ]);
        $cnpj = $validatedData['organization']['CNPJ'];

        if ($cnpj && !$this->isValidCNPJ($cnpj)) {
            return back()->withErrors([
                'organization.CNPJ' => 'CNPJ inválido.',
                'status' => 500
            ])->withInput();
        }

        return back()->with(['status' => 200, 'message' => 'CNPJ válido.']);
    }

}
