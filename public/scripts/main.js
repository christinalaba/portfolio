'use strict';

var portfolio = {};

portfolio.scroll = function () {
    $(function () {
        $('a').smoothScroll({
            offset: 0,
            speed: 600
        });
    });
};

portfolio.init = function () {
    portfolio.scroll();
};

$(function () {
    portfolio.init();
});

// netflixChow.flickityMovie = function () {
//     $('.movie-results').flickity({
//         cellAlign: 'left',
//         contain: true,
//         pageDots: false,
//         wrapAround: true
//     });

// }