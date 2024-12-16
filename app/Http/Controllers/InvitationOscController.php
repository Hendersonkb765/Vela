<?php

namespace App\Http\Controllers;

use App\Models\Osc; // Import the Osc class
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Mail\InvitationSender; // Import the InvitationSender class
use App\Models\InvitationOsc;
use Illuminate\Support\Facades\Mail; // Import the Mail facade
use Illuminate\Support\Str; // Import the Str class
use Inertia\Inertia; // Import the Inertia facade
use Illuminate\Support\Facades\Log; // Import the Log facade
use Illuminate\Support\Facades\URL; // Import the URL facade

class InvitationOscController extends Controller
{
    //

    public function sendInvitation(Request $request){

        try{
            $user = Auth::user();
            $osc = $user->osc->first();
            $randomcode = hash('sha256', Str::random(60));
            $linkInvitation=URL::temporarySignedRoute(
                'invitation.validate', now()->addMinutes(20), ['code' => $randomcode,'oscId' => $osc->id]
            );
            InvitationOsc::updateOrCreate(
                ['email'=>$request->Invitemail,],
                [
                'email'=>$request->Invitemail,
                'token' => $randomcode,
                'osc_id' =>$osc->id,
                'expires_at' => now()->addMinutes(20)
            ]);

            Mail::to($request->Invitemail)->send(new InvitationSender($linkInvitation,$osc->name,$osc->presidents_name));

            return redirect()->back()->with(['status' => 200, 'message' => 'Convite enviado com sucesso!']);
        } catch (\Exception $e) {
            Log::error('Erro no envio do e-mail', ['error' => $e->getMessage()]);
            return redirect()->back()->with(['status' => 500, 'message' => 'Erro ao enviar convite!']);
        }
    }

    public function validateInvitation($code,$oscId){
        try{
            if(InvitationOsc::where('token',$code)->exists()){
                $osc = Osc::find($oscId);
                $osc->user()->attach(Auth::user()->id);
                InvitationOsc::where('email',Auth::user()->email)->delete();
                return redirect()->route('dashboard');
            }
            else{
                return response()->json(['status'=> 500,'message' => 'Convite inválido!']);
            }
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao validar convite!']);
        }
    }

    public function invitationList(){
        $invitaionOsc = InvitationOsc::where('osc_id',Auth::user()->osc->first()->id)->get();
        return redirect()->route('invitation.list',['invitations' => $invitaionOsc]);
    }
}
