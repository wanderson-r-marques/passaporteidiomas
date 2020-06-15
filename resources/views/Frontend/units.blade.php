@extends('Frontend.Template.master')
@section('content')

<div class="pg_inicial pg-idioma-ingles" style="  background:url({{url('assets/frontend/css/images/bg-sobre-conheca.jpg')}}) no-repeat top right">
    {{-- trocar o bg quando for preto  bg-preto-ingles.png  --}}
    <div class="degrade-bg">
        <div class="sub-menu-idiomas">
            <ul>
                <li><a href='{{ route("web.home") }}' class="sub-menu-ativo conheca-cna">Principal</a></li>
                <li><a href='{{ route("web.units") }}' class="sub-menu-ativo noticias-cna">Unidades</a></li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Unidades</h1>
            </div>
        </div>

        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <img src="{{ url('assets/frontend/css/images/rec-jampa.png') }}" class="img-responsive" alt="Recife e João Pessoa">
                    <hr>
                    <h2>6 UNIDADES EM PERNAMBUCO</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">Camaragibe</li>
                            <li class="breadcrumb-item">São Lourenço da Mata</li>
                            <li class="breadcrumb-item">Carpina</li>
                            <li class="breadcrumb-item">Vitória</li>
                            <li class="breadcrumb-item">Cabo</li>
                        </ol>
                    </nav>
                    <iframe src="https://www.google.com/maps/d/u/4/embed?mid=15g5HPBaiemaAYZ414HYNWUl-mFbzjqZ-" class="img-responsive" height="650"></iframe>
                </div>
            </div>
        </div>
    </div>

    @endsection