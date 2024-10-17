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
            // $user = $request->user();
            // $url = URL::temporarySignedRoute(
            //     'verification.verify', 
            //     now()->addMinutes(10), 
            //     ['id' => $user->id, 'hash' => hash('sha256', $user->email)]
            // );
            event(new VerificationEmail($request->user()));
            //Mail::to($user->email)->send(new InvitationVerifyEmailSender($user->name, $user->email, $url));
            return back()->with('status', 'verification-link-sent');
        }
        catch(\Exception $e){
            return back()->with('status', 'verification-link-sent');
        }
    }
}
