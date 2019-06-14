import {
  MAIN__ITEM_DELELE,
  MAIN__ITEM_ADD,
  MAIN__ITEM_ADD_ASYNC,
} from '../const/main';

export default {
  state: {
    items: [
      {
        id: 1,
        title: 'Item 1',
      },
      {
        id: 2,
        title: 'Item 2',
      },
    ],
  },
  mutations: {
    [MAIN__ITEM_DELELE](state, { id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
    [MAIN__ITEM_ADD](state, { item }) {
      state.items = [...state.items].push(item);
    },
  },
  actions: {
    [MAIN__ITEM_ADD_ASYNC]({ commit }, { item }) {
      setTimeout(() => {
        commit(MAIN__ITEM_ADD, { item });
      }, 1000);
    },
  },
};
