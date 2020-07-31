/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/frontend/js/EnumJS.js":
/*!************************************************!*\
  !*** ./resources/assets/frontend/js/EnumJS.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PageEnum = {
  Home: 7,
  Busca: 8,
  Escola: 9,
  BuscaEscola: 11,
  CNAOla: 12,
  ConveniosParceirias: 13,
  AssessoriaImprensa: 17,
  AssessoriaImprensaDetalhe: 18,
  FaleConosco: 19,
  FaleConoscoCentral: 20,
  FaleConoscoAssessoria: 21,
  TrabalheConosco: 22,
  CursoEspanhol: 23,
  CursoEspanholAdolescentes: 24,
  CursoEspanholAdultos: 25,
  CursoIngles: 26,
  CursoInglesCriancas: 27,
  CursoInglesAdolescentes: 28,
  CursoInglesAdultos: 29,
  CursoInglesCNAFast: 30,
  CursoInglesCNAGo: 49,
  Franqueado: 31,
  SejaFluente: 32,
  CNA360: 33,
  HappyLessons: 34,
  Intercambio: 35,
  Sobre: 36,
  SpeakingExchange: 37,
  Noticias: 38,
  NoticiasDetalhe: 39,
  ResponsabilidadeSocial: 40,
  Campanha: 41,
  ConveniosParceiriasFormulario: 42
};

/***/ }),

/***/ "./resources/assets/frontend/js/passaporte.js":
/*!****************************************************!*\
  !*** ./resources/assets/frontend/js/passaporte.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var autoplaySpeed = 7000; // Máscaras 

  $('.phone').mask('(99) 99999-9999'); // ReSharper disable AssignToImplicitGlobalInFunctionScope

  slider = $('.single-item').slick({
    // ReSharper restore AssignToImplicitGlobalInFunctionScope
    dots: true,
    touchMove: true,
    autoplay: true,
    infinite: true,
    pauseOnHover: false,
    autoplaySpeed: autoplaySpeed
  });
  $(".fancybox").fancybox({
    width: "100%",
    heigth: "100%",
    padding: 0,
    helpers: {
      media: true
    },
    youtube: {
      autoplay: 1 // enable autoplay

    },
    beforeLoad: function beforeLoad() {
      slider.slick('unslick');
    },
    beforeClose: function beforeClose() {
      // ReSharper disable AssignToImplicitGlobalInFunctionScope
      slider = $('.single-item').slick({
        // ReSharper restore AssignToImplicitGlobalInFunctionScope
        dots: true,
        touchMove: true,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: autoplaySpeed
      });
    }
  });
  var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());

  if (isiPhone) {//só faz pra iphone
  }

  if (navigator.userAgent.match('CriOS')) {
    if ($('body').hasClass('iphone')) {
      $('.lista-campanhas li').css({
        height: 'calc(33.3vh - 30px)'
      });
    }
  } else {
    var sizeView = $('.single-item').height();
    var bannerList = $('#home .single-item:first .lista-campanhas > li');
    bannerList.each(function () {
      $(this).css('min-height', sizeView / 3).addClass('hey'); //console.log('fiz', sizeView / 3);
    });
  }

  $(".slick-prev.slick-arrow").attr("style", "display: block; z-index: 9999;");
});

/***/ }),

/***/ 1:
/*!***************************************************************************************************!*\
  !*** multi ./resources/assets/frontend/js/passaporte.js ./resources/assets/frontend/js/EnumJS.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/passaporteidiomas/resources/assets/frontend/js/passaporte.js */"./resources/assets/frontend/js/passaporte.js");
module.exports = __webpack_require__(/*! /var/www/html/passaporteidiomas/resources/assets/frontend/js/EnumJS.js */"./resources/assets/frontend/js/EnumJS.js");


/***/ })

/******/ });