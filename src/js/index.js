import { createApp } from 'vue';
import App from "./App.vue";
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp(App);
app.mount("#app");