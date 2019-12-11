import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import { createRouter } from './router';
import { createStore } from './client/store';

import App from './App.vue';

Vue.use(Vuetify);

export function createApp() {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}
