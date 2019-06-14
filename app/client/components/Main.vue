<template>
  <div>
    <div v-for="item in items" v-bind:key="item.id">
      {{ item.title }}
    </div>
    <input @value="title" @input="onChangeTitle" />
    {{ title }}
    <button @click="onAddItem">Add item</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { MAIN__ITEM_ADD, MAIN__ITEM_ADD_ASYNC } from '../store/const/main';

export default {
  metaInfo: {
    title: 'Main page',
  },
  state: {
    title: '',
  },
  computed: {
    item(id) {
      return this.$store.state.main.items.find(item => item.id === id);
    },
    ...mapState({
      title: state => state.title,
    }),
    items() {
      return this.$store.state.main.items;
    },
  },

  mounted() {
    console.log('!!!!');
  },

  serverPrefetch() {
    this.addItem({ id: 55, title: 'Item 55' });
  },

  methods: {
    addAsyncItem(item) {
      this.$store.dispatch(MAIN__ITEM_ADD_ASYNC, item);
    },
    addItem(item) {
      return this.$store.commit(MAIN__ITEM_ADD, item);
    },
    onChangeTitle(e) {
      this.$store.commit('changeTitle', { title: e.target.title });
    },
    onAddItem() {
      this.addItem({
        id: Math.floor(Math.random() * 100),
        title: this.$store.state.title,
      });
    },
  },

  mutations: {
    changeTitle(state, title) {
      state.title = title;
    },
  },
};
</script>
