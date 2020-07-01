@extends('Frontend.Template.master')
@section('content')
<div class="pg_inicial">
    <div class="slider single-item">
        {{--Início do slider--}}
        <div class="sld-img-1 sld-home" style="background: url(assets/frontend/css/images/sliders/01.jpg) no-repeat  center center">

            <a href="https://passaporteidiomas.com.br/"></a>
        </div>
        {{--Final do Slider--}}
        {{--Início do slider--}}
        <div class="sld-img-2 sld-home" style="background: url(assets/frontend/css/images/sliders/02.jpg) no-repeat  center center">

            <a href="https://passaporteidiomas.com.br/"></a>
        </div>
        {{--Final do Slider--}}
    </div>
    <a class="p-slider" href="#" style="display: none"></a>
    <style type="text/css">        

        @media only screen and (max-width: 980px) {
            .sld-img-1 {
                background: url(assets/frontend/css/images/sliders/01-m.jpg) no-repeat center center !important;
            }

            .sld-img-2 {
                background: url(assets/frontend/css/images/sliders/02-m.jpg) no-repeat center center !important;
            }
            
        }       

        body,
        html {
            -ms-overflow-style: none !important;
        }

        @-ms-viewport {
            /* ReSharper disable CssBrowserCompatibility */
            width: device-width;
            /* ReSharper restore CssBrowserCompatibility */
        }      

       
    </style>
</div>
</div>
@endsection