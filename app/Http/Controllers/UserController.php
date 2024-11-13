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
            $osc = Auth::user()->osc->first(); 
            $members = $osc->user()->get();
            $invitaionOsc = InvitationOsc::where('osc_id',$osc->id)->get();
    
            return redirect()->back()->with(['invitations' => $invitaionOsc,'members' => $members]); 
        }
        catch(\Exception $e)
        {
            return redirect()->back()->with(['status' => 500, 'message' => 'Erro ao carregar membros!']);
        }
        
    }

 
    
}
