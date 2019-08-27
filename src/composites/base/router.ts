import log from 'loglevel';
import { ref, Ref, onMounted, onUnmounted } from '@vue/composition-api';
import { find } from 'lodash';
import { Route } from '../../models';

let routes: Route[];
let currentRoute: Ref<Route>;

function updateCurrentRoute() {
  const path = window.location.hash.slice(1);
  currentRoute.value = find(routes, ['path', path]) || new Route();
  log.info(`navigating to route '${currentRoute.value.name}'...`);
}

function initRouter(appRoutes: Route[]) {
  log.info('setting up router...');
  routes = appRoutes;
  window.location.hash = '#/';
  currentRoute = ref(new Route());
  updateCurrentRoute();

  onMounted(() => {
    window.addEventListener('hashchange', updateCurrentRoute);
  });
  onUnmounted(() => {
    window.removeEventListener('hashchange', updateCurrentRoute);
  });
}

function useRouter() {
  return {
    currentRoute,
    push({ name }: { name: string }) {
      const route = find(routes, ['name', name]) || new Route();
      window.location.hash = route.path;
    },
  };
}

export { initRouter, useRouter };
