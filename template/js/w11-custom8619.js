
function windowWidth() {
	var width = $(window).width();
	if (width >= 980) {
		$(".slider, .sld-home").height($(window).height());
	} else {
		$(".slider, .sld-home").height($(window).height() - 92);
	}
}

function contentHeight() {
	var windowWidth = $(window).width();
	if (windowWidth >= 980) {
		var margin;
		if ($("#map_canvas").size() > 0) {
			margin = 0;
		} else {
			margin = 180;
		}
		$(".conteudo-div").css("maxHeight", $(window).height() - margin);
		(function ($) {
			$(window).on("load", function () {
				loadMCustomScrollbar();
			});
		})(jQuery);
	}
}

function loadMCustomScrollbar() {
	// ReSharper disable PossiblyUnassignedProperty
	$("#content-1").mCustomScrollbar({
	// ReSharper restore PossiblyUnassignedProperty
		theme: "minimal", scrollInertia: 200
	})/*.on("mouseenter", function () { //cross-domain iframe mousewheel hack
	//	$(this).find("iframe").css("pointer-events", "none");
	}).on("mouseup", function () {
		if (!$(this).find(".mCSB_scrollTools_onDrag").length) return;
		setTimeout(function () { $("#content-1").trigger("mouseenter"); }, 1);
	});
	$(window).on("blur", function () {
		$("#content-1 iframe").css("pointer-events", "auto");
	}).on("focus", function () {
		$("#content-1").trigger("mouseenter");
	})*/;
}

var slider = null;

$(document).ready(function () {

	windowWidth();
	contentHeight();
	$("#content-2").height($(window).height() - ($(".envolve-escolas").innerHeight() + 100));
	// ReSharper disable PossiblyUnassignedProperty
	$("#content-2").mCustomScrollbar({ theme: "minimal" });

	$(window).resize(function () {
		windowWidth();
		contentHeight();
		$("#content-2").height($(window).height() - ($(".envolve-escolas").innerHeight() + 100));
		if ($(window).width() < 980) {
			$("#content-1").mCustomScrollbar("destroy");
			$("#content-2").mCustomScrollbar("destroy");
		} else {
			loadMCustomScrollbar();
		//	$("#content-1").mCustomScrollbar({ theme: "minimal" });
			$("#content-2").mCustomScrollbar({ theme: "minimal" });
		}
	});
	// ReSharper restore PossiblyUnassignedProperty

	// ?????????????????????
	if (windowWidth >= 980) {
		$('a[href^="#"]').on("click", function (e) {
			e.preventDefault();
			var target = this.hash;
			// ReSharper disable AssignToImplicitGlobalInFunctionScope
			$target = $(target);
			// ReSharper restore AssignToImplicitGlobalInFunctionScope
			$("html, body").stop().animate({ "scrollTop": $target.scrollTop().left }, 900, "swing", function () {
				window.location.hash = target;
			});
		});
	}

	var videoStatus = [];
	var vvideo = [];
	var contador = 0;
	$("div.sld-home").each(function () {
		videoStatus[contador] = false;
		if ($(this).children("video").length) {
			vvideo[contador] = $(this).children("video").get(0);
			// ReSharper disable Html.EventNotResolved
			vvideo[contador].addEventListener("playing",
			// ReSharper restore Html.EventNotResolved
				function () {
					var op = $(this).children("video").attr("id");
					videoStatus[parseInt(op.replace("myVideo", ""))] = true;
				}
				, false);
		}
		contador++;
	});

	// slider = $('.single-item').slick({
	//	dots: true,
	//	touchMove:true,
	//	autoplay: true,
	//	infinite: true,
	//	pauseOnHover: false,
	//	autoplaySpeed: 7000

	//});

	//  $(".fancybox").fancybox({
	//width: "100%", 
	//heigth: "100%", 
	//padding: 0,
	//helpers: {
	//	media: true
	//},
	//youtube: {
	//	autoplay: 1, // enable autoplay

	//},
	//beforeLoad: function(){ slider.slick('unslick'); },   
	//beforeClose: function(){
	//  slider = $('.single-item').slick({
	//	dots: true,
	//	touchMove:true,
	//	autoplay: true,
	//	infinite: true,
	//	pauseOnHover: false,
	//	autoplaySpeed: 7000
	//  });
	//}

	$(".single-item").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		$("div.sld-home video").each(function () {
			var video = $(this);
			var videoElement = video.get(0);
			if (!videoElement.paused) {
				videoElement.pause();
			}
		});
		$("div.sld-home-" + nextSlide + " video").each(function () {
			var video2 = $(this);
			var videoElement2 = video2.get(0);
			// ReSharper disable UseOfImplicitGlobalInFunctionScope
			if (videoElement2.paused && videoStatus[nextSlide]) {
			// ReSharper restore UseOfImplicitGlobalInFunctionScope
				videoElement2.play();
			}
		});
	});

	// ReSharper disable UnusedParameter
	$(".single-item").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
	// ReSharper restore UnusedParameter
		$("div.videos-home video").each(function () {
			var video = $(this);
			var videoElement = video.get(0);
			if (!videoElement.paused) {
				videoElement.pause();
			}
		});
	});

	// Home  Script de vídeo Suport
	$(".play").click(function () {
		// ReSharper disable PossiblyUnassignedProperty
		var ff = !(window.mozInnerScreenX === null);
		// ReSharper restore PossiblyUnassignedProperty
		if (ff) {
			$(this).siblings("video").fadeIn().get(0).play();
		} else {
			$(this).siblings("video").fadeIn().trigger("play");
		}
	});

	$("#p-corporativo").click(function () {
		if (!$(".modal-corporativo").is(":visible")) {
			$(".modal-corporativo").show();
			$(".conteudo-geral").addClass("bg-preto");
		} else {
			$(".modal-corporativo").hide();
		}
	});

	$(document).mouseup("click touchstart", function (e) {
		var container = $(".modal-corporativo");
		var container2 = $("#p-corporativo");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if (!container2.is(e.target) && container2.has(e.target).length === 0) {
				$(".modal-corporativo").hide();
				$(".menu-responsivo").removeClass("some");
			}
		}
	});

	$("#p-aluno").click(function () {
		if (!$(".modal-aluno").is(":visible")) {
			$(".modal-aluno").show();
			$(".conteudo-geral").addClass("bg-preto");
		} else {
			$(".modal-aluno").hide();
		}
	});

	$(document).mouseup("click touchstart", function (e) {
		var container = $(".modal-aluno");
		var container2 = $("#p-aluno");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if (!container2.is(e.target) && container2.has(e.target).length === 0) {
				$(".modal-aluno").hide();
				$(".menu-responsivo").removeClass("some");
			}
		}
	});

	$(":input[placeholder]").placeholder();

	$(".showSingle").mouseover(function () {
		$(".int-menu2").addClass("fixa");
		var item = $(this);
		var vis = $(".item-idioma:visible");
		var targetItem = item.attr("target");
		var target = $("#div" + targetItem);
		var fn = function () {
			target.slideDown();
		};
		if (vis.length) {
			if (vis[0].id === "div" + targetItem) {
				fn = function () { };
			}
			vis.slideUp(fn);
		} else {
			target.slideDown();
		}
	});

	$(".mob-w").mouseenter(function () {
		$(".int-menu").removeClass("fixa");
	});

	$(".icon").mouseenter(function () {
		$(".int-menu").removeClass("fixa");
	});

	$(".link-none").click(function () {
		if ($(window).width() < 980) {
			event.preventDefault();
		}
	});

	$("ul.menu-mobile-ul").each(function () {
		$(this).prev("a").click(function () {
			if ($(document).width() < 980) {
				$("ul.menu-mobile-ul").slideUp();
				$(this).next("ul.menu-mobile-ul").slideToggle();
			}
		});
	});

	$("#menu_mobile").click(function () {
		$("#principal").slideToggle();
	});

	if ($(window).width() < 767) {
		$("#form").click(function () {
			$(".portais").hide();
		});
		$(document).mouseup("click touchstart", function (e) {
			var container = $("#form");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$(".portais").show();
			}
		});
	}

	if ($(window).width() < 767) {
		$("#form").click(function () {
			$(".envolve-h2-idioma-padrao").hide();
			$(".portais").hide();
			$(".busca-interna .conteudo-div").addClass("h-100");
			$(".pg-idioma-ingles").addClass("h-100pc");
		});

		$(document).mouseup("click touchstart", function (e) {
			var container = $("#form");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$(".busca-interna .conteudo-div").removeClass("h-100");
				$(".pg-idioma-ingles").removeClass("h-100pc");
				$(".envolve-h2-idioma-padrao").show();
				$(".portais").show();
			}
		});
	}

	//Masks
	// Mask Cep
	$("#inpt_cep").mask("99999-999");
	// Mask Telefone
	$("#inpt_tel").mask("(999) - 9999-9999?9");
	$("#inpt_number").mask("999999");

	$("#inpt_dt-intitial").datepicker({
		dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
		monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	});

	$("#inpt_dt-final").datepicker({
		dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
		monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	});

	// ReSharper disable PossiblyUnassignedProperty
	$("select").comboSelect();
	// ReSharper restore PossiblyUnassignedProperty

	// ReSharper disable UnusedParameter
	$(".js-select").change(function (e, v) {
	// ReSharper restore UnusedParameter
		$(".idx").text(e.target.selectedIndex);
		$(".val").text(e.target.value);
	});

	$(".js-select-open").click(function (e) {
		$(".js-select").focus();
		e.preventDefault();
	});

	$(".js-select-close").click(function (e) {
		$(".js-select").trigger("comboselect:close");
		e.preventDefault();
	});

	var $select = $(".js-select-3");

	$(".js-select-add").click(function () {
		$select.prepend($("<option>", {
			text: "A new option: " + Math.floor(Math.random() * 10) + 1
		})).trigger("comboselect:update");
		return false;
	});

	var callbacksList = $(".demo-callbacks ul");
	$(".demo-list input").on("ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed", function (event) {
		callbacksList.prepend("<li><span>#" + this.id + "</span> is " + event.type.replace("if", "").toLowerCase() + "</li>");
	// ReSharper disable PossiblyUnassignedProperty
	}).iCheck({
	// ReSharper restore PossiblyUnassignedProperty
		checkboxClass: "icheckbox_square-blue",
		radioClass: "iradio_square-blue",
		increaseArea: "20%"
	});

	if ($(window).width() < 767) {
		$("#form-contanto").click(function () {
			$(".envolve-h2-idioma-padrao").hide();
			$(".portais").hide();
			$(".busca-interna .conteudo-div").addClass("h-100");
			$(".pg-idioma-ingles").addClass("h-100pc");
		});

		$(document).mouseup("click touchstart", function (e) {
			var container = $("#form");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$(".busca-interna .conteudo-div").removeClass("h-100");
				$(".pg-idioma-ingles").removeClass("h-100pc");
				$(".envolve-h2-idioma-padrao").show();
				$(".portais").show();
			}
		});
	}

	$(".responsive-cna").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: ".slider-for-cna",
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		responsive: [{
			breakpoint: 980,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
				infinite: false
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});

	$(".slider-for-cna").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		fade: true,
		asNavFor: ".responsive-cna"
	});

	$(".area-mapa").mouseenter(function () {
		var uf = $(this).attr("data");
		$("img#mapa").attr("src", "/css/images/mapa_" + uf + ".png");
	});

	$(".area-mapa").mouseleave(function () {
		$("img#mapa").attr("src", "/css/images/mapa.png");
	});

	$(".area-mapa").on("click", function (e) {
		e.preventDefault();
		if ($(this).attr("data") === "sp") {
			$("#link_modal_1").trigger("click");
		} else {
			window.open($(this).attr("data-url"), "_self");
		}
	});

	// ReSharper disable UnusedParameter
	$(".select-trabalhe-conosco select").on("change", function (e) {
	// ReSharper restore UnusedParameter
		// ReSharper disable AssignToImplicitGlobalInFunctionScope
		optionSelected = $("option:selected", this);
		// ReSharper restore AssignToImplicitGlobalInFunctionScope
		var valueSelected = this.value;
		if (valueSelected === "sp") {
			$("#link_modal_1").trigger("click");
		}
	});

	$("#share").mouseenter(function () {
		$(".share-div").show();
	});

	$(".compartilhamento").mouseleave(function () {
		$(".share-div").hide();
	});

	$(".relacao-escolas-lu1>li>a").click(function () {
		$(".relacao-escolas-lu1>li>a").removeClass("ativo");
		$(this).addClass("ativo");
	});

	$("#scroll-print").click(function () {
		// ReSharper disable PossiblyUnassignedProperty
		$("#content-1").mCustomScrollbar("scrollTo", "div.max-600px");
		// ReSharper restore PossiblyUnassignedProperty
		setTimeout(function () { window.print(); }, 1000);
	});

	$(".modal").fancybox({
		titleShow: false,
		autoSize: false,
		padding: 0,
		width: 290
	});

	if ($("#home").size() > 0) {
		$("#link-matricula-online").css("bottom", "50px");
	}

	// videos 3 home
	$(".lista-campanhas li").height($(window).height() - 111);

	$(".lista-campanhas li [data-video]").click(function () {
		var indexVideo = $(this).data("video");
		var itemVideo = $("#video-campanha video:nth-child(" + indexVideo + ")");
		// ReSharper disable PossiblyUnassignedProperty
		var ff = !(window.mozInnerScreenX === null);
		// ReSharper restore PossiblyUnassignedProperty
		$("#video-campanha").show();
		if (ff) {
			itemVideo.fadeIn().addClass("atual" + indexVideo).get(0).play();
		} else {
			itemVideo.fadeIn().addClass("atual" + indexVideo).trigger("play");
		}
	});

	$(".btn-fecha-videos").click(function () {
		$("video").trigger("pause").fadeOut();
		$("#video-campanha").fadeOut();
	});

	$(".video-home").bind("contextmenu", function () { return false; });

	// video pg campanha

	// script para iphone
	var ua = window.navigator.userAgent;
	if (ua.indexOf("iPhone") > 0) {
		$("body").addClass("iphone");
	}
});