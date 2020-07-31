@extends('layouts.app')
@section('content')

<div class="container">
    <div class="row">
        <h2 class="d-block w-100">Notícias</h2>
        <hr class="w-100">
        <div class="d-flex justify-content-between w-100">
            <a href="{{route('dashboard.blogs.create')}}" class="btn btn-success mb-3">Cadastrar</a>
            <div>{{ $blogs->links() }}</div>
        </div>

        <table class="table table-bordered table-striped ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Slider</th>
                    <th>Título</th>
                    <th>Data</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                @foreach($blogs as $blog)
                <tr>
                    <td>
                        @if($blog->slider)
                        <img width="100" src='{{ url("storage/{$blog->slider}") }}' alt="{{ $blog->title }}">
                        @endif
                    </td>
                    <td>{{$blog->title}}</td>
                    <td>{{ date('d/m/Y H:i:s', strtotime($blog->created_at)) }}</td>
                    <td>
                        <a href="{{ route('dashboard.blogs.edit',$blog->slug) }}" class="btn btn-warning">Editar</a>
                        <form onsubmit="return confirm('Deseja deletar {{ $blog->title }}?')" method="POST" class="d-inline" action="{{ route('dashboard.blogs.destroy',$blog->slug) }}">
                        @csrf 
                        @method('DELETE')
                            <button href="{{ route('dashboard.blogs.destroy',$blog->slug) }}" class="btn btn-danger">Excluir</button>
                        </form>

                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <div class="d-flex mt-2 justify-content-between w-100">
            <a href="{{route('dashboard.blogs.create')}}" class="btn btn-success mt-3">Cadastrar</a>
            <div>{{ $blogs->links() }}</div>
        </div>
    </div>
</div>

@endsection