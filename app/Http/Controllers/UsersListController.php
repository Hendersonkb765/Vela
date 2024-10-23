<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InvitationOsc;
use App\Models\Osc;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersListController extends Controller
{
    public function __invoke()
    {
        $osc = Auth::user()->osc->first(); 
        $members = $osc->user()->with('osc.user')->get();
        $invitaionOsc = InvitationOsc::where('osc_id',$osc->id)->get();

        return redirect()->route('invitation.list',['invitations' => $invitaionOsc,'members' => $members]); 
    }

}
 