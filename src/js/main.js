import "./import-jquery.js"
$(document).ready(function () {
    $('.openBtn').click(function () {
        if ( $( ".catalog").first().is( ":hidden" ) ) {
            $( ".catalog" ).slideDown( "slow" );
            $("#catalog-img").removeClass('active');
            $("#close-img").addClass('active');
        } else {
            $("#close-img").removeClass('active');
            $("#catalog-img").addClass('active');
            $(".catalog").slideUp();
        }
    })
    $('#category1').mouseover(function() {
        $('.catalog__list_active').toggleClass('catalog__list_active');
        $('#section1').toggleClass('catalog__list_active');
    })
    $('#category2').mouseover(function() {
        $('.catalog__list_active').toggleClass('catalog__list_active');
        $('#section2').toggleClass('catalog__list_active');
    })
    $('#category3').mouseover(function() {
        $('.catalog__list_active').toggleClass('catalog__list_active');
        $('#section3').toggleClass('catalog__list_active');
    })
    $('#category4').mouseover(function() {
        $('.catalog__list_active').toggleClass('catalog__list_active');
        $('#section4').toggleClass('catalog__list_active');
    })
});
