<?php

namespace App\Http\Controllers\Backend;

use App\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $blogs = Blog::paginate(10);
        return view('backend.blog.index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.blog.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('title','description','content');
        $data['user_id'] = Auth::user()->id;
        
        if($request->hasFile('slider') && $request->slider->isValid()){
            $sliderPath = $request->slider->store('sliders');
            $data['slider'] = $sliderPath;
        }
        
        if(Blog::create($data))
            flash('Notícia cadastrada com sucesso!')->success();
        else
            flash('Ocorreu um erro no cadastro!')->danger();

        return redirect()->route('dashboard.blogs.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        return view('backend.blog.edit',compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        $data = $request->only('title','description','content');
        $data['user_id'] = Auth::user()->id;

        if($request->hasFile('slider') && $request->slider->isValid()){
            $sliderPath = $request->slider->store('slider');
            $data['slider'] = $sliderPath;
            Storage::delete($blog->image);
        }        

        if($blog->update($data))
            flash("Notícia editada com sucesso!")->success();
        else
            flash("Ocorreu um erro na edição!")->danger();
        

        return redirect()->route('dashboard.blogs.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        if($blog->delete())
            flash('Notícia deletada')->success();
        else
            flash('Ocorreu um erro na exclusão!');

        return redirect()->route('dashboard.blogs.index');
    }
}
