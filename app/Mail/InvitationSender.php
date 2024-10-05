<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class InvitationSender extends Mailable
{
    use Queueable, SerializesModels;

    protected $linkInvitation;
    protected $oscName;
    protected $imgUrl;
    protected $presidentName;
    /**
     * Create a new message instance.
     */
    public function __construct($linkInvitation,$oscName,$imgUrl,$presidentName)
    {
        
        $this->linkInvitation = $linkInvitation;
        $this->oscName = $oscName;
        $this->imgUrl = $imgUrl;
        $this->presidentName = $presidentName;

    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
            subject: 'Presidente '.$this->presidentName.' convida você para participar da organização social '.$this->oscName,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.invitationOsc',
            
            with: ['linkInvitation' => $this->linkInvitation,
                    'oscName' => $this->oscName,
                    'imgUrl' => $this->imgUrl,
                    'presidentName' => $this->presidentName]
            
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

   
}
