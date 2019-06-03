import { createApp } from './app'

export default context => {
    // since there could potentially be asynchronous route hooks or components,
    // we will be returning a Promise so that the server can wait until
    // everything is ready before rendering.
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        // set server-side router's location
        router.push(context.url)

        // wait until router has resolved possible async components and hooks
        router.onReady(() => {
            context.rendered = () => {
                // After the app is rendered, our store is now
                // filled with the state from our components.
                // When we attach the state to the context, and the `template` option
                // is used for the renderer, the state will automatically be
                // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
                context.state = store.state
            }

            const matchedComponents = router.getMatchedComponents()
            // no matched routes, reject with 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }

            // the Promise should resolve to the app instance so it can be rendered
            resolve(app)
        }, reject)
    })
}
