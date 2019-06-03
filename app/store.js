import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        // IMPORTANT: state must be a function so the module can be
        // instantiated multiple times
        state: () => ({
            items: {}
        }),

        actions: {
            fetchItem({ commit }, id) {
                // return the Promise via `store.dispatch()` so that we know
                // when the data has been fetched
                return new Promise(id).then(item => {
                    commit('setItem', { id, item })
                })
            }
        },

        mutations: {
            setItem(state, { id, item }) {
                Vue.set(state.items, id, item)
            }
        }
    })
}
