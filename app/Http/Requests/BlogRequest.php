<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:4|max:255',
            'description' => 'required|min:10',
            'content' => 'required|min:10',
            'slider' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'slider2' => 'image|mimes:jpeg,png,jpg|max:2048'
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'Título',
            'description' => 'Descrição',
            'content' => 'Conteudo',
            'slider' => 'Slider',
            'slider2' => 'Slider 2'
        ];
    }
}
