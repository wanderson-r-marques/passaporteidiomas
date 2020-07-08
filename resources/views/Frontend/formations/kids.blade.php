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
                    <a href='{{ route("web.formations.kids") }}' class="sub-menu-ativo noticias-cna">Kids</a>
                </li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Kids</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                   
                    <div class="d-md-flex justify-content-start">
                        <img class="img-formations flex-fill" src="{{ url('assets/frontend/css/images/formations/kids.png') }}" width="400" alt="">
                        <p class="flex-fill pl-3 pt-0">
                            Inglês para crianças a partir dos 6 anos de idade que estão em período de alfabetização, no qual assimilam com mais facilidade um novo idioma. A aquisição da língua se dá por meio de jogos, atividades interativas, cooking classes e aulas interdisciplinares.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection