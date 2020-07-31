// ReSharper disable UseOfImplicitGlobalInFunctionScope
var Detalhe = function () {
	return {
		Init: function () {
			$(".telefone").mask(SPMaskBehavior, spOptions);

			// ReSharper disable UnusedLocals
			const $checkoutForm = $("#formDetalhe").validate({
				rules: {
					Nome: { required: true },
					Email: { required: true }
				},
				messages: {
					Nome: { required: "Nome é obrigatório" },
					Email: { required: "E-mail é obrigatório" }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});
			// ReSharper restore UnusedLocals

			$("#btn-enviar").on("click", function () {
				Detalhe.EnviarInformacoesContato();
			});
		},
		EnviarInformacoesContato: function () {
			if ($("#g-recaptcha-response").val() !== "") {
				const isValid = $("#formDetalhe").valid();
				if (isValid) {
					$("#btn-enviar").hide();
					$("#btn-enviando").show();

					const url = "/cna/BuscaEscola/InformacoesContato/routeFilter/";
					$.post(url, $("#formDetalhe").serialize(), function (data) {
						$(".form-contato-sobre").val("");
						$("#btn-enviar").show();
						$("#btn-enviando").hide();
						$(".auxClick").click();

						if (data.status === 200) {
							$(".msg-ok-form").show();

							if (data.tagConversao)
								$(data.tagConversao).appendTo(document.body);
						}
						else
							alert(`Erro ao enviar! \n${data.erro}`);
					});
				}
			}
		}
	}
}();

var Index = function () {
	return {
		Init: function () {
			// ReSharper disable UnusedLocals
			const $checkoutForm = $("#formBusca").validate({
				rules: {
					UF: { required: true },
					cidade: { required: true },
					escola: { required: true },
					inpt_cep: { required: true }
				},
				messages: {
					UF: { required: "Estado é obrigatório" },
					cidade: { required: "Cidade é obrigatório" },
					escola: { required: "Escola é obrigatório" },
					inpt_cep: { required: "CEP é obrigatório" }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});
			// ReSharper restore UnusedLocals

			$("#btn-buscar").on("click", function () {
				Index.ConfigurarHidden();
				Buscar();
			});
		},
		ConfigurarHidden: function () {
			try {
				const estado = $("#UF :selected");
				const cidade = $("#cidade :selected");
				const escola = $("#escola :selected");

				$("#hdCep").val($("#inpt_cep").val());
				$("#hdEstado").val(estado.val() ? estado.text().trim() : "");
				$("#hdCidade").val(cidade.val() ? cidade.text().trim() : "");
				$("#hdEscola").val(escola.val() ? escola.text().trim() : "");
			} catch (e) { }
		},
		VerificaTipoFiltro: function () {
			const tipo = $("#TipoFiltro").val();

			if ($("#TipoFiltro").val().trim() !== "")
				$("#btn-buscar").show();
			else {
				$("#btn-buscar").hide();
				$("#UF").val("").change();
				$("#cidade").val("").change();
				$("#escola").val("").change();
				$("#inpt_cep").val("");
			}

			$(".li-Escola").hide();
			$(".li-cep").hide();
			$(".li-localizacao").hide();

			//1 - localização | 2 - Escola | 3 - CEP
			switch (tipo) {
				case "1":
					$(".li-localizacao").show();
					$("#escola").val("").change();
					$("#inpt_cep").val("");
					break;
				case "2":
					$(".li-Escola").show();
					$("#UF").val("").change();
					$("#cidade").val("").change();
					$("#inpt_cep").val("");
					break;
				case "3":
					$(".li-cep").show();
					$("#UF").val("").change();
					$("#cidade").val("").change();
					$("#escola").val("").change();
					break;
			}
		},
		MontaComboCidade: function (url) {
			const uf = $("#UF").val();
			if (uf !== "") {
				const filter = {
					UF: uf,
					IsPagination: false,
					IsOrderByDynamic: true
				};

				$.get(url, filter, function (data) {
					$("#li-localizacao-cidade").html(data);
				});
			}
		}
	}
}();
// ReSharper restore UseOfImplicitGlobalInFunctionScope