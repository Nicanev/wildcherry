import { createApp } from 'vue';
import App from "./App.vue";

import {bannerSwiper} from './module/bannerSwiper.js';

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp(App);
app.mount("#app");

document.addEventListener('DOMContentLoaded', function(){
    bannerSwiper();
});