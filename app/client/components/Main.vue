<template>
    <div>Home page</div>
</template>

<script>
    import store from '../store/main';
    // import titleMixin from '../lib/title-mixin';
    
    export default {
        // mixins: [titleMixin],
        // title() {
        //     return this.item.title
        // },
        computed: {
            // display the item from store state.
            item() {
                return this.$store.state.items[this.$route.params.id]
            }
        },

        // Server-side only
        // This will be called by the server renderer automatically
        serverPrefetch() {
            this.registerStore();
            
            return this.fetchItem()
        },

        // Client-side only
        mounted() {
            this.registerStore();
            
            if (!this.item) {
                this.fetchItem()
            }
        },

        methods: {
            registerStore() {
                // Preserve the previous state if it was injected from the server
                this.$store.registerModule('main', store, { preserveState: true })
            },
            fetchItem() {
                // return the Promise from the action
                return this.$store.dispatch('fetchItem', this.$route.params.id)
            }
        }
    }
</script>

