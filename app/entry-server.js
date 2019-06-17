import { createApp } from './app';

export default context =>
  new Promise((resolve, reject) => {  // eslint-disable-line
    const { app, router, store } = createApp();
    const meta = app.$meta();

    // set server-side router's location
    router.push(context.url);
    context.meta = meta;

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      context.rendered = () => {
        // After the app is rendered, our store is now
        // filled with the state from our components.
        // When we attach the state to the context, and the `template` option
        // is used for the renderer, the state will automatically be
        // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
        context.state = store.state;
      };

      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject(new Error(404));
      }

      // the Promise should resolve to the app instance so it can be rendered
      return resolve(app);
    }, reject);
  });
