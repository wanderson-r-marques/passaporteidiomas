function wl(content) {
	document.writeln(content);
        //document.getElementById("frm"+id).innerHTML+=content;
    //console.log(content);
}

function WriteDivMatriculaOnline(id) {
	// ReSharper disable StringLiteralWrongQuotes
    
	var complemento = id === 3 ? " banner divForm" : "";
	wl('<div class="modal-matricula-online-form' + complemento + '" id="formMensagem'+id+'">');
	wl('	<form action="" id="form-matricula-online-' + id + '" name="form-matricula-online-' + id + '">');
	wl('		<div class="full-container">');
	wl('			<input type="text" id="Nome' + id + '" name="Nome' + id + '" placeholder="Nome" class="campo-matricula-online-' + id + '" />');
	wl('		</div>');
	wl('		<div class="full-container">');
	wl('			<input type="text" id="Email' + id + '" name="Email' + id + '" placeholder="Email" class="campo-matricula-online-' + id + '" />');
	wl('		</div>');
	wl('		<div class="left-container">',id);
	wl('			<input type="text" id="Telefone' + id + '" name="Telefone' + id + '" placeholder="Telefone" class="campo-matricula-online-' + id + '"');
	wl('				maxlength="15" />');
	wl('		</div>',id);
	wl('		<div class="right-container">');
	wl('			<input type="text" id="DataNascimento' + id + '" name="DataNascimento' + id + '" placeholder="Data de Nascimento" class="campo-matricula-online-' + id + ' no-spin"');
	wl('				maxlength="10" />');
    wl('		</div>');

	complemento = id === 3 ? ' class="campo-matricula-online-outros-3"' : "";
	wl('		<div class="left-container">');
	wl('			<select id="Idioma' + id + '" name="Idioma' + id + '" onchange="MatriculaOnline.AoMudarIdioma(' + id + ');"' + complemento + '></select>');
	wl('		</div>');
	wl('		<div class="right-container">');
	wl('			<select id="Estado' + id + '" name="Estado' + id + '" onchange="MatriculaOnline.PopularCidades(' + id + ');"' + complemento + '></select>');
	wl('		</div>');
	wl('		<div class="left-container">');
	wl('			<select id="Cidade' + id + '" name="Cidade' + id + '" onchange="MatriculaOnline.PopularEscolas(' + id + ');"' + complemento + '></select>');
	wl('				');
	wl('		</div>');
	wl('		<div class="right-container">');
	wl('			<select id="Escola' + id + '" name="Escola' + id + '"' + complemento + '></select>');
	wl('		</div>');
	wl('		<div class="submit-container left-container">');
	wl('			<input type="button" id="btnEnviar' + id + '" value="cadastrar" />');
	wl('			<input type="button" id="btnEnviando' + id + '" value="Enviando..." style="display:none;" />');
	wl('		</div>');
	if (id === 2) {
		wl('\t	<div class="submit-later-container right-container">');
		wl('\t		<a href="#" class="close-modal">Preencher depois</a>');
		wl('\t	</div>');
	}
	wl('	</form>');
	wl('</div>');
	// ReSharper restore StringLiteralWrongQuotes
    console.log("print complemento "+complemento);
}
var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009";
};

var spOptions = {
	onKeyPress: function (val, e, field, options) {
		field.mask(SPMaskBehavior.apply({}, arguments), options);
	}
};

var MatriculaOnline = function () {
	return {
		Acao: function() {
			$(".p-matricula-online").click();
			MatriculaOnline.PararTemporizador();
		},
		AcaoAux: function () {
			document.title = "<< " + MatriculaOnline.tempo + " >>";
			MatriculaOnline.tempo++;
		},
		PararTemporizador: function () {
			clearInterval(MatriculaOnline.temporizador);
			MatriculaOnline.isIntervalSetted = false;

		//	clearInterval(MatriculaOnline.temporizadorAux);
		//	MatriculaOnline.tempo = 0;
		},
		SetarTemporizador: function () {
			MatriculaOnline.isIntervalSetted = true;
			var interval = 40000 * 1;
			MatriculaOnline.temporizador = setInterval(function () { MatriculaOnline.Acao() }, interval);

		//	MatriculaOnline.temporizadorAux = setInterval(function () { MatriculaOnline.AcaoAux() }, 1000);
		},
		Init: function () {
			MatriculaOnline.temporizador = null;
		//	MatriculaOnline.temporizadorAux = null;
			MatriculaOnline.isIntervalSetted = false;
			MatriculaOnline.inicializado2 = false;
			MatriculaOnline.inicializado3 = false;
			MatriculaOnline.preenchendoFormBanner = false;
			MatriculaOnline.tempo = 0;

			MatriculaOnline.PopularIdiomas(2);
			MatriculaOnline.PopularUfs(2);
			MatriculaOnline.PopularCidades(2);
			MatriculaOnline.SetarMascaraTelefone(2);
			MatriculaOnline.SetarMascaraData(2);
			MatriculaOnline.inicializado2 = true;

			// ReSharper disable UnusedLocals
			var $checkoutForm2 = $("#form-matricula-online-2").validate({
			// ReSharper restore UnusedLocals
				rules: {
					Nome2: { required: true },
					Email2: { required: true, email: true },
					Telefone2: { required: true },
					DataNascimento2: { required: true, dateBR: true },
					Idioma2: { required: true },
					Estado2: { required: true },
					Cidade2: { required: true },
					Escola2: { required: true }
				},
				messages: {
					Nome2: { required: "Campo obrigatório" },
					Email2: { required: "Campo obrigatório" },
					Telefone2: { required: "Campo obrigatório" },
					DataNascimento2: { required: "Campo obrigatório" },
					Idioma2: { required: "Campo obrigatório" },
					Estado2: { required: "Campo obrigatório" },
					Cidade2: { required: "Campo obrigatório" },
					Escola2: { required: "Campo obrigatório" }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
				}
			});

			// ReSharper disable UnusedLocals
			var $checkoutForm3 = $("form-matricula-online-3").validate({
			// ReSharper restore UnusedLocals                
				rules: {
					Nome3: { required: true },
					Email3: { required: true, email: true },
					Telefone3: { required: true },
					DataNascimento3: { required: true, dateBR: true },
					Idioma3: { required: true },
					Estado3: { required: true },
					Cidade3: { required: true },
					Escola3: { required: true }
				},
				messages: {
					Nome3: { required: "Campo obrigatório" },
					Email3: { required: "Campo obrigatório" },
					Telefone3: { required: "Campo obrigatório" },
					DataNascimento3: { required: "Campo obrigatório" },
					Idioma3: { required: "Campo obrigatório" },
					Estado3: { required: "Campo obrigatório" },
					Cidade3: { required: "Campo obrigatório" },
					Escola3: { required: "Campo obrigatório" }
				},
				errorPlacement: function (error, element) {
					error.insertAfter(element.parent());
                    console.log("erro....");
				}
			});
		},
		PopularIdiomas: function (id) {
			var $dropdown = $("#Idioma" + id);
			$dropdown.append($("<option />").val("").text("Idioma"));
			$dropdown.append($("<option />").val("Inglês").text("Inglês"));
			$dropdown.append($("<option />").val("Espanhol").text("Espanhol"));
		},
		ObterNomeEstado: function (sigla) {
			var estados = [
				{ "Sigla": "ac", "Nome": "Acre" },
				{ "Sigla": "al", "Nome": "Alagoas" },
				{ "Sigla": "am", "Nome": "Amazonas" },
				{ "Sigla": "ap", "Nome": "Amapá" },
				{ "Sigla": "ba", "Nome": "Bahia" },
				{ "Sigla": "ce", "Nome": "Ceará" },
				{ "Sigla": "df", "Nome": "Distrito Federal" },
				{ "Sigla": "es", "Nome": "Espírito Santo" },
				{ "Sigla": "go", "Nome": "Goiás" },
				{ "Sigla": "ma", "Nome": "Maranhão" },
				{ "Sigla": "mt", "Nome": "Mato Grosso" },
				{ "Sigla": "ms", "Nome": "Mato Grosso do Sul" },
				{ "Sigla": "mg", "Nome": "Minas Gerais" },
				{ "Sigla": "pa", "Nome": "Pará" },
				{ "Sigla": "pb", "Nome": "Paraíba" },
				{ "Sigla": "pr", "Nome": "Paraná" },
				{ "Sigla": "pe", "Nome": "Pernambuco" },
				{ "Sigla": "pi", "Nome": "Piauí" },
				{ "Sigla": "rj", "Nome": "Rio de Janeiro" },
				{ "Sigla": "rn", "Nome": "Rio Grande do Norte" },
				{ "Sigla": "ro", "Nome": "Rondônia" },
				{ "Sigla": "rs", "Nome": "Rio Grande do Sul" },
				{ "Sigla": "rr", "Nome": "Roraima" },
				{ "Sigla": "sc", "Nome": "Santa Catarina" },
				{ "Sigla": "se", "Nome": "Sergipe" },
				{ "Sigla": "sp", "Nome": "São Paulo" },
				{ "Sigla": "to", "Nome": "Tocantins" }
			];
			var nome;
			$.each(estados, function (i, estado) {
				if (estado.Sigla === sigla.toLowerCase()) {
					nome = estado.Nome;
					return;
				}
			});
			return nome;
		},
		PopularUfs: function (id) {
			var $dropdown = $("#Estado" + id);
			$dropdown.append($("<option />").val("").text("Estado"));
			$.each(ufs, function (i, uf) {
				var sigla = uf.Sigla.toLowerCase();
				$dropdown.append($("<option />").val(sigla).text(MatriculaOnline.ObterNomeEstado(sigla)));
			});
		},
		PopularCidades: function (id) {
			var sigla = $("#Estado" + id).val();

			var $dropdown = $("#Cidade" + id);
			$dropdown.empty();
			$dropdown.append($("<option />").val("").text("Cidade"));

			if (sigla !== "") {
				$.each(ufs, function (i, uf) {
					if (uf.Sigla === sigla.toUpperCase()) {
						$.each(uf.Cidades, function (j, cidade) {
							$dropdown.append($("<option />").val(cidade.Nome).text(cidade.Nome));
						});
						return;
					}
				});
			}

			if (id === 2) {
				if (MatriculaOnline.inicializado2) {
					$dropdown.focus();
				}
			} else {
				if (MatriculaOnline.inicializado3) {
					$dropdown.focus();
				}
			}

			$dropdown = $("#Escola" + id);
			$dropdown.empty();
			$dropdown.append($("<option />").val("").text("Escola"));
		},
		PopularEscolas: function (id) {
			var siglaUf = $("#Estado" + id).val();
			var nome = $("#Cidade" + id).val();

			var $dropdown = $("#Escola" + id);
			$dropdown.empty();
			$dropdown.append($("<option />").val("").text("Escola"));

			$.each(ufs, function (i, uf) {
				if (uf.Sigla === siglaUf.toUpperCase()) {
					$.each(uf.Cidades, function (j, cidade) {
						if (cidade.Nome === nome) {
							$.each(cidade.Escolas, function (k, escola) {
								var value = escola.Id + "|" + escola.Nome + "|" + escola.Email;
								value += "|" + escola.Endereco + "|" + escola.BairroCidadeUf + "|" + escola.Telefone;
								$dropdown.append($("<option />").val(value).text(escola.Nome));
							});
							return;
						}
					});
					return;
				}
			});

			if (id === 2) {
				if (MatriculaOnline.inicializado2) {
				    $dropdown.focus();
				   
				}
			} else {
				if (MatriculaOnline.inicializado3) {
					$dropdown.focus();
				}
			}
		},
		IsIE: function () {
			var ua = window.navigator.userAgent;
			// IE 10 => ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
			// IE 11 => ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
			// Edge 12 (Spartan) => ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
			// Edge 13 => ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
			if (ua.indexOf("MSIE ") > 0) { return true; }
			if (ua.indexOf("Trident/") > 0) { return true; }
			if (ua.indexOf("Edge/") > 0) { return true; }
			return false;
		},
		SetarMascaraTelefone: function (id) {
			$("#Telefone" + id).mask(SPMaskBehavior, spOptions);
		},
		SetarMascaraData: function (id) {
			$("#DataNascimento" + id).mask("00/00/0000");
		},
		AoMudarIdioma: function (id) {
			if ($("#Idioma" + id).val() !== "") {
				$("#Estado" + id).focus();
			}
		},
		Limpar: function(id) {
			$(".campo-matricula-online-" + id).val("");
			$("#Idioma" + id).val($("#Idioma" + id + " option:first").val());
			$("#Estado" + id).val($("#Estado" + id + " option:first").val());
			MatriculaOnline.PopularCidades(id);
		},
		PreencherFake: function (id) {
			$("#Nome" + id).val("Leandro Bouffier Utida");
			$("#Email" + id).val("lbutida@hotmail.com");
			$("#Telefone" + id).val("(11) 96419-2398");
			$("#DataNascimento" + id).val("10/07/1976");
			$("#Idioma" + id).val("Inglês");
			$("#Estado" + id).val("sp");
			MatriculaOnline.PopularCidades(id);
			$("#Cidade" + id).val("Sorocaba");
			MatriculaOnline.PopularEscolas(id);
			$("#Escola" + id).prop("selectedIndex", 2);
		},
		AbrirModal: function() {
			var matriculaOnline = $("#hdnMatriculaOnline").val();
			if (matriculaOnline !== "true") {
			    $(".p-matricula-online").fancybox();
			    
			}
		},
		SetarCampoMatriculaOnlineEscola: function (id) {
			var matriculaOnlineEscola = $("#Escola" + id).val() + "|" + $("#Nome" + id).val();
			$("#hdnMatriculaOnlineEscola").val(matriculaOnlineEscola);
		},
		SetarCamposMatriculaOnlineEscola: function(id) {
			var matriculaOnlineEscola = $("#hdnMatriculaOnlineEscola").val();
			if (matriculaOnlineEscola !== "") {
				var dados = matriculaOnlineEscola.split("|");
			//	var escolaId = dados[0];
				var escolaNome = dados[1];
			//	var escolaEmail = dados[2];
				var escolaEndereco = dados[3];
				var escolaBairroCidadeUf = dados[4];
				var escolaTelefone = dados[5];
				var prospectNome = dados[6];
                

				$("#MatriculaOnlineProspectNome" + id).html(prospectNome);
				$("#MatriculaOnlineEscolaNome" + id).html(escolaNome);
				//$("#MatriculaOnlineEscolaEndereco" + id).html(escolaEndereco);
				//$("#MatriculaOnlineEscolaBairroCidadeUf" + id).html(escolaBairroCidadeUf);
				//$("#MatriculaOnlineEscolaTelefone" + id).html(escolaTelefone);
			}
		},
		SetarCamposMatriculaOnlineEscolaGeral: function () {
			MatriculaOnline.SetarCamposMatriculaOnlineEscola(2);
			try {
				MatriculaOnline.SetarCamposMatriculaOnlineEscola(3);
			} catch (err) {
				if (parseInt("0") === parseInt("1")) console.log(err);
			}
		},
		EnviarFormulario: function (id, url) {
			var form = $("#form-matricula-online-" + id);
            console.log("formulario",form);
           
     
			var isValid = form.valid();
            //isValid=false;
            //console.log("retorno isValid"+isValid);
			if (isValid) {
				
				$("#btnEnviar" + id).hide();
				$("#btnEnviando" + id).show();

				// ReSharper disable PossiblyUnassignedProperty
				$.post(url, form.serialize(), function (status) {
				// ReSharper restore PossiblyUnassignedProperty
					$("#btnEnviar" + id).show();
					$("#btnEnviando" + id).hide();

					if (status === 200) {
						MatriculaOnline.SetarCampoMatriculaOnlineEscola(id);
						MatriculaOnline.SetarCamposMatriculaOnlineEscolaGeral();
						$(".modal-matricula-online-form.banner.divMsg").show();
						$(".modal-matricula-online").scrollTop(0);
						
		
                        //$(".modal-matricula-online-form.banner.divForm").hide();
                        //setTimeout(function(){ $("#mostraMensagem").hide(); }, 10000);
                        //setTimeout(function(){$(".modal-matricula-online-form.banner.divMsg").remove();},10000);    
                        //$(".campo-matricula-online-"+id).val("");
						//MatriculaOnline.Limpar(2);
                        //MatriculaOnline.Limpar(3);                        
						try {
							//MatriculaOnline.Limpar(3);
                            $("#Nome"+id).val("");
			                $("#Email"+id).val("");
			                $("#Telefone"+id).val("");
			                $("#DataNascimento"+id).val("");
			                $("#Idioma"+id).val("");
			                $("#Estado"+id).val("");			            
			                $("#Cidade"+id).val("");			            
			                $("#Escola"+id).val("");                            
						} catch(err) {
							if (parseInt("0") === parseInt("1")) console.log(err);
						}

						$("#hdnMatriculaOnline").val("true");
						if (id === 2) {
							$(".fancybox-overlay-fixed").click();
						}
						MatriculaOnline.PararTemporizador();
						$(".p-matricula-online").click(function() {
							return false;
						});
						$(".p-mensagem-sucesso").click();
						if (id === 3) {
							$(".p-slider").click();
						}
					} else {
						$(".p-mensagem-erro").click();
					}
				});
			}
		}
	}
}();