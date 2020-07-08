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

                    <div class="d-md-flex flex-column justify-content-start">
                        <img width="100%" class="flex-fill" src='{{ url("storage/{$blog->slider}") }}' width="400" alt="">
                        <h2 class="mt-5">{{ $blog->title }}</h2>
                        <p class="flex-fill pl-3 pt-0 mt-0">
                        <h2>{!! $blog->content !!}</h2>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection