var FaleConoscoAssessoria = function () {
	return {
		Init: function () {

			$(".telefone").mask(SPMaskBehavior, spOptions);

			var $checkoutForm = $("#form-contanto").validate({
				rules: {
					Nome: { required: true },
					Email: { required: true },
					Telefone: { required: true },
					Solicitacao: { required: true }
				},
				messages: {
					Nome: { required: "Nome é obrigatório" },
					Email: { required: "E-mail é obrigatório" },
					Telefone: { required: "Telefone é obrigatório" },
					Solicitacao: { required: "Solicitação é obrigatório " }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});
		},
		EnviarFormulario: function (url) {
			var form = $("#form-contanto");
			var isValid = form.valid();

			if (isValid) {

				$("#btnEnviar").hide();
				$("#btnEnviando").show();

				$.post(url, form.serialize(), function (status) {
					$(".form-contato-assessoria").val("");

					$("#btnEnviar").show();
					$("#btnEnviando").hide();

					if (status === 200)
						alert("Mensagem enviada com Sucesso!");
					else
						alert("Erro ao enviar!");
				});
			}
		}
	}
}();