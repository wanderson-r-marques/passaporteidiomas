<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

class WebController extends Controller
{
    public function home(){
        return view('frontend.index');
    }

    public function theCourse(){
        return view('frontend.the-course');
    }



}
