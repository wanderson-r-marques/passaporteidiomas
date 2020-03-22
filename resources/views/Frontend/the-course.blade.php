@extends('Frontend.Template.master')
@section('content')

    <div class="pg_inicial pg-idioma-ingles"
         style="  background:url({{url('assets/frontend/css/images/bg-sobre-conheca.jpg')}}) no-repeat top right">
        <!-- trocar o bg quando for preto  bg-preto-ingles.png -->
        <div class="degrade-bg">
            <div class="portais">
                <ul>
                    <li>
                        <a id="p-aluno" href="https://www.cnanet.com.br/" target="_blank"><h2>portal do aluno</h2></a>

                    </li>

                    <!-- <li>
                        <a id="p-corporativo" href="http://www.portalcna.com.br/"><h2>portal corporativo</h2></a>
                        <div class="modal-corporativo" style="display:none">
                            <form class="formulario-home" action="http://www.portalcna.com.br/ashx/Login_Handler.ashx">
                                <ul>
                                    <li>
                                        <p>Login</p>
                                    </li>
                                    <li>
                                        <input class="ipt-email" type="text" maxlength="100" name="cnaLogin" placeholder="E-mail">
                                    </li>
                                    <li>
                                        <input class="ipt-senha" type="password" maxlength="10" name="cnaSec" placeholder="Senha">
                                    </li>
                                    <li>
                                        <a href="http://www.portalcna.com.br/" target="_blank">Esqueci minha senha</a>
                                    </li>
                                    <li>
                                        <input class="submit-buscar" type="submit" value="entrar">
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </li> -->

                    <li>
                        <a id="p-corporativo" href="https://www.portalcna.com.br/" target="_blank">
                            <h2>Portal Corporativo</h2>
                        </a>
                    </li>

                    <li style="display: none;">
                        <a id="p-blog" href="#" target="_blank">
                            <h2>Blog</h2>
                        </a>
                    </li>
                    <!-- Alteração emergencial Welington-->

                </ul>
            </div>

            <div class="sub-menu-idiomas">
                <ul>
                    <li><a href='conheca-o-cna.html' class="sub-menu-ativo conheca-cna">Conheça o CNA</a></li>
                    <li><a href='noticias.html' class="sub-menu-ativo noticias-cna">Notícias</a></li>
                    <li><a href='exchange.html' class="sub-menu-ativo speaking-cna">Speaking Exchange</a></li>
                    <li><a href='responsabilidade-social.html' class="sub-menu-ativo responsabilidade-cna">Responsabilidade
                            Social</a></li>
                    <!--<li><a href='/cna/MontaDynamicUrl/Index/41' class="sub-menu-ativo campanha-cna">Campanha</a></li>-->
                </ul>
            </div>

            <div class="envolve-h2-idioma-padrao">
                <div class="h2-idioma-padrao">
                    <h1 class="ingles-crianca icone-conheca">Conheça o CNA</h1>
                </div>
            </div>
            <div id="content-1" class="conteudo-div content">
                <div class="max-600px">
                    <div class="sobre-cna">
                        <h2>ESTE É O NOSSO MUNDO</h2>
                        <p>
                            O <span>CNA</span> é uma das maiores e mais tradicionais redes de
                            <span>escolas de idiomas</span>
                            do Brasil, com mais de 45 anos de atuação no ensino de inglês e espanhol. Atualmente, cerca
                            de
                            400 mil alunos fazem parte do Mundo CNA em aproximadamente 600 escolas localizadas em todo o
                            território nacional.
                        </p>
                        <ul class="sobre-unidades">
                            <li>
                                <p>+ de<span> 45</span></p>
                                <p>anos de <br/>atuação</p>
                            </li>
                            <li>
                                <p><span>400 </span>mil</p>
                                <p>alunos</p>
                            </li>
                            <li>
                                <p>aproximadamente <span>600</span></p>
                                <p>escolas</p>
                            </li>
                        </ul>
                    </div>
                    <div class="sobre-cna">
                        <h2>O JEITO CNA DE ENSINAR</h2>
                        <p>
                            A metodologia de ensino do CNA permite ao aluno falar, ler, escrever e compreender o novo
                            idioma
                            naturalmente, vivenciando situações do dia a dia, por meio de uma plataforma de ensino
                            integrada.
                        </p>
                        <div class="ingles-criancas cna-360">
                            <ul>
                                <li>
                                    <img src="../css/images/icone-360.png">
                                    <p>
                                        Tudo isso faz parte do <span>CNA 360,</span> que combina componentes presenciais
                                        e a
                                        distância para oferecer uma <span>experiência de aprendizagem </span> completa.
                                        <a class="sobre-cna-360" href="https://youtu.be/8xu4M7DbZfk" target="_blank">
                                            Saiba mais sobre o CNA 360 aqui.
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sobre-cna">
                        <h2>QUALIDADE DE ENSINO RECONHECIDA</h2>
                        <p>
                            A qualidade de ensino do CNA é reconhecida. A prova final do curso de inglês para adultos é
                            o
                            exame para o certificado internacional Cambridge English: First (FCE), aceito por mais de 20
                            mil
                            empresas e universidades em todo o mundo. Essa é mais uma prova da qualidade de ensino do
                            CNA.
                        </p>
                    </div>
                    <div class="sobre-cna">

                        <p>
                            Além de oferecer todas as ferramentas para o aprendizado do idioma espanhol, o CNA também
                            proporciona aos alunos do curso CNA En Contacto 4 a chance de obter o certificado de
                            proficiência em
                            espanhol <span>SIELE</span> como prova final do curso sem custos adicionais.
                        </p>

                    </div>
                    <div class="sobre-cna">
                        <div class="ingles-criancas cna-360">
                            <h2>PROPÓSITO, MISSÃO, VISÃO E VALORES DO CNA</h2>
                            <div class="sobre-cna">
                                <h5>Propósito</h5>
                                <p>Educar para o desenvolvimento das pessoas e a construção de uma sociedade melhor.</p>
                            </div>
                            <div class="sobre-cna">
                                <h5>Missão do Franqueador</h5>
                                <p>
                                    Realizar a melhor gestão de rede, oferecendo produtos, serviços e atendimento de
                                    qualidade,
                                    criando vínculos verdadeiros e duradouros com franqueados, alunos e sociedade.
                                </p>
                            </div>
                            <div class="sobre-cna">
                                <h5>Missão das Escolas da Rede CNA</h5>
                                <p>
                                    Oferecer excelência no ensino de idiomas e no atendimento, garantindo o
                                    desenvolvimento de
                                    alunos e sociedade.
                                </p>
                            </div>
                            <div class="sobre-cna">
                                <h5>Visão do Franqueador</h5>
                                <p>
                                    Ser a maior e melhor rede de ensino de idiomas do país, atuando na transformação da
                                    vida
                                    das pessoas.
                                </p>
                            </div>
                            <div class="sobre-cna">
                                <h5>Visão das Escolas da Rede CNA</h5>
                                <p>Ser a referência no ensino de idiomas, atuando na transformação da vida das
                                    pessoas.</p>
                            </div>
                            <div class="sobre-cna">
                                <h5>Valores</h5>
                                <ul class="caracteristicas-cna">
                                    <li>
                                        <p>
                                            <span>Alegria:</span> Nosso bem mais precioso são as pessoas. Mantemos um
                                            ambiente
                                            alegre e saudável, para que elas desenvolvam seu talento com paixão e
                                            entusiasmo.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span>Inovação, ousadia e protagonismo:</span> A busca por resultados
                                            consistentes
                                            nos motiva a ir além. Acreditamos que a inovação e a ousadia são fontes
                                            permanentes
                                            para o nosso crescimento.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span>Cordialidade e encantamento:</span> Atender bem e superar expectativas
                                            são
                                            nossa obstinação. Buscamos encantar nossos clientes oferecendo experiências
                                            únicas,
                                            com impacto transformador em suas vidas.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span>Ética, respeito e credibilidade:</span> A integridade nos guia. Somos
                                            transparentes, éticos e acreditamos que o respeito é a essência de qualquer
                                            relação.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span>Diversidade e responsabilidade:</span> Acolhemos a diversidade em
                                            todas as
                                            suas formas. Somos uma empresa socialmente responsável e atuamos com
                                            responsabilidade
                                            empresarial na busca de nossos resultados.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <span>Engajamento:</span> Trabalhamos de forma engajada e conectada em rede,
                                            construindo juntos o sucesso do nosso negócio e uma sociedade melhor. Somos
                                            um só CNA.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="sobre-cna">
                                <div class="video-container">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3RlxB2WPkuY"
                                            frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sobre-cna">
                        <a href="../seja-um-franqueado.html">
                            <h2>REFERÊNCIA EM FRANCHISING </h2>
                            <p>
                                <span>INVESTIR EM EDUCAÇÃO É UM BOM NEGÓCIO</span><br/>
                                A rede de idiomas CNA opera em todo território nacional por meio do sistema de
                                franchising. É
                                um modelo de negócio reconhecido e consagrado.
                            </p>
                        </a>
                    </div>
                    <div class=" ingles-criancas">
                        <ul>
                            <li>
                                <img alt="" src="../css/images/icone-premio.png"/>
                                <p>
                                    O CNA é o único franqueador brasileiro a receber por <span>
                                    26 vezes consecutivas o Selo de
                                    Excelência em Franchising
                                </span>, da Associação Brasileira de Franchising (ABF).
                                </p>
                            </li>
                            <li>
                                <img alt="" src="../css/images/icone-pessoas.png"/>
                                <p>O CNA conquistou o
                                    <span>Selo 5 Estrelas - As Melhores Franquias do Brasil 2018</span>, promovido pela
                                    Revista Pequenas Empresas & Grandes Negócios, da Editora Globo. </p>
                            </li>
                            <li>
                                <img alt="" src="../css/images/icone-pessoas.png"/>
                                <p>Está na lista <span>Top 25 do Franchising Brasileiro</span> organizada pelo Grupo
                                    Bittencourt.</p>
                            </li>
                        </ul>
                    </div>

                    <div class="compartilhamento">
                        <ul>
                            <li>
                                <a id="scroll-print" href="javascript:void(0)"><img
                                        src="../css/images/icon-compartilhar.png"></a>
                            </li>
                            <!-- <li class="pdf">
                              <a  href="javascript:void(0)"><img src="/css/images/icon-compartilhar2.png"></a>
                            </li> -->
                            <li>
                                <a id="share" href="javascript:void(0)"><img src="../css/images/icon-compartilhar.png"></a>
                            </li>
                        </ul>
                        <!-- Go to www.addthis.com/dashboard to customize your tools -->
                        <div style="display:none" class="share-div addthis_sharing_toolbox"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
