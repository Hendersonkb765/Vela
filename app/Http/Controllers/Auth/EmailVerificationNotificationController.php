<?php

namespace App\Http\Controllers\Auth;

use App\Events\VerificationEmail;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\ValidateEmail;
use App\Mail\InvitationVerifyEmailSender;
use Carbon\Carbon;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        try{
 
            event(new VerificationEmail($request->user()));
            return back()->with('status', 'verification-link-sent');
        }
        catch(\Exception $e){
            return back()->with('status', 'verification-link-sent');
        }
    }
}
