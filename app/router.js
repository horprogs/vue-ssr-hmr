import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import Main from './client/components/Main.vue';
import About from './client/components/About.vue';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Main },
      { path: '/about/', component: About },
    ],
  });
}
