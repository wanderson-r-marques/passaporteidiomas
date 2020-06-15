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
                    <a href='{{ route("web.formations") }}' class="sub-menu-ativo noticias-cna">Formações</a>
                </li>
                <li>
                    <a href='{{ route("web.formations.teens") }}' class="sub-menu-ativo noticias-cna">Teens</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Teens</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <h2>Descrição</h2>
                    <div class="d-md-flex justify-content-start">
                        <img class="img-formations flex-fill" src="{{ url('assets/frontend/css/images/formations/teens.png') }}" width="400" alt="">
                        <p class="flex-fill pl-3 pt-0 mt-0">
                        Inglês para quem gosta de assistir séries, cartoons, filmes, escutar músicas, jogar online, conversar e interagir com o mundo.
O curso de inglês para adolescentes solidifica o processo de alfabetização em inglês iniciado nas escolas regulares.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection