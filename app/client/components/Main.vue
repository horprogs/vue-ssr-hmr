<template>
  <div>
    <h1>Shopping list</h1>
    <div v-for="item in items" v-bind:key="item.id" :class="$style.item">
      <span>{{ item.title }}</span>
      <span>
        <button @click="onRemoveItem" :data-id="item.id">Remove</button>
      </span>
    </div>

    <div :class="$style.controls">
      <input @value="title" @input="onChangeTitle" />
      <button @click="addItem">Add item</button>
      <button @click="addAsyncItem">Add item after one second</button>
    </div>

    <div :class="$style.posts" v-if="dataFromApi.length">
      <h2>Data from mock API:</h2>
      <div v-for="item in dataFromApi" :key="item.id" :class="$style.post">
        <div :class="$style.postTitle">{{ item.title }}</div>
        <div :class="$style.postBody">{{ item.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import {
  MAIN__GET_DATA,
  MAIN__ITEM_ADD,
  MAIN__ITEM_ADD_ASYNC,
  MAIN__ITEM_DELELE,
} from '../store/const/main';

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('main');

export default {
  metaInfo: {
    title: 'Main page',
  },
  data() {
    return {
      title: 'Default title',
    };
  },
  computed: {
    ...mapState({
      items: state => state.items,
      dataFromApi: state => state.dataFromApi,
    }),
  },
  mounted() {
    console.log('Mounted');

    if (!this.dataFromApi.length) {
      this[MAIN__GET_DATA]();
    }
  },

  serverPrefetch() {
    console.log('Run only on server');

    return Promise.all([this[MAIN__GET_DATA]()]);
  },

  methods: {
    ...mapActions([MAIN__GET_DATA, MAIN__ITEM_ADD_ASYNC]),
    ...mapMutations([MAIN__ITEM_ADD, MAIN__ITEM_DELELE]),

    addAsyncItem() {
      const item = {
        id: Math.floor(Math.random() * 100),
        title: this.$data.title,
      };

      this[MAIN__ITEM_ADD_ASYNC]({ item });
    },
    addItem() {
      const item = {
        id: Math.floor(Math.random() * 100),
        title: this.$data.title,
      };

      this[MAIN__ITEM_ADD]({ item });
    },
    onChangeTitle(e) {
      this.$data.title = e.target.value;
    },
    onRemoveItem(e) {
      const id = +e.target.getAttribute('data-id');

      this[MAIN__ITEM_DELELE]({ id });
    },
  },
};
</script>

<style module>
.item {
  padding: 3px 0;
}

.controls {
  margin-top: 12px;
}

.posts {
  margin: 26px 0;
  max-width: 500px;
}

.post {
  margin: 16px 0;
}

.postTitle {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}
.postBody {
  font-size: 14px;
  line-height: 1.5;
}
</style>
