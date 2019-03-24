"use strict";

var portfolio = {};

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

portfolio.init = function () {
    portfolio.scroll();
    portfolio.togglePortfolio();
    portfolio.homeAnimation();
};

portfolio.homeAnimation = function () {
    TweenMax.staggerFrom([".tealCircle", ".darkBlueTriangle", ".greyWave"], 7, { rotation: 360, transformOrigin: "bottom right", repeat: -1, ease: Power0.easeNone }, 0.1);
    TweenMax.staggerFrom([".yellowCircle", ".pinkSquiggle", ".greenSquare"], 5.5, { rotation: 360, transformOrigin: "bottom right", repeat: -1, ease: Power0.easeNone }, 0.3);
};

$(function () {
    portfolio.init();
});