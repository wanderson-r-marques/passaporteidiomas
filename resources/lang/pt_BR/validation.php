<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'O campo <b>:attribute</b> deve ser aceito.',
    'active_url'           => 'O campo <b>:attribute</b> não é uma URL válida.',
    'after'                => 'O campo <b>:attribute</b> deve ser uma data posterior a :date.',
    'after_or_equal'       => 'O campo <b>:attribute</b> deve ser uma data posterior ou igual a :date.',
    'alpha'                => 'O campo <b>:attribute</b> só pode conter letras.',
    'alpha_dash'           => 'O campo <b>:attribute</b> só pode conter letras, números e traços.',
    'alpha_num'            => 'O campo <b>:attribute</b> só pode conter letras e números.',
    'array'                => 'O campo <b>:attribute</b> deve ser uma matriz.',
    'before'               => 'O campo <b>:attribute</b> deve ser uma data anterior :date.',
    'before_or_equal'      => 'O campo <b>:attribute</b> deve ser uma data anterior ou igual a :date.',
    'between'              => [
        'numeric' => 'O campo <b>:attribute</b> deve ser entre :min e :max.',
        'file'    => 'O campo <b>:attribute</b> deve ser entre :min e :max kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser entre :min e :max caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve ter entre :min e :max itens.',
    ],
    'boolean'              => 'O campo <b>:attribute</b> deve ser verdadeiro ou falso.',
    'confirmed'            => 'O campo <b>:attribute</b> de confirmação não confere.',
    'date'                 => 'O campo <b>:attribute</b> não é uma data válida.',
    'date_equals'          => 'O campo <b>:attribute</b> deve ser uma data igual a :date.',
    'date_format'          => 'O campo <b>:attribute</b> não corresponde ao formato :format.',
    'different'            => 'Os campos <b>:attribute</b> e :other devem ser diferentes.',
    'digits'               => 'O campo <b>:attribute</b> deve ter :digits dígitos.',
    'digits_between'       => 'O campo <b>:attribute</b> deve ter entre :min e :max dígitos.',
    'dimensions'           => 'O campo <b>:attribute</b> tem dimensões de imagem inválidas.',
    'distinct'             => 'O campo <b>:attribute</b> campo tem um valor duplicado.',
    'email'                => 'O campo <b>:attribute</b> deve ser um endereço de e-mail válido.',
    'ends_with'            => 'O campo <b>:attribute</b> deve terminar com um dos seguintes: :values',
    'exists'               => 'O campo <b>:attribute</b> selecionado é inválido.',
    'file'                 => 'O campo <b>:attribute</b> deve ser um arquivo.',
    'filled'               => 'O campo <b>:attribute</b> deve ter um valor.',
    'gt' => [
        'numeric' => 'O campo <b>:attribute</b> deve ser maior que :value.',
        'file'    => 'O campo <b>:attribute</b> deve ser maior que :value kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser maior que :value caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve conter mais de :value itens.',
    ],
    'gte' => [
        'numeric' => 'O campo <b>:attribute</b> deve ser maior ou igual a :value.',
        'file'    => 'O campo <b>:attribute</b> deve ser maior ou igual a :value kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser maior ou igual a :value caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve conter :value itens ou mais.',
    ],
    'image'                => 'O campo <b>:attribute</b> deve ser uma imagem.',
    'in'                   => 'O campo <b>:attribute</b> selecionado é inválido.',
    'in_array'             => 'O campo <b>:attribute</b> não existe em :other.',
    'integer'              => 'O campo <b>:attribute</b> deve ser um número inteiro.',
    'ip'                   => 'O campo <b>:attribute</b> deve ser um endereço de IP válido.',
    'ipv4'                 => 'O campo <b>:attribute</b> deve ser um endereço IPv4 válido.',
    'ipv6'                 => 'O campo <b>:attribute</b> deve ser um endereço IPv6 válido.',
    'json'                 => 'O campo <b>:attribute</b> deve ser uma string JSON válida.',
    'lt' => [
        'numeric' => 'O campo <b>:attribute</b> deve ser menor que :value.',
        'file'    => 'O campo <b>:attribute</b> deve ser menor que :value kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser menor que :value caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve conter menos de :value itens.',
    ],
    'lte' => [
        'numeric' => 'O campo <b>:attribute</b> deve ser menor ou igual a :value.',
        'file'    => 'O campo <b>:attribute</b> deve ser menor ou igual a :value kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser menor ou igual a :value caracteres.',
        'array'   => 'O campo <b>:attribute</b> não deve conter mais que :value itens.',
    ],
    'max' => [
        'numeric' => 'O campo <b>:attribute</b> não pode ser superior a :max.',
        'file'    => 'O campo <b>:attribute</b> não pode ser superior a :max kilobytes.',
        'string'  => 'O campo <b>:attribute</b> não pode ser superior a :max caracteres.',
        'array'   => 'O campo <b>:attribute</b> não pode ter mais do que :max itens.',
    ],
    'mimes'                => 'O campo <b>:attribute</b> deve ser um arquivo do tipo: :values.',
    'mimetypes'            => 'O campo <b>:attribute</b> deve ser um arquivo do tipo: :values.',
    'min' => [
        'numeric' => 'O campo <b>:attribute</b> deve ser pelo menos :min.',
        'file'    => 'O campo <b>:attribute</b> deve ter pelo menos :min kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ter pelo menos :min caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve ter pelo menos :min itens.',
    ],
    'not_in'               => 'O campo <b>:attribute</b> selecionado é inválido.',
    'not_regex'            => 'O campo <b>:attribute</b> possui um formato inválido.',
    'numeric'              => 'O campo <b>:attribute</b> deve ser um número.',
    'password'             => 'A senha está incorreta.',
    'present'              => 'O campo <b>:attribute</b> deve estar presente.',
    'regex'                => 'O campo <b>:attribute</b> tem um formato inválido.',
    'required'             => 'O campo <b><b>:attribute</b></b> é obrigatório.',
    'required_if'          => 'O campo <b>:attribute</b> é obrigatório quando :other for :value.',
    'required_unless'      => 'O campo <b>:attribute</b> é obrigatório exceto quando :other for :values.',
    'required_with'        => 'O campo <b>:attribute</b> é obrigatório quando :values está presente.',
    'required_with_all'    => 'O campo <b>:attribute</b> é obrigatório quando :values está presente.',
    'required_without'     => 'O campo <b>:attribute</b> é obrigatório quando :values não está presente.',
    'required_without_all' => 'O campo <b>:attribute</b> é obrigatório quando nenhum dos :values estão presentes.',
    'same'                 => 'Os campos <b>:attribute</b> e :other devem corresponder.',
    'size'                 => [
        'numeric' => 'O campo <b>:attribute</b> deve ser :size.',
        'file'    => 'O campo <b>:attribute</b> deve ser :size kilobytes.',
        'string'  => 'O campo <b>:attribute</b> deve ser :size caracteres.',
        'array'   => 'O campo <b>:attribute</b> deve conter :size itens.',
    ],
    'starts_with'          => 'O campo <b>:attribute</b> deve começar com um dos seguintes valores: :values',
    'string'               => 'O campo <b>:attribute</b> deve ser uma string.',
    'timezone'             => 'O campo <b>:attribute</b> deve ser uma zona válida.',
    'unique'               => 'O campo <b>:attribute</b> já está sendo utilizado.',
    'uploaded'             => 'Ocorreu uma falha no upload do campo <b>:attribute</b>.',
    'url'                  => 'O campo <b>:attribute</b> tem um formato inválido.',
    'uuid' => 'O campo <b>:attribute</b> deve ser um UUID válido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'address'   => 'endereço',
        'age'       => 'idade',
        'body'      => 'conteúdo',
        'city'      => 'cidade',
        'country'   => 'país',
        'date'      => 'data',
        'day'       => 'dia',
        'excerpt'   => 'resumo',
        'first_name' => 'primeiro nome',
        'gender'    => 'gênero',
        'hour'      => 'hora',
        'last_name' => 'sobrenome',
        'message'   => 'mensagem',
        'minute'    => 'minuto',
        'mobile'    => 'celular',
        'month'     => 'mês',
        'name'      => 'nome',
        'password'  => 'senha',
        'phone'     => 'telefone',
        'second'    => 'segundo',
        'sex'       => 'sexo',
        'state'     => 'estado',
        'subject'   => 'assunto',
        'text'      => 'texto',
        'time'      => 'hora',
        'title'     => 'título',
        'username'  => 'usuário',
        'year'      => 'ano',
        'description' => 'descrição',
        'password_confirmation' => 'confirmação da senha',
    ],

];
