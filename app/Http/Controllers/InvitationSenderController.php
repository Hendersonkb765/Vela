<?php

namespace App\Http\Controllers;

use App\Models\Osc; // Import the Osc class
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Mail\InvitationSender; // Import the InvitationSender class
use Illuminate\Support\Facades\Mail; // Import the Mail facade

class InvitationSenderController extends Controller
{
    //

    public function sendInvitation($email){
        
        $user = Auth::user();
        $osc = Osc::where('user_id', $user->id);
        $invitationLink = 'http://localhost:8000/convite/'.$osc->invitation_code. rand(1000000000, 9999999999);
        Cache::put('invitation_code', $osc->invitation_code, now()->addMinutes(30));
        $email = Mail::to($email)->send(new InvitationSender());

    }
}
