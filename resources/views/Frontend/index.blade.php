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
@endsection
