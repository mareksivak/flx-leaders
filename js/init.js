new WOW().init();

$('.o-lazy img').hide();

//$(document).ready(function() {
$(window).ready(function() {
    $('.o-lazy img').show().addClass('animated800 fadeIn');
    $('.o-lazy img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.o-lazy img').removeClass('animated800 fadeIn');
    });
});