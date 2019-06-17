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
  },
  actions: {
    [MAIN__ITEM_ADD_ASYNC]({ commit }, { item }) {
      setTimeout(() => {
        commit(MAIN__ITEM_ADD, { item });
      }, 1000);
    },
  },
};
