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
                    <a href='{{ route("web.units") }}' class="sub-menu-ativo noticias-cna">Unidades</a>
                </li>
                <li>
                    <a href='{{ route("web.units.cabo") }}' class="sub-menu-ativo noticias-cna">Cabo</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Cabo</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <div class="d-md-flex justify-content-start">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15792.788783837766!2d-35.0335987!3d-8.2831636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea79d0a871aea620!2sPassaporte%20Idiomas%20-%20Cabo!5e0!3m2!1spt-BR!2sbr!4v1593571048618!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection