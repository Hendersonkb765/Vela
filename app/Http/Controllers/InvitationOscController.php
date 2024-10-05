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

        $osc = $user->osc->first();
        $randomcode = Str::random(32);
        $linkInvitation = url('/validacao/'.$randomcode.'/'.'id='.$osc->id);
        Cache::put('invitation_code', [$randomcode,$osc->id], now()->addMinutes(30));
           
        Mail::to($mail)->send(new InvitationSender($linkInvitation,$osc->name,'https://upload.wikimedia.org/wikipedia/commons/6/6e/Crian%C3%A7a_Esperan%C3%A7a.svg',$osc->presidents_name));

         

        return response()->json(['status'=> 200,'message' => 'Convite enviado com sucesso!']);
        


    }
    public function validateInvitation($code,$oscId){

        try{
            $invitationCode = Cache::get('invitation_code')[0];

            if($code == $invitationCode){

                $osc = Osc::find($oscId);
                $osc->user()->attach(Auth::user()->id);
                return redirect()->route('dashboard');
            }
            else{
                echo 'Código de convite inválido';
            }
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao validar convite!']);
        }
        
        
    }
}
