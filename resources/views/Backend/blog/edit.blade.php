@extends('layouts.app')
@section('content')

<div class="container">
    <div class="row">
        <h2 class="d-block w-100">Notícias - <span class="text-warning">Editar</span></h2>
        <hr class="w-100">

        <form action="{{route('dashboard.blogs.update',$blog->slug)}}" enctype="multipart/form-data" class="w-100" method="post">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" name="title" id="title" value="{{ $blog->title }}" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <textarea name="description" id="description" class="form-control">{{ $blog->description }}</textarea>
            </div>
            <span>Banner</span>
            <div class="custom-file mt-1 mb-4">
                <input type="file" name="slider" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Selecione a imagem</label>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input name="is_slider" {{ (old('is_slider') || $blog->is_slider ? 'checked' : '') }} value="1" class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        É um slider?
                    </label>
                </div>
            </div>
            <div class="{{ !$blog->is_slider ? 'd-none': ''}} slider2">
                <span>Banner Mobile</span>
                <div class="custom-file mt-1 mb-4">
                    <input type="file" name="slider2" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Selecione a imagem</label>
                </div>
            </div>
            <div class="form-group">
                <label for="content">Conteúdo</label>
                <textarea name="content" id="content" class="form-control">{{ $blog->content }}</textarea>
            </div>
            <button class="btn btn-warning" type="submit">Editar</button>
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