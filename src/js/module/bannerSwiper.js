import Swiper, { Navigation } from 'swiper';

export function bannerSwiper () {
    const bannerSwiper = new Swiper('.banner__swiper', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
        wrapperClass: 'banner__swiper-wrapper',
        slideClass: 'banner__swiper-slide',
        navigation: {
            nextEl: '.banner__swiper-btn-next',
        },
    });
}
