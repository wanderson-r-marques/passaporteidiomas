<!DOCTYPE html>
<html>

<head>
    <title>Passaporte idiomas</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="description" content="Venha aprender inglês e espanhol na PASSAPORTE IDIOMAS, nosso método é super divertido e eficaz. Mais do que melhores alunos melhores pessoas." />
    <meta name="keywords" content="inglês definitivo, inglês no cna, curso de inglês , curso de espanhol, escola de inglês, estudar inglês, aprenda Inglês, estudar espanhol, aprenda espanhol , seja fluente" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="Wanderson R Marques" />
    <meta property="og:image" content="{{url('assets/frontend/css/images/logo_post-facebook.png')}}" />

    <link href="{{url('assets/frontend/css/images/icon2.png')}}" rel="shortcut icon" />
    <link rel="preload" href="{{url('assets/frontend/fonts/font-webfont.woff2')}}" as="font" crossorigin>

    <!--Início dos arquivos CSS-->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic" />
    <link rel="stylesheet" type="text/css" href="{{mix('assets/frontend/css/web.css')}}" />
    <!--End dos arquivos CSS-->

    <!--Início dos arquivos Javascript-->
    <script src="{{url('assets/frontend/bundles/scripts4050?v=f4uixSapoYwJNJCr1O1hNCS9laXjlFeEM51ZdFk3cXo1')}}"></script>

    <script type="text/javascript" src="assets/frontend/js/passaporte.js"></script>
    <!--End dos arquivos Js-->

    <meta property="og:image" content="{{url('assets/frontend/css/images/share_fb.png')}}" />
    <meta property="og:site_name" content="{{url('assets/frontend/css/images/share_fb.png')}}" />
    <meta property="og:title" content="CNA - Cursos de ingl&#234;s e espanhol." />
    <meta property="og:type" content="Type do Projeto" />
    <meta property="og:url" content="www.cna.com.br/Home" />
    <meta property="og:description" content="Venha aprender ingl&#234;s e espanhol no CNA, nosso m&#233;todo &#233; super divertido e eficaz. Mais do que melhores alunos melhores pessoas.
" />
    <meta property="fb:admins" content="1314685555" />
</head>

<body>
    {{--Conteúdo do Slider--}}
    <div id="wbounce-config" style="display: none;">
        {
        "cookieName": "wBounce", "isAggressive": false, "isSitewide": true, "hesitation": "",
        "openAnimation": false, "exitAnimation": false, "timer": "", "sensitivity": "",
        "cookieExpire": "90", "cookieDomain": "", "autoFire": "", "isAnalyticsEnabled": true
        }
    </div>

    <div class="conteudo-geral">
        <div class="menu-responsivo">
            <a id="menu_mobile" href="javascript:void(0);">
                <img alt="" src="{{url('assets/frontend/css/images/menu-mobile.png')}}" />
            </a>
            <p><img alt="" src="{{url('assets/frontend/css/images/logo-3.png')}}" /></p>
        </div>
        <nav class="principal" id="principal">
            <div class="logo">
                <a href="{{ route('web.home') }}">
                    <h2>
                        <img alt="" src="{{url('assets/frontend/css/images/logo-3.png')}}" />
                        <b>
                            PASSAPORTE IDIOMAS
                        </b>
                    </h2>
                </a>
            </div>
            <ul id="menu-responsivo" class="menu">
                <li>
                    <!--ativo-bg-mobile-->
                    <div class="icon cursos">
                        <img alt="" src="{{url('assets/frontend/css/images/sprite-menu.png')}}" />
                    </div>
                    <a class="mob-w menu-cursos" href="javascript:void(0);">FORMAÇÕES</a>
                    <ul class="int-menu int-menu2  menu-mobile-ul">
                        <div class="seta-menu" style="display: none">
                            <img alt="" src="{{url('assets/frontend/css/images/seta-menu.png')}}" />
                        </div>
                        <li class="top top1">
                            <div class="link-none showSingle" target="1">
                                <a class="smt submenu-ingles" href="{{ route('web.formations.regular') }}">Inglês</a>
                            </div>
                            <div id="div1" class="item-idioma" style="display:none">
                                <ul>
                                    <li class="top">
                                        <a href="{{ route('web.formations.kindergarten') }}">Kindergarten</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('web.formations.kids') }}">Kids</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('web.formations.pre.teens') }}">Pre Teens</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('web.formations.teens') }}">Teens</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('web.formations.teens.young') }}">Teens Young</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('web.formations.regular') }}">Regular</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li class="top top1">
                            <div class="link-none showSingle" target="2">
                                <a class="smt submenu-espanhol" href="{{ route('web.formations.espanhol') }}">Espanhol</a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <!--ativo-bg-mobile-->
                    <div class="icon escolas">
                        <img alt="" src="{{url('assets/frontend/css/images/sprite-menu.png')}}" />
                    </div>
                    <a class="mob-w menu-escolas" href="{{ route('web.units') }}">UNIDADES</a>
                </li>
                <li>
                    <!--ativo-bg-mobile-->
                    <div class="icon s-cna">
                        <img alt="" src="{{url('assets/frontend/css/images/sprite-menu.png')}}" />
                    </div>
                    <a class="mob-w menu-sobrecna" href="{{ route('web.who.we.are') }}">QUEM SOMOS</a>
                </li>
                <li>
                    <!--ativo-bg-mobile-->
                    <div class="icon s-fluente">
                        <img alt="" src="{{url('assets/frontend/css/images/sprite-menu.png')}}" />
                    </div>
                    <a class="mob-w menu-seja-fluente" href="javascript:">BLOG</a>
                </li>
                <li class="only-mobile">
                    <div class="icon s-corporativo">
                        <img alt="" src="{{url('assets/frontend/css/images/icone-e-mail.png')}}" />
                    </div>
                    <a class="mob-w" href="#">Portal do Aluno</a>
                </li>
                <li>
                    <!--ativo-bg-mobile-->
                    <div class="icon contato">
                        <img alt="" src="{{url('assets/frontend/css/images/sprite-menu.png')}}" />
                    </div>
                    <a class="mob-w menu-fale-conosco" href="{{ route('web.contact') }}">FALE <br /> CONOSCO</a>
                </li>
            </ul>
            <div class="rbe">
                <ul class="redes">
                    <li>
                        <a class="instagram-fan-page" target="_blank" href="https://www.instagram.com/cnaoficial">
                            <div class="icon ins">
                                <img alt="" src="{{url('assets/frontend/css/images/sprite-redes.png')}}" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="facebook-fan-page" target="_blank" href="https://www.facebook.com/CNAoficial?fref=ts">
                            <div class="icon fb">
                                <img alt="" src="{{url('assets/frontend/css/images/sprite-redes.png')}}" />
                            </div>
                        </a>
                    </li>                    
                    <li>
                        <a class="whatsapp-fan-page" target="_blank" href="https://www.linkedin.com/company/472767?trk=tyah&amp;trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A472767%2Cidx%3A2-1-5%2CtarId%3A1441229978071%2Ctas%3Acna%20idiomas">
                            <div class="icon in">
                                <img alt="" src="{{url('assets/frontend/css/images/sprite-redes.png')}}" />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        @include('flash::message')
        @yield('content')
</body>

</html>