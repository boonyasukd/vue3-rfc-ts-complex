import log from 'loglevel';
import { createApp, defineComponent, h, toRef } from 'vue';
import { initTheme } from '@/compositions/base/theme';
import { initI18n } from '@/compositions/base/i18n';
import store from '@/store';
import router from '@/router';
import App from '@/App.vue';

log.setDefaultLevel('INFO');

const app = createApp(defineComponent({
  setup() {
    initTheme(toRef(store.getters, 'appThemeColor'));
    initI18n(toRef(store.getters, 'appLocale'));

    return () => h(App);
  },
}));

app.config.globalProperties.productionTip = false;
app.use(router).use(store.original).mount('#app');
