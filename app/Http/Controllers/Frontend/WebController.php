<?php

namespace App\Http\Controllers\Frontend;

use App\Blog;
use App\Http\Controllers\Controller;
use App\Jobs\newContatc;
use App\Mail\newContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WebController extends Controller
{
    public function home()
    {
        $blogs = Blog::where('is_slider','=','1')->get();        
        return view('frontend.index', compact('blogs'));
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

    public function contact()
    {
        return view('frontend.contact');
    }

    public function sendContact(Request $request)
    {

        // return new newContact($request->all());
        // Mail::send(new newContact($request->all()));

        newContatc::dispatch($request->all());

        flash('Mensagem enviada com sucesso!')->success();
        return redirect()->route('web.contact');
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

    public function teensYoung()
    {
        return view('frontend.formations.teens-young');
    }

    public function regular()
    {
        return view('frontend.formations.regular');
    }

    public function espanhol()
    {
        return view('frontend.formations.espanhol');
    }

    // Unidades
    public function camaragibe()
    {
        return view('frontend.units.camaragibe');
    }

    public function lourenco()
    {
        return view('frontend.units.lourenco');
    }

    public function carpina()
    {
        return view('frontend.units.carpina');
    }

    public function cabo()
    {
        return view('frontend.units.cabo');
    }

    public function vitoria()
    {
        return view('frontend.units.vitoria');
    }

    // Blog

    public function blogShow(Blog $blog){               
        return view('frontend.blog.show',compact('blog'));
    }

    public function blogIndex(){
        $blogs = Blog::all();
        return view('frontend.blog.index',compact('blogs'));
    }
}
