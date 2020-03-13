var FaleConoscoParceiro = function () {    
    return {
        Init: function () {
            $(".telefone").mask(SPMaskBehavior, spOptions);

            $(".inpt_number").mask("999999");
            var $checkoutForm = $("#form-contanto-parceiros").validate({
                rules: {
                    NomeFantasia: { required: true },
                    ResponsavelConvenio: { required: true },
                    Mensagem: { required: true }
                },
                messages: {
                    NomeFantasia: { required: "Nome é obrigatório" },
                    ResponsavelConvenio: { required: "Responsável pelo convênio é obrigatório" },
                    Mensagem: { required: "Mensagem é obrigatório" }
                },
                errorPlacement: function (error, element) {                    
                    error.insertAfter(element.parent());
                }
            });
            //var $checkoutForm = $("#form-contanto-parceiros").validate();
            if (parseInt("0") === parseInt("1")) console.log($checkoutForm);
        },
        EnviarFormulario: function (url) {
            var form = $("#form-contanto-parceiros");
            var isValid = form.valid();
            if (isValid) {
                $("#btnEnviar").hide();
                $("#btn-enviando").show();

                $.post(url,
                    form.serialize(),
                    function (status) {
                        $(".form-contanto-parceiros").val("");

                        $("#btnEnviar").show();
                        $("#btn-enviando").hide();

                        if (status === 200)
                            window.alert("Mensagem enviada com sucesso!");
                        else
                            window.alert("Erro ao enviar!");
                    });
            }
        }
    };
}();