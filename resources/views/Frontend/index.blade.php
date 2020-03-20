@extends('Frontend.Template.master')

@section('content')
    <div class="pg_inicial">
        <div class="slider single-item">
            {{--Início do slider--}}
            <div class="sld-home-1 sld-img-1 sld-home"
                 style="background: url(assets/frontend/css/images/sliders/01.jpg) no-repeat  center center">

                <a href="https://experimentacna.com.br/"></a>
            </div>
            {{--Final do Slider--}}
            {{--Início do slider--}}
            <div class="sld-home-2 sld-img-2 sld-home"
                 style="background: url(assets/frontend/css/images/sliders/01.jpg) no-repeat  center center">

                <a href="https://experimentacna.com.br/"></a>
            </div>
            {{--Final do Slider--}}
        </div>
        <a class="p-slider" href="#" style="display: none"></a>
    </div>
</div>

<div id="buttonfooter-cnaola"
     style="position: fixed; display: block; left: 70%; top: 8%; z-index: 8; margin-right: 200px; width: 200px;"><img
        src="https://www.cna.com.br/external/contatos/img/matricule_se.png" alt="Matricule-se Já">
    <a title="E-mail"
       class="btn-cnaola-footer"
       id="btn-cnaola-footer-email"
       style="                     height: 32px;                     width: 32px;                     position: absolute;                     left: 35px;                     top: 42px;"></a>
    <a title="(11) 4020-0241" class="btn-cnaola-footer" id="btn-cnaola-footer-telefone"
       style="                     height: 32px;                     width: 32px;                     position: absolute;                     left: 84px;                     top: 42px;"></a>
    <a title="WhatsApp" href="https://api.whatsapp.com/send?phone=551130533800" target="_blank"
       class="btn-cnaola-footer" id="btn-whatsapp"
       style="                     height: 32px;                     width: 32px;                     position: absolute;                     left: 134px;                     top: 42px;"></a>
</div>
@endsection
