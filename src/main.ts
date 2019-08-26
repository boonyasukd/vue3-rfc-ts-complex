import log from 'loglevel';
import Vue from 'vue';
import VueCompositionApi, { createComponent } from '@vue/composition-api';
import { initStore } from './composites/base/store';
import { initTheme } from './composites/base/theme';
import { initI18n } from './composites/base/i18n';
import { initRouter } from './composites/base/router';
import { routes } from './utils/routes';
import App from './App.vue';

log.setDefaultLevel('INFO');
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue(createComponent({
  setup() {
    const { appLocale, appThemeColor } = initStore();
    initTheme(appThemeColor);
    initI18n(appLocale);
    initRouter(routes);
  },
  render: h => h(App),
})).$mount('#app');
