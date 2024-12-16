<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\InvitationOsc;

class UserController extends Controller
{
    
    public function index()
    {
        try{
            $user = Auth::user();
            $osc = $user->osc->first(); 

            $members = $osc->user()->get();
            $members = $members->reject(function ($member) {
                return $member->id == Auth::user()->id;
            });
            $members = $members->map(function ($member) {
                $member->status = 'membro';
                return $member;
            });
        

            $invitaionOsc = InvitationOsc::where('osc_id',$osc->id)->get();

            $members = $members->merge($invitaionOsc);

            return response()->json(['members' => $members]); 
        }
        catch(\Exception $e)
        {
            return redirect()->back()->with(['status' => 500, 'message' => 'Erro ao carregar membros!']);
        }
        
    }
    public function destroy(Request $request){

        try{
            $user = Auth::user();
            $osc = $user->osc->first();
            if($user->role == 'Presidente'){
                $isDeleted =$osc->user()->where('id',$request->id)->delete();

                if($isDeleted == 0){
                    return redirect()->back()->with('error', 'Erro ao excluir membro');
                }
            }

            return redirect()->back()->with('success', 'Membro excluído com sucesso');
        }
        catch(Exception $e){
            return redirect()->back()->with('error', 'Erro ao excluir membro');
        }

    }

 
    
}
