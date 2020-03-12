var AssessoriaImprensa = function () {
    return {
        Listar: function (url, filter) {
            $.post(url, filter, function (data) {
                $('#div-acessoria-lista').empty();
                $('#div-acessoria-lista').html(data);

            }).fail(function (er) { console.log(er); });
        }
    }
}();