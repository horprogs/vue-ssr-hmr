import {
  createMemoryHistory,
  createRouter as createVueRouter,
} from 'vue-router';

import routes from './routes';

export function createRouter() {
  return createVueRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: routes.pages.main,
        component: () => import('./client/components/Main.vue'),
      },
      {
        path: routes.pages.about,
        component: () => import('./client/components/About.vue'),
      },
    ],
  });
}
