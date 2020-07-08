@extends('layouts.app')
@section('content')

<div class="container">
    <div class="row">
        <h2 class="d-block w-100">Notícias - <span class="text-warning">Editar</span></h2>
        <hr class="w-100">

        <form action="{{route('dashboard.blogs.update',$blog->slug)}}" enctype="multipart/form-data" class="w-100" method="post">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" name="title" id="title" value="{{ $blog->title }}" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <textarea name="description" id="description" class="form-control">{{ $blog->description }}</textarea>
            </div>
            <div class="custom-file mt-4 mb-4">
                <input type="file" name="slider" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Selecione a imagem</label>
            </div>
            <div class="form-group">
                <label for="content">Conteúdo</label>
                <textarea name="content" id="content" class="form-control">{{ $blog->content }}</textarea>
            </div>
            <button class="btn btn-warning" type="submit">Editar</button>
        </form>

    </div>
</div>

@endsection