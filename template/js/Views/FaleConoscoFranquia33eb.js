var FaleConoscoFranquia = function () {
	return {
		Init: function () {

			$(".telefone").mask(SPMaskBehavior, spOptions);

			var $checkoutForm = $("#form-contanto-franquia").validate({
				rules: {
					Nome: { required: true },
					Email: { required: true },
					TelefoneCelular: { required: true },
					TelefoneComercial: { required: true },
					TelefoneResidencial: { required: true }
				},
				messages: {
					Nome: { required: "Nome é obrigatório" },
					Email: { required: "E-mail é obrigatório" },
					TelefoneCelular: { required: "Telefone celular é obrigatório" },
					TelefoneComercial: { required: "Telefone comercial é obrigatório " },
					TelefoneResidencial: { required: "Telefone residencial é obrigatório " }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});
		},
		EnviarFormulario: function (url) {
			var form = $("#form-contanto-franquia");
			var isValid = form.valid();

			if (isValid) {

				$("#btnEnviar").hide();
				$("#btnEnviando").show();

				$.post(url, form.serialize(), function (status) {
					$(".form-contanto-franquia").val("");
					$(".combo-input").val("");

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