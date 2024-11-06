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

class InvitationOscController extends Controller
{
    //

    public function sendInvitation(Request $request){

        try{
            $user = Auth::user();
            $osc = $user->osc->first();
            $randomcode = hash('sha256', Str::random(60));
            $linkInvitation = url('/validacao/'.$randomcode.'/'.'id='.$osc->id);
            InvitationOsc::updateOrCreate(
                ['email'=>$request->Invitemail,],
                [
                'email'=>$request->Invitemail,
                'token' => $randomcode,
                'osc_id' =>$osc->id,
                'status' => 'pending',
                'expires_at' => now()->addMinutes(100)
            ]);

            Mail::to($request->Invitemail)->send(new InvitationSender($linkInvitation,$osc->name,'https://upload.wikimedia.org/wikipedia/commons/6/6e/Crian%C3%A7a_Esperan%C3%A7a.svg',$osc->presidents_name));

            return redirect()->back()->with(['status' => 200, 'message' => 'Convite enviado com sucesso!']);
        } catch (\Exception $e) {
            Log::error('Erro no envio do e-mail', ['error' => $e->getMessage()]);
            return redirect()->back()->withErrors(['status' => 500,'message' => 'Erro ao enviar convite!', 'error' => $e->getMessage()]);
        }


    }
    public function validateInvitation($code,$oscId){

        try{
            if(InvitationOsc::where('token',$code)){
                    $osc = Osc::find($oscId);
                    $osc->user()->attach(Auth::user()->id);
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
