import './bootstrap';
import {createApp} from "vue";
import App from "@/App.vue";
import {createPinia} from "pinia";
import router from '@/router';
import { i18nVue } from 'laravel-vue-i18n';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router)

app.use(i18nVue, {
  resolve: async (lang) => {
    const langs = import.meta.glob("../../lang/*.json");

    return await langs[`../../lang/${lang}.json`]();
  }
})

app.mount("#app");
