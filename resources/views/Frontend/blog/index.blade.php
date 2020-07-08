@extends('Frontend.Template.master')
@section('content')


<div class="pg_inicial pg-idioma-ingles" style="  background:url({{url('assets/frontend/css/images/bg-sobre-conheca.jpg')}}) no-repeat top right">
    {{-- trocar o bg quando for preto  bg-preto-ingles.png  --}}
    <div class="degrade-bg">
        <div class="sub-menu-idiomas">
            <ul>
                <li>
                    <a href='{{ route("web.home") }}' class="sub-menu-ativo conheca-cna">Principal</a>
                </li>
                <li>
                    <a href='{{ route("web.blog") }}' class="sub-menu-ativo noticias-cna">Blog</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Blog</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">

                    @foreach($blogs AS $blog)
                        <a href="{{route('web.blog.show',$blog->slug)}}" class="d-md-flex flex-sd-column justify-content-start align-items-start">
                            <img class="img-formations flex-grow-1" src='{{ url("storage/{$blog->slider}") }}' alt="">
                            <div class="flex-fill pl-3 pt-0 mt-0">
                                <h2 class="mt-3">{{$blog->title}}</h2>
                                <p>
                                {{$blog->description}}
                                </p>
                            </div>
                        </a>
                        <hr class="w-100 mb-5 mt-5">
                    @endforeach

                </div>
            </div>
        </div>
    </div>
</div>

@endsection