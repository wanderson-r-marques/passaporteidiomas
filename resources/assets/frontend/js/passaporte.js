$(document).ready(function () {

    var autoplaySpeed = 7000;

    // Máscaras 
    $('.phone').mask('(99)99999-9999');

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
        beforeLoad: function () {
            slider.slick('unslick');
        },
        beforeClose: function () {
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
    if (isiPhone) {
        //só faz pra iphone
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
            $(this).css('min-height', sizeView / 3).addClass('hey');
            //console.log('fiz', sizeView / 3);
        });
    }
    $(".slick-prev.slick-arrow").attr("style", "display: block; z-index: 9999;");


});
