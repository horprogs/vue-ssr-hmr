import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router } = createApp()

// this assumes App.vue template root element has `id="app"`
router.onReady(() => {
    if (window.__INITIAL_STATE__) {
        // We initialize the store state with the data injected from the server
        store.replaceState(window.__INITIAL_STATE__)
    }
    
    app.$mount('#app')
})
