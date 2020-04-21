import log from 'loglevel';
import { createApp, defineComponent, h } from 'vue';
import { initStore } from './composites/base/store';
import { initTheme } from './composites/base/theme';
import { initI18n } from './composites/base/i18n';
import { initRouter } from './composites/base/router';
import { routes } from './utils/routes';
import App from './App.vue';

log.setDefaultLevel('INFO');

const app = createApp(defineComponent({
  setup() {
    const { appLocale, appThemeColor } = initStore();
    initTheme(appThemeColor);
    initI18n(appLocale);
    initRouter(routes);

    return () => h(App);
  },
}));

app.config.globalProperties.productionTip = false;
app.mount('#app');
