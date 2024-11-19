<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationVerifyEmailSender;
use App\Events\VerificationEmail;

class SendVerificationEmail implements ShouldQueue
{

    /**
     * Handle the event.
     */
    public function handle(VerificationEmail $event): void
    {

        $user = $event->user;
        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(10),
            ['id' => $user->id, 'hash' => hash('sha256', $user->email)]
        );
        Mail::to($user->email)->send(new InvitationVerifyEmailSender($user->name, $user->email, $url));
    }
}
