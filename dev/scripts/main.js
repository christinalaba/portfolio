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

portfolio.init = () => {
    portfolio.scroll();
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