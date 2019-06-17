import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

import Main from './client/components/Main.vue';
import About from './client/components/About.vue';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: routes.pages.main, component: Main },
      { path: routes.pages.about, component: About },
    ],
  });
}
