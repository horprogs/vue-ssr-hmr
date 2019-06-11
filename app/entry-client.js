import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router, store } = createApp()

// this assumes App.vue template root element has `id="app"`
router.onReady(() => {
    if (window.__INITIAL_STATE__) {
        // We initialize the store state with the data injected from the server
        store.replaceState(window.__INITIAL_STATE__)
    }

    app.$mount('#app', true)
})

if (module.hot) {
    const api = require('vue-hot-reload-api');
    const Vue = require('vue');

    api.install(Vue)
    if (!api.compatible) {
        throw new Error('vue-hot-reload-api is not compatible with the version of Vue you are using.')
    }

    // indicate this module can be hot-reloaded
    module.hot.accept()

    // if (!module.hot.data) {
    //     // for each component option object to be hot-reloaded,
    //     // you need to create a record for it with a unique id.
    //     // do this once on startup.
    //     api.createRecord('very-unique-id', myComponentOptions)
    // }
    // else {
    //     // if a component has only its template or render function changed,
    //     // you can force a re-render for all its active instances without
    //     // destroying/re-creating them. This keeps all current app state intact.
    //     api.rerender('very-unique-id', myComponentOptions)
    //
    //     // --- OR ---
    //
    //     // if a component has non-template/render options changed,
    //     // it needs to be fully reloaded. This will destroy and re-create all its
    //     // active instances (and their children).
    //     api.reload('very-unique-id', myComponentOptions)
    // }
}
