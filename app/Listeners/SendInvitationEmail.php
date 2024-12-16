<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendInvitationEmail
{
    /**
     * Create the event listener.
     * 
     * 
     */

    public function __construct()
    {
        
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        $randomcode = hash('sha256', Str::random(60));
        $linkInvitation=URL::temporarySignedRoute(
            'invitation.validate', now()->addMinutes(20), ['code' => $randomcode,'oscId' => $osc->id]
        );
        InvitationOsc::updateOrCreate(
            ['email'=>$event->email,],
            [
            'token' => $randomcode,
            'osc_id' =>$osc->id,
            'status' => 'pending',
            'expires_at' => now()->addMinutes(20)
        ]);
        Mail::to($event->email)->send(new InvitationSender($linkInvitation,$event->osc->name,$event->osc->presidents_name));
    }
}
