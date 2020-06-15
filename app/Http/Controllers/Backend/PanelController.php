<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class PanelController extends Controller
{
    public function login()
    {
        return view('Backend.login');
    }

    public function loginRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = ['email' => $request->email, 'password' => $request->password];

        if (Auth::attempt($credentials))
            return redirect()->intended('panel.dashboard');
        else
            return redirect()->back()->with('msg', 'Acesso negado!');
    }

    public function dashboard(){
        return view('Backend.dashboard');
    }
}
