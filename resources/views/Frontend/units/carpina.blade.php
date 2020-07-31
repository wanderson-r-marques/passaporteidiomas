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
                    <a href='{{ route("web.units.carpina") }}' class="sub-menu-ativo noticias-cna">Carpina</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Carpina</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <div class="d-md-flex justify-content-start">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.479654899302!2d-35.25749898584506!3d-7.844761480124467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba166a112e213%3A0xa61b351f1d4734d4!2sPassaporte%20idiomas%20-%20Carpina!5e0!3m2!1spt-BR!2sbr!4v1593570460927!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        
                        <iframe class="ml-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4728198929!2d-35.258108585845086!3d-7.845480580133134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba1af1ade22b9%3A0xfbd1020a68c362f6!2sPassaporte%20Idiomas%20Carpina%202!5e0!3m2!1spt-BR!2sbr!4v1593570578307!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection