import { createApp as createVueApp } from 'vue';
import { sync } from 'vuex-router-sync';
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';

import { createRouter } from './router';
import { createStore } from './client/store';

import App from './App.vue';

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const metaManager = createMetaManager();

  const app = createVueApp(App);

  app.use(store);
  app.use(router);
  app.use(metaManager);
  app.use(metaPlugin);

  // sync(store, router);

  return { app, router, store };
}
