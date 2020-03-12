var Noticias = function () {
    return {
        Listar: function (url, filter) {
            $.post(url, filter, function (data) {

                $('#div-lista-noticia').empty();
                $('#div-lista-noticia').html(data);

            }).fail(function (er) { console.log(er); });
        }
    }
}();