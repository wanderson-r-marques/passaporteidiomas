@extends('Frontend.Template.master')
@section('content')
<div class="pg_inicial">
    <div class="slider single-item">
        @foreach($blogs AS $blog)
            {{--Início do slider--}}
            <div class="sld-img-1 sld-home" style='background: url({{ url("storage/{$blog->slider}") }}) no-repeat  center center'>
                <a href="{{route('web.blog.show',$blog->slug)}}"></a>
            </div>
            {{--Final do Slider--}}
        @endforeach
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

    <!-- Imagem do chat -->
    <a href="https://web.whatsapp.com/send?phone=5581992361922" target="_blank" class="chat">
        <img src="{{ url('assets/frontend/css/images/btn-chat.png') }}" alt="Chat">
    </a>

</div>
</div>
@endsection