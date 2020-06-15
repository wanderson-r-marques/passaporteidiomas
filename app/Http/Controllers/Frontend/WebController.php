<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

class WebController extends Controller
{
    public function home()
    {
        return view('frontend.index');
    }

    public function theCourse()
    {
        return view('frontend.the-course');
    }

    public function formations()
    {
        return view('frontend.formations');
    }

    public function units()
    {
        return view('frontend.units');
    }

    // Formações
    public function kids()
    {
        return view('frontend.formations.kids');
    }

    public function kindergarten()
    {
        return view('frontend.formations.kindergarten');
    }

    public function preTeens()
    {
        return view('frontend.formations.pre-teens');
    }

    public function teens()
    {
        return view('frontend.formations.teens');
    }

    public function regular()
    {
        return view('frontend.formations.regular');
    }

    public function espanhol()
    {
        return view('frontend.formations.espanhol');
    }

    
}
