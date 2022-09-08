import "./import-jquery.js"
// import "jquery-ui-dist/jquery-ui.js"

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
    $(".sidefilter__title").click(function () {
        $(this).toggleClass('arrow-reverse');
        if ($(this).text() == "Категория") {
            $("#category-filter").slideToggle("slow");
        }
        if ($(this).text() == "Срок доставки") {
            $("#delivery-filter").slideToggle("slow");
        }
        if ($(this).text() == "Бренд") {
            $("#brand-filter").slideToggle("slow");
        }
        if ($(this).text() == "Продавец") {
            $("#seller-filter").slideToggle("slow");
        }
        if ($(this).text() == "Цена, ₽") {
            $("#cost-filter").slideToggle("slow");
        }
        if ($(this).text() == "Цвет") {
            $("#color-filter").slideToggle("slow");
        }
    })
});
