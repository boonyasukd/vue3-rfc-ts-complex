import log from 'loglevel';
import { ref, onMounted, onUnmounted, Ref } from '@vue/composition-api';
import { find } from 'lodash';
import { Route } from '../../models';

let routes: Route[];
let currentRoute: Ref<Route>;

function findRoute() {
  const path = window.location.hash.slice(1);
  return find(routes, ['path', path]) || new Route();
}

function initRouter(appRoutes: Route[]) {
  log.info('setting up router...');
  routes = appRoutes;
  window.location.hash = '#/';
  currentRoute = ref(findRoute());

  const update = () => {
    currentRoute.value = findRoute();
    log.info(`navigating to route '${currentRoute.value.name}'...`);
  };

  onMounted(() => {
    window.addEventListener('hashchange', update);
  });
  onUnmounted(() => {
    window.removeEventListener('hashchange', update);
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
