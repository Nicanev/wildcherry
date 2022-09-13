import Swiper, { Navigation } from 'swiper';
export function bannerSwiper () {
    const SwiperBanner = new Swiper('.banner__swiper', {
        loop: true,
        modules: [Navigation],
        slidesPerView: 1,
        slidesPerGroup: 1,
        wrapperClass: 'banner__swiper-wrapper',
        slideClass: 'banner__swiper-slide',
        spaceBetween: 40,
        navigation: {
            nextEl: '.banner__swiper-btn-next',
            prevEl: '.banner__swiper-btn-back'
        },
    });
}
