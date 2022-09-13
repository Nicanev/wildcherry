import Swiper, { Navigation } from 'swiper';

export function bannerSwiper () {
    const bannerSwiper = new Swiper('.banner__swiper', {
        slidesPerView: 1,
        modules: [Navigation],
        loop: false,

        navigation: {
            nextEl: '.banner__swiper-btn-next',
        },
    });
}