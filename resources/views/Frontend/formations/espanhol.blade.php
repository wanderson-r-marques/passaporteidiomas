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
                    <a class="sub-menu-ativo noticias-cna">Formações</a>
                </li>
                <li>
                    <a href='{{ route("web.formations.espanhol") }}' class="sub-menu-ativo noticias-cna">Español</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Español</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <h2>Descrição</h2>
                    <div class="d-md-flex justify-content-start">
                        <img class="img-formations flex-fill" src="{{ url('assets/frontend/css/images/formations/espanhol.png') }}" width="400" alt="">
                        <p class="flex-fill pl-3 pt-0 mt-0">
                        Curso de Espanhol direcionado para adolescentes e adultos que estão dispostos a aprender a língua predominante do nosso nosso continente. O ensino é voltado para a aprendizagem da conversação e da beleza da língua espanhola que está presente em nosso cotidiano, incentivando a ampliação das habilidades em ser bilíngue.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection