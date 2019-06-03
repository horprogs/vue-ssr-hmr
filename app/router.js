import Vue from 'vue'
import Router from 'vue-router'

import Main from './client/components/Main.vue';

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: Main },
            // { path: '/about/', component: () => import('./client/components/About.vue') }
        ]
    })
}
