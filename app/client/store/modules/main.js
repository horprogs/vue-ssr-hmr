import axios from 'axios';

import {
  MAIN__ITEM_DELELE,
  MAIN__ITEM_ADD,
  MAIN__ITEM_ADD_ASYNC,
  MAIN__GET_DATA,
  MAIN__SET_DATA,
} from '../const/main';

export default {
  namespaced: true,
  state: {
    items: [
      {
        id: 1,
        title: 'Milk',
      },
      {
        id: 2,
        title: 'Strawberry',
      },
      {
        id: 3,
        title: 'Egg',
      },
    ],
    dataFromApi: [],
  },
  mutations: {
    [MAIN__ITEM_DELELE](state, { id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
    [MAIN__ITEM_ADD](state, { item }) {
      const items = [...state.items];
      items.push(item);

      state.items = items;
    },

    [MAIN__SET_DATA](state, { data }) {
      state.dataFromApi = data;
    },
  },
  actions: {
    [MAIN__ITEM_ADD_ASYNC]({ commit }, { item }) {
      setTimeout(() => {
        commit(MAIN__ITEM_ADD, { item });
      }, 1000);
    },
    async [MAIN__GET_DATA]({ commit }) {
      try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');

        commit(MAIN__SET_DATA, { data: resp.data });
      } catch (e) {
        console.error('Error fetching data');
      }
    },
  },
};
