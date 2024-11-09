<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class InvitationVerifyEmailSender extends Mailable
{
    use Queueable, SerializesModels;

    private $url;
    private string $email;
    private string $name;
    /**
     * Create a new message instance.
     */
    public function __construct(string $name, string $email, $url)
    {
        
        $this->url = $url;
        $this->email = $email;
        $this->name = $name;
   
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
            subject: 'Invitation Verify Email Sender',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.verifyEmail',
            with: ['url' => $this->url,
                    'email' => $this->email,
                    'name' => $this->name,
                ]
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
