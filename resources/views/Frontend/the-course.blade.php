@extends('Frontend.Template.master')
@section('content')

<div class="pg_inicial pg-idioma-ingles" style="  background:url({{url('assets/frontend/css/images/bg-sobre-conheca.jpg')}}) no-repeat top right">
    {{-- trocar o bg quando for preto  bg-preto-ingles.png  --}}
    <div class="degrade-bg">
        <div class="sub-menu-idiomas">
            <ul>
                <li><a href='{{ route("web.home") }}' class="sub-menu-ativo conheca-cna">Principal</a></li>
                <li><a href='{{ route("web.who.we.are") }}' class="sub-menu-ativo noticias-cna">Formações</a></li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Quem somos</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <h2>FENÔMENO DA EDUCAÇÃO NO ESTADO</h2>
                    <p>
                        Fundada em janeiro de 2017 a Passaporte Idiomas surgiu de uma necessidade social encontrada pelo seu fundador e educador Douglas Peixoto.
                    </p>
                    <p>
                        Hoje apenas 3% da população brasileira fala inglês fluentemente e apenas 1% fala dois ou mais idiomas. Sendo assim o visionário fundador, deu início a sua missão de contribuir com a melhoria desses números popularizando o ensino de idiomas para todas as classes. Com ensino de qualidade comprovada pela alta satisfação de pais e alunos, com valores mensais muito abaixo do mercado, a Passaporte Idiomas atingiu a rápida marca de 1000 alunos em menos de 2 anos de operação e já está indo para sua quinta escola em 2019.
                    </p>
                    <p>
                        Para esse fenômeno acontecer utilizamos uma força de trabalho dedicada, sonhadora e que acredita que o futuro do país é para quem fala dois ou mais idiomas e para quem está antenado nas mudanças da educação global.
                    </p>
                    <p>
                        Acreditamos que aprender inglês ou mais idiomas é um direito de todos!
                    </p>
                </div>
                <div class="sobre-cna">
                    <h2>NOSSA MISSÃO</h2>
                    <p>
                        Democratizar o ensino de idiomas com competência para todas as classes, trazendo a globalização para dentro da sala de aula e desenvolver o acesso a um mundo de oportunidades, sonhos e metas atingidas aos nossos alunos.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection