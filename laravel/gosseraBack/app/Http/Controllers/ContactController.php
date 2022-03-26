<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    //
    public function mailTo(Request $request)
    {
        $details = [
            'nom' => $request->nom,
            'email' => $request->email,
            'missatge' => $request->missatge
        ];

        Mail::to('info@protectorafigures.cat')->send(new \App\Mail\Contact($details));

    }
}
