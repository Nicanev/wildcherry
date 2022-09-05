globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");