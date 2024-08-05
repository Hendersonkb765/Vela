<?php

namespace App\Http\Controllers;

use App\Models\Osc; // Import the Osc class
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Mail\InvitationSender; // Import the InvitationSender class
use Illuminate\Support\Facades\Mail; // Import the Mail facade
use Illuminate\Support\Str; // Import the Str class

class InvitationOscController extends Controller
{
    //

    public function sendInvitation($mail){
        
        $user = Auth::user();

        if($user->position == 'Presidente' || $user->position == 'Gerente'){
            $osc = Osc::where('user_id', $user->id)->first();
            $randomcode = Str::random(32);
            $linkInvitation = url('/validacao/'.$randomcode);
            Cache::put('invitation_code', [$randomcode,$osc->id], now()->addMinutes(30));
            Mail::to($mail,'Gustavo')->send(new InvitationSender($linkInvitation,$osc->name,'https://upload.wikimedia.org/wikipedia/commons/6/6e/Crian%C3%A7a_Esperan%C3%A7a.svg',$osc->presidents_name));

            echo "Convite enviado com sucesso";
        }
        else{
            echo "Você não tem permissão para enviar convites";
        }


    }
    public function validateInvitation($code){

        $invitationCode = Cache::get('invitation_code')[0];
        if(Auth::check()){

            if($code == $invitationCode[0]){
                //Osc::where('id',$invitationCode[1])->update(['user_id' => Auth::user()->id]);

                // Código para vincular usuario com uma organização social.
                
                echo 'Código de convite válido e aceito';
            }
            else{
                echo 'Código de convite inválido';
            }
        }
        else{


            
            if($code == $invitationCode){
                echo 'Código de convite válido';
            }
            else{
                echo 'Código de convite inválido';
            }

        }
        
    }
}
