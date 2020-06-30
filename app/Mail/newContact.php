<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class newContact extends Mailable
{
    use Queueable, SerializesModels;
    private $request;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    { 
        $this->request = $request;        
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject($this->request['subject']);
        $this->from($this->request['email'], $this->request['name']);
        $this->to(env('MAIL_USERNAME'));
        return $this->markdown('frontend.mail.newContact',[
            'request' => $this->request
        ]);
    }
}
