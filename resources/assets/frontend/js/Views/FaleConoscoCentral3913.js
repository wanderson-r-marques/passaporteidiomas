var FaleConoscoCentral = function () {
	return {
		Init: function () {

			$(".telefone").mask(SPMaskBehavior, spOptions);

			var $checkoutForm = $("#form-contanto").validate({
				rules: {
					Nome: { required: true },
					Email: { required: true },
					Descricao: { required: true }
				},
				messages: {
					Nome: { required: "Nome é obrigatório" },
					Email: { required: "E-mail é obrigatório" },
					Descricao: { required: "Descrição é obrigatório" }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});
		},
		EnviarFormulario: function (url) {
			if ($("#g-recaptcha-response").val() !== "") {
				var form = $("#form-contanto");
				var isValid = form.valid();

				if (isValid) {

					$("#btnEnviar").hide();
					$("#btnEnviando").show();

					$.post(url, form.serialize(), function (status) {
						$(".form-central-relacionamento").val("");
						$(".combo-input").val("");

						if (status === 200)
							alert("Mensagem enviada com Sucesso!");
						else
							alert("Erro ao enviar!");

						$("#btnEnviar").show();
						$("#btnEnviando").hide();
					});
				}
			}
		}
	}
}();