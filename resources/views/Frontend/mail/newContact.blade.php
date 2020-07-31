@component('mail::message')
<h1>Novo contato do site</h1> 
<ul>
    <li>Nome: {{ $request['name'] }}</li>
    <li>E-mail: {{ $request['email'] }}</li>
    <li>Telefone: {{ $request['phone'] }}</li>
    <li>Assunto: {{ $request['subject'] }}</li>
    <li>Mensagem: {{ $request['message'] }}</li>
</ul>
@endcomponent

