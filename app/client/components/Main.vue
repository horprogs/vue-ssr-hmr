<template>
  <div>Main page</div>
</template>

<script>
import store from '../store/main';

export default {
  metaInfo: {
    title: 'Main page',
  },
  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    },
  },

  serverPrefetch() {
    this.registerStore();

    return this.fetchItem();
  },

  mounted() {
    this.registerStore();

    if (!this.item) {
      this.fetchItem();
    }
  },

  methods: {
    registerStore() {
      // Preserve the previous state if it was injected from the server
      this.$store.registerModule('main', store, { preserveState: true });
    },
    fetchItem() {
      // return the Promise from the action
      return this.$store.dispatch('fetchItem', this.$route.params.id);
    },
  },
};
</script>
