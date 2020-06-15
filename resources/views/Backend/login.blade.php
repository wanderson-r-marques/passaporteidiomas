@extends('Backend.Template.master')
@section('content')

<div class="mx-auto col-md-6 col-10 bg-white p-5">
    <h1 class="mb-4">Área Restrita</h1>
    <form method="POST" action="{{route('panel.loginRequest')}}">
        @csrf 
        <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="Digite seu e-mail" id="email">
        </div>
        <div class="form-group mb-3">
            <input type="password" name="password" class="form-control" placeholder="Digite sua senha" id="senha">
            <small class="form-text text-muted text-right">
                <a href="#"> Recuperar senha</a>
            </small>
        </div>
        <button type="submit" class="btn btn-primary">Acessar</button>
    </form>
</div>
@endsection
