var ConfiguraSaibaMais = function () {
    return {
        Init: function () {
            $('.conteudo-saiba-mais').find('ul').hide();
            $('.conteudo-saiba-mais').find('h2').on('click', function () {
                $('.conteudo-saiba-mais').find('ul').fadeToggle();
            });

        }
    }
}();