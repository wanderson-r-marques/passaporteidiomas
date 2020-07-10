@extends('layouts.app')
@section('content')

<div class="container">

    <div class="row">
        <h2 class="d-block w-100">Notícias - <span class="text-success">Cadastro</span></h2>
        <hr class="w-100">

        <form action="{{route('dashboard.blogs.store')}}" enctype="multipart/form-data" class="w-100" method="post">
            @csrf
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" value="{{ old('title') }}" name="title" id="title" class="form-control">
            </div>

            <div class="form-group">
                <label for="description">Descrição</label>
                <textarea name="description" id="description" class="form-control">{{ old('description') }}</textarea>
            </div>
            <span>Banner</span>
            <div class="custom-file mt-1 mb-4">
                <input type="file" name="slider" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Selecione a imagem</label>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input name="is_slider" {{ (old('is_slider') ? 'checked' : '') }} value="1" class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        É um slider?
                    </label>
                </div>
            </div>
            <div class="d-none slider2">
                <span>Banner Mobile</span>
                <div class="custom-file mt-1 mb-4">
                    <input type="file" name="slider2" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Selecione a imagem</label>
                </div>
            </div>
            <div class="form-group">
                <label for="content">Conteúdo</label>
                <textarea name="content" id="content" class="form-control">{{ old('content') }}</textarea>
            </div>

            <button class="btn btn-primary" type="submit">Cadastrar</button>
        </form>

    </div>
</div>
@endsection

@section('scripts')
<script>
    function isSlider() {
        const slider2 = document.querySelector('.slider2')        
        document.querySelector('input[name="is_slider"]').onclick = function() {
            if (this.checked)
                slider2.classList.remove('d-none')
            else
                slider2.classList.add('d-none')
        }
    }
    isSlider()
</script>
@endsection