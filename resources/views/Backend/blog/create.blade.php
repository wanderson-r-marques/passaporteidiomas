@extends('layouts.app')
@section('content')

<div class="container">
    <div class="row">
        <h2 class="d-block w-100">Notícias - <span class="text-success">Cadastro</span></h2>
        <hr class="w-100">

        <form action="{{route('dashboard.blogs.store')}}" enctype="multipart/form-data" class="w-100" method="post">
            @csrf
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" name="title" id="title" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <textarea name="description" id="description" class="form-control"></textarea>
            </div>
            <div class="custom-file mt-4 mb-4">
                <input type="file" name="slider" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Selecione a imagem</label>
            </div>
            <div class="form-group">
                <label for="content">Conteúdo</label>
                <textarea name="content" id="content" class="form-control"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Cadastrar</button>
        </form>

    </div>
</div>

@endsection