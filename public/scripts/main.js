"use strict";

var portfolio = {};

portfolio.init = function () {
    portfolio.scroll();
    portfolio.togglePortfolio();
    portfolio.homeAnimation();
    portfolio.scrollMagic();
};

portfolio.scroll = function () {
    $(function () {
        $('a').smoothScroll({
            offset: 0,
            speed: 600
        });
    });

    $(".backToTop").on("click", function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });
};

portfolio.togglePortfolio = function () {
    $('.devWorkToggle').on('click', function () {
        $('aside').addClass('hide');
        $('main').removeClass('hide');
        $('.devWorkToggle').css("color", "#A3EACD");
        $('.productWorkToggle').css("color", "#26496C");
    });

    $('.productWorkToggle').on('click', function () {
        $('aside').removeClass('hide');
        $('main').addClass('hide');
        $('.productWorkToggle').css("color", "#A3EACD");
        $('.devWorkToggle').css("color", "#26496C");
    });
};

portfolio.homeAnimation = function () {
    TweenMax.staggerFrom([".tealCircle", ".darkBlueTriangle", ".greyWave"], 7, { rotation: 360, transformOrigin: "bottom right", repeat: -1, ease: Power0.easeNone }, 0.1);
    TweenMax.staggerFrom([".yellowCircle", ".pinkSquiggle", ".greenSquare"], 5.5, { rotation: 360, transformOrigin: "bottom right", repeat: -1, ease: Power0.easeNone }, 0.3);
};

portfolio.scrollMagic = function () {

    var controller = new ScrollMagic.Controller();
    // 
    // var tween = TweenMax.to(".rotate-in", 1, { rotation: 360, ease: Linear.easeNone });

    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#about",
        duration: 500,
        offset: 150,
        tweenChanges: true
    }).setClassToggle(".blueSquare", "rotate-in").addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#vaporwave",
        duration: 500,
        offset: 20,
        tweenChanges: true
    }).setClassToggle(".pinkWave", "move-aside").addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#soundtrak",
        duration: 500,
        offset: 150,
        tweenChanges: true
    }).setClassToggle(".tealTriangle", "rotate-in").addTo(controller);
};

$(function () {
    portfolio.init();
});