@extends('Frontend.Template.master')
@section('content')

<div class="pg_inicial pg-idioma-ingles" style="  background:url({{url('assets/frontend/css/images/bg-sobre-conheca.jpg')}}) no-repeat top right">
    {{-- trocar o bg quando for preto  bg-preto-ingles.png  --}}
    <div class="degrade-bg">
        <div class="sub-menu-idiomas">
            <ul>
                <li><a href='{{ route("web.home") }}' class="sub-menu-ativo conheca-cna">Principal</a></li>
                <li><a href='{{ route("web.contact") }}' class="sub-menu-ativo noticias-cna">Fale Conosco</a></li>
            </ul>
        </div>
        <div class="envolve-h2-idioma-padrao">
            <div class="h2-idioma-padrao">
                <h1 class="ingles-crianca icone-conheca">Fale Conosco</h1>
            </div>
        </div>
        <div id="content-1" class="conteudo-div content">
            <div class="max-1000px">
                <div class="sobre-cna">
                    <h2>PREENCHA O FORMULÁRIO CORRETAMENTE</h2>
                    <p>
                        Todos os campos são obrigatórios
                    </p>
                    <form action="{{ route('web.send.contact') }}" method="post">
                        @csrf
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Nome</label>
                                <input required type="text" name="name" class="form-control" placeholder="Digite seu nome completo" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Telefone</label>
                                <input required type="text" name="phone" class="form-control phone" placeholder="Digite um telefone para contato" id="inputPassword4">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">E-mail</label>
                                <input required type="email" name="email" class="form-control" placeholder="Digite um e-mail válido" id="inputPassword4">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Assunto</label>
                            <input required name="subject" type="text" class="form-control" id="inputAddress" placeholder="De qual assunto quer tratar?">
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Mensagem</label>
                            <textarea name="message" required type="text" class="form-control" id="inputAddress2" placeholder="Digite sua menssagem"> </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @endsection