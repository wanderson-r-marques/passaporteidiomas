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
        $blogs = Blog::where('is_slider', '=', '1')->get();
        return view('Frontend.index', compact('blogs'));
    }

    public function theCourse()
    {
        return view('Frontend.the-course');
    }

    public function formations()
    {
        return view('Frontend.formations');
    }

    public function units()
    {
        return view('Frontend.units');
    }

    public function cloud()
    {
        return view('Frontend.you-in-the-clouds');
    }

    public function contact()
    {
        return view('Frontend.contact');
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
        return view('Frontend.formations.kids');
    }

    public function kindergarten()
    {
        return view('Frontend.formations.kindergarten');
    }

    public function preTeens()
    {
        return view('Frontend.formations.pre-teens');
    }

    public function teens()
    {
        return view('Frontend.formations.teens');
    }

    public function teensYoung()
    {
        return view('Frontend.formations.teens-young');
    }

    public function regular()
    {
        return view('Frontend.formations.regular');
    }

    public function espanhol()
    {
        return view('Frontend.formations.espanhol');
    }

    // Unidades
    public function camaragibe()
    {
        return view('Frontend.units.camaragibe');
    }

    public function lourenco()
    {
        return view('Frontend.units.lourenco');
    }

    public function carpina()
    {
        return view('Frontend.units.carpina');
    }

    public function cabo()
    {
        return view('Frontend.units.cabo');
    }

    public function vitoria()
    {
        return view('Frontend.units.vitoria');
    }

    // Blog

    public function blogShow(Blog $blog)
    {
        return view('Frontend.blog.show', compact('blog'));
    }

    public function blogIndex()
    {
        $blogs = Blog::all();
        return view('Frontend.blog.index', compact('blogs'));
    }
}
