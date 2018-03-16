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
        $('aside').toggleClass('hide');
        $('main').toggleClass('hide');
    });

    $('.productWorkToggle').on('click', function () {
        $('aside').toggleClass('hide');
        $('main').toggleClass('hide');
    });
}


portfolio.init = () => {
    portfolio.scroll();
    portfolio.togglePortfolio();
}


$(function(){
    portfolio.init();
})



// netflixChow.flickityMovie = function () {
//     $('.movie-results').flickity({
//         cellAlign: 'left',
//         contain: true,
//         pageDots: false,
//         wrapAround: true
//     });

// }