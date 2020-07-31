
(function () {

	setTimeout(function () {
		window.onload = loadCnaOla();
	}, 2000);

	function loadCnaOla() {

	//	var host = "http://localhost:28331/";
	//	var host = "http://cna.targetsoftware.com.br:8382/";
		var host = "https://www.cna.com.br/";

		var params = getParams("cnaola");

		var ticks = ((new Date().getTime() * 10000) + 621355968000000000);
		var id_chat = "5731I0000005S9a";
		var completePage = true;

		var divMain = document.createElement("div");
		divMain.style.maxWidth = "560px";
		divMain.style.margin = "0 auto";
		divMain.id = "main-cnaola";

		var divConteudo = document.createElement("div");
		divConteudo.id = "content-cnaola";
		divMain.appendChild(divConteudo);

		var divCNAOlaCentral = document.getElementById("CNAOlaCentral");
		if (divCNAOlaCentral) {
			divCNAOlaCentral.appendChild(divMain);
			makefrm_perguntas();
		}
		else {
			if (params && JSON.parse(params.fullbar || false))
				make_barfooter_cnaola();
			else
				make_buttonfooter_cnaola();

			makemodal();

			completePage = false;
		}

		makemodal_actions();
		makemodal_css();
		makechat();

		function open_modal(tab) {

			if (tab == "chat") {
				var isOffline = document.getElementById('liveagent_button_online').style.display == "none";
				if (isOffline) {
					confirm("Chat está offline")
					return;
				}
				liveagent.startChat(id_chat);
				return;
			}

			if (tab == "email")
				makefrm_email();

			if (tab == "telefone")
				makefrm_telefone();

			if (tab == "perguntas")
				makefrm_perguntas();

			if (!tab)
				makefrm_perguntas();

			var divModal = document.getElementById("modal-cnaola");
			divModal.style.display = "block";

		}

		function make_buttonfooter_cnaola() {
			var buttonBottom = document.createElement("div");
			buttonBottom.id = "buttonfooter-cnaola"
			buttonBottom.style.position = "fixed";
			buttonBottom.style.display = "block";
			buttonBottom.style.bottom = "0px";
			buttonBottom.style.left = "66%";
			buttonBottom.style.zIndex = "8";
			buttonBottom.style.marginBottom = "0px";
			buttonBottom.style.marginRight = "200px";
			buttonBottom.style.width = "112px";
			document.body.appendChild(buttonBottom);

			var buttonBottomImage = document.createElement("img");
			buttonBottomImage.setAttribute("src", host + "external/cnaola/img/cna_ola.png");
			buttonBottomImage.setAttribute("alt", "CNA Olá");
			buttonBottom.appendChild(buttonBottomImage);

			buttonBottom.innerHTML +=
				'<a title="Atendimento Inteligente" class="btn-cnaola-footer" id="btn-cnaola-footer-perguntas" style=" \
                    height: 20px; \
                    width: 20px; \
                    position: absolute; \
                    left: 7px; \
                    top: 7px;"></a> \
                <a title="Agendar uma ligação" class="btn-cnaola-footer" id="btn-cnaola-footer-telefone" style=" \
                    height: 20px; \
                    width: 20px; \
                    position: absolute; \
                    left: 29px; \
                    top: 7px;"></a> \
                <a title="Chat" class="btn-cnaola-footer" id="btn-cnaola-footer-chat" style=" \
                    height: 20px; \
                    width: 21px; \
                    position: absolute; \
                    left: 51px; \
                    top: 7px;"></a> \
                <a title="E-mail" class="btn-cnaola-footer" id="btn-cnaola-footer-email" style=" \
                    height: 20px; \
                    width: 20px; \
                    position: absolute; \
                    left: 75px; \
                    top: 7px;"></a> ';

			if (buttonBottomImage) {

				buttonBottomImage.onclick = function () {
					open_modal();
				};

				var btnPergunta = document.getElementById("btn-cnaola-footer-perguntas");
				if (btnPergunta)
					btnPergunta.onclick = function () {
						open_modal('perguntas');
					};

				var btnTelefone = document.getElementById("btn-cnaola-footer-telefone");
				if (btnTelefone)
					btnTelefone.onclick = function () {
						open_modal('telefone');
					};

				var btnChat = document.getElementById("btn-cnaola-footer-chat");
				if (btnChat)
					btnChat.onclick = function () {
						open_modal('chat');
					};

				var btnEmail = document.getElementById("btn-cnaola-footer-email");
				if (btnEmail)
					btnEmail.onclick = function () {
						open_modal('email');
					};
			}

		}

		function make_barfooter_cnaola() {
			var ifrm = document.createElement("div");

			var request = makeHttpObject();
			request.open("GET", host + "external/cnaola/html/footerbar-cnaola.html?v=" + ticks, true);
			request.send(null);
			request.onreadystatechange = function () {
				if (request.readyState == 4)
					ifrm.innerHTML = request.responseText;
			};

			//ifrm.setAttribute("src", host + "external/cnaola/html/footerbar-cnaola.html?v=" + ticks);

			ifrm.id = "iframe-footerbar";
			ifrm.allowtransparency = "true";
			ifrm.scrolling = "no";
			ifrm.frameborder = "0";
			ifrm.marginheight = "0";
			ifrm.marginwidth = "0";

			ifrm.style.position = "fixed";
			ifrm.style.bottom = "0px";
			ifrm.style.border = "0px";
			ifrm.style.width = "100%";
			ifrm.style.zIndex = "999";

			document.body.appendChild(ifrm);
		}

		function makemodal() {

			var divModal = document.createElement("div");
			divModal.classList.add("modal-cnaola");
			divModal.setAttribute("role", "dialog");
			divModal.id = "modal-cnaola";
			document.body.appendChild(divModal);

			var divModalBody = document.createElement("div");
			divModalBody.classList.add("modal-cnaola-body");
			divModal.appendChild(divModalBody);

			var divModalHeader = document.createElement("div");
			divModalHeader.classList.add("modal-cnaola-header");
			divModalBody.appendChild(divModalHeader);

			var buttonClose = document.createElement("a");
			buttonClose.setAttribute("title", "Fechar");
			buttonClose.classList.add("modal-cnaola-close");
			buttonClose.style = "cursor:pointer;"
			divModalHeader.appendChild(buttonClose);

			var divPoints = document.createElement("div");
			divPoints.classList.add("modal-cnaola-points");
			divModalHeader.appendChild(divPoints);

			var divModalContent = document.createElement("div");
			divModalContent.classList.add("modal-cnaola-content");
			divModalBody.appendChild(divModalContent);

			var h1Title = document.createElement("h1");
			h1Title.innerText = "Bem vindo ao mundo CNA!";
			h1Title.classList.add("titleTab");
			divModalContent.appendChild(h1Title);

			divModalContent.appendChild(divMain);

			if (buttonClose)
				buttonClose.onclick = function (event) {
					event.preventDefault();
					divModal.style.display = "none";
				}

			window.onclick = function (event) {
				if (event.target == divModal) divModal.style.display = "none";
			}

		}

		function makemodal_actions() {

			var divMore = document.createElement("div");
			divMore.classList.add("mensagemRodape");
			divMore.innerHTML = 'Quer saber mais? Temos outros canais diretos de atendimento. Escolha um: <br />'
			divMain.appendChild(divMore);

			var ul = document.createElement("ul");
			ul.classList.add("itens-rodape");
			divMore.appendChild(ul);

			var btnChat = document.createElement("img");
			btnChat.setAttribute("src", host + "external/cnaola/img/chat.png");
			btnChat.setAttribute("alt", "Chat");
			btnChat.setAttribute("title", "Online");
			btnChat.id = "liveagent_button_online";
			btnChat.classList.add("img-rodape-cnaola");
			btnChat.style = "display: none;"

			var btnChatOff = document.createElement("img");
			btnChatOff.setAttribute("src", host + "external/cnaola/img/chat.png");
			btnChatOff.setAttribute("alt", "Chat");
			btnChatOff.setAttribute("title", "Offline");
			btnChatOff.id = "liveagent_button_offline";
			btnChatOff.classList.add("img-rodape-cnaola");
			btnChatOff.style = "cursor:no-drop;"

			var liChat = document.createElement("li");
			liChat.appendChild(btnChat);
			liChat.appendChild(btnChatOff);
			ul.appendChild(liChat);

			if (completePage) {
				var spanChat = document.createElement("span");
				spanChat.id = "liveagent_span_online";
				spanChat.innerText = "Iniciar \n Chat";
				spanChat.classList.add("txt-rodape-cnaola");
				spanChat.style = "display: none;"

				var spanChatOff = document.createElement("span");
				spanChatOff.id = "liveagent_span_offline";
				spanChatOff.innerText = "Chat \n Offline";
				spanChatOff.classList.add("txt-rodape-cnaola");
				spanChatOff.style = "cursor:no-drop;"

				var liSpanChat = document.createElement("li");
				liSpanChat.appendChild(spanChatOff);
				liSpanChat.appendChild(spanChat);
				ul.appendChild(liSpanChat);
			}

			var btnEmail = document.createElement("img");
			btnEmail.setAttribute("src", host + "external/cnaola/img/email.png");
			btnEmail.setAttribute("alt", "E-mail");
			btnEmail.setAttribute("title", "E-mail");
			btnEmail.classList.add("img-rodape-cnaola");

			var liEmail = document.createElement("li");
			liEmail.appendChild(btnEmail);
			ul.appendChild(liEmail);

			if (completePage) {
				var spanEmail = document.createElement("span");
				spanEmail.innerText = "Enviar \n E-mail";
				spanEmail.classList.add("txt-rodape-cnaola");
				var liSpanEmail = document.createElement("li");
				liSpanEmail.appendChild(spanEmail);
				ul.appendChild(liSpanEmail);

				if (spanEmail)
					spanEmail.onclick = function () {
						makefrm_email();
					}
			}

			if (completePage) {
				var btnTeleVendas = document.createElement("img");
				btnTeleVendas.setAttribute("src", host + "external/cnaola/img/phone.png");
				btnTeleVendas.setAttribute("alt", "Televendas");
				btnTeleVendas.setAttribute("title", "Televendas");
				btnTeleVendas.classList.add("img-rodape-cnaola")

				var liTeleVendas = document.createElement("li");
				liTeleVendas.appendChild(btnTeleVendas);
				ul.appendChild(liTeleVendas);

				var spanTeleVendas = document.createElement("span");
				spanTeleVendas.innerText = "Televendas \n 4020-0241";
				spanTeleVendas.classList.add("txt-rodape-cnaola");
				var liSpanTeleVendas = document.createElement("li");
				liSpanTeleVendas.appendChild(spanTeleVendas);
				ul.appendChild(liSpanTeleVendas);

				if (btnTeleVendas)
					btnTeleVendas.onclick = function () {
						window.location.href = "tel://+5530044009";
					}

				if (spanTeleVendas)
					spanTeleVendas.onclick = function () {
						window.location.href = "tel://+5530044009";
					}
			}

			var btnPhone = document.createElement("img");
			btnPhone.setAttribute("src", host + "external/cnaola/img/phone.png");
			btnPhone.setAttribute("alt", "Ligação");
			btnPhone.setAttribute("title", "Ligação");
			btnPhone.classList.add("img-rodape-cnaola");

			var liPhone = document.createElement("li");
			liPhone.appendChild(btnPhone);
			ul.appendChild(liPhone);

			if (completePage) {
				var spanPhone = document.createElement("span");
				spanPhone.innerText = "Agendar \n ligação";
				spanPhone.classList.add("txt-rodape-cnaola");
				var liSpanPhone = document.createElement("li");
				liSpanPhone.appendChild(spanPhone);
				ul.appendChild(liSpanPhone);

				if (spanPhone)
					spanPhone.onclick = function () {
						makefrm_telefone();
					}
			}

			if (btnEmail)
				btnEmail.onclick = function () {
					makefrm_email();
				}

			if (btnPhone)
				btnPhone.onclick = function () {
					makefrm_telefone();
				}
		}

		function makefrm_perguntas() {
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src", "https://cna.secure.force.com/artigos");
			ifrm.id = "iframe-perguntas";
			ifrm.allowtransparency = "true";
			ifrm.scrolling = "no";
			ifrm.frameborder = "0";
			ifrm.marginheight = "0";
			ifrm.marginwidth = "0";

			ifrm.style.border = "0";
			ifrm.style.width = "100%";
			ifrm.style.height = "450px";
			ifrm.style.overflow = "auto";

			if (divConteudo.firstChild) divConteudo.removeChild(divConteudo.firstChild);
			divConteudo.appendChild(ifrm);
		}

		function makefrm_email() {
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src", host + "external/cnaola/html/email-cnaola.html?v=" + ticks);
			ifrm.id = "iframe-email";
			ifrm.allowtransparency = "true";
			ifrm.scrolling = "no";
			ifrm.frameborder = "0";
			ifrm.marginheight = "0";
			ifrm.marginwidth = "0";

			ifrm.style.border = "0";
			ifrm.style.width = "100%";
			ifrm.style.height = "445px";
			ifrm.style.overflow = "auto";

			if (divConteudo.firstChild) divConteudo.removeChild(divConteudo.firstChild);
			divConteudo.appendChild(ifrm);
		}

		function makefrm_telefone() {
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src", host + "external/cnaola/html/telefone-cnaola.html?v=" + ticks);
			ifrm.id = "iframe-telefone";
			ifrm.allowtransparency = "true";
			ifrm.scrolling = "no";
			ifrm.frameborder = "0";
			ifrm.marginheight = "0";
			ifrm.marginwidth = "0";

			ifrm.style.border = "0";
			ifrm.style.width = "100%";
			ifrm.style.height = "445px";
			ifrm.style.overflow = "auto";

			if (divConteudo.firstChild) divConteudo.removeChild(divConteudo.firstChild);
			divConteudo.appendChild(ifrm);
		}

		function makechat() {
			var script = document.createElement('script');
			script.setAttribute("src", "https://c.la2-c1-iad.salesforceliveagent.com/content/g/js/42.0/deployment.js");
			script.onload = function () {

				liveagent.init('https://d.la2-c1-iad.salesforceliveagent.com/chat', '5721I0000005VEO', '00D1I000002Kt5J');

				var btnChat = document.getElementById('liveagent_button_online');
				if (btnChat) {
					if (!window._laq) { window._laq = []; }
					window._laq.push(function () {

						liveagent.setChatWindowWidth(480);
						liveagent.setChatWindowHeight(640);

						liveagent.showWhenOnline(id_chat, document.getElementById('liveagent_button_online'));
						liveagent.showWhenOffline(id_chat, document.getElementById('liveagent_button_offline'));

						var spansChat = document.getElementById('liveagent_span_online');
						if (spansChat) {
							liveagent.showWhenOnline(id_chat, document.getElementById('liveagent_span_online'));
							liveagent.showWhenOffline(id_chat, document.getElementById('liveagent_span_offline'));
						}
					});

					btnChat.onclick = function () { liveagent.startChat(id_chat); }

					var spanChat = document.getElementById('liveagent_span_online');
					if (spanChat)
						spanChat.onclick = function () { liveagent.startChat(id_chat); }
				}
			};
			document.body.appendChild(script);
		}

		function makemodal_css() {
			var link = document.createElement('link');
			link.setAttribute("rel", "stylesheet");
			link.setAttribute("type", "text/css");
			link.setAttribute("href", host + "external/cnaola/style.css");
			var head = document.head || document.getElementsByTagName('head')[0];
			head.appendChild(link);
		}

		window.document.addEventListener('CNAOLA_ONBACK', function (event) {
			makefrm_perguntas();
		}, false);

		window.document.addEventListener('CNAOLA_CHAT', function (event) {
			open_modal("chat");
		}, false);

		window.document.addEventListener('CNAOLA_EMAIL', function (event) {
			open_modal("email");
		}, false);

		window.document.addEventListener('CNAOLA_PHONE', function (event) {
			open_modal("telefone");
		}, false);

		window.document.addEventListener('CNAOLA_PERGUNTAS', function (event) {
			open_modal("perguntas");
		}, false);

		window.document.addEventListener('CNAOLA_PERGUNTAS', function (event) {
			open_modal("perguntas");
		}, false);

	}

	function getParams(script_name) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			if (scripts[i].src.indexOf("/" + script_name) > -1) {
				var pa = scripts[i].src.split("?").pop().split("&");
				var p = {};
				for (var j = 0; j < pa.length; j++) {
					var kv = pa[j].split("=");
					p[kv[0]] = kv[1];
				}
				return p;
			}
		}

		return {};
	}

	function makeHttpObject() {
		try { return new XMLHttpRequest(); }
		catch (error) { }
		try { return new ActiveXObject("Msxml2.XMLHTTP"); }
		catch (error) { }
		try { return new ActiveXObject("Microsoft.XMLHTTP"); }
		catch (error) { }

		throw new Error("Could not create HTTP request object.");
	}

})();

function on_chat() {
	window.document.dispatchEvent(new CustomEvent('CNAOLA_CHAT', {}))
}

function on_email() {
	window.document.dispatchEvent(new CustomEvent('CNAOLA_EMAIL', {}))
}

function on_phone() {
	window.document.dispatchEvent(new CustomEvent('CNAOLA_PHONE', {}))
}

function on_perguntas() {
	window.document.dispatchEvent(new CustomEvent('CNAOLA_PERGUNTAS', {}))
}