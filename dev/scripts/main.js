const portfolio = {};

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
}


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
}


portfolio.init = () => {
    portfolio.scroll();
    portfolio.togglePortfolio();
    portfolio.homeAnimation();
    console.log('init')
}

portfolio.homeAnimation = function (){
    console.log("we be tweening");
    TweenMax.to(".shape", 1, { rotation: 360, repeat:-1, yoyo:true });
}


$(function(){
    portfolio.init();
})
