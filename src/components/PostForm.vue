<template>
  <form @submit.prevent="submit">
    <input v-model="post.title" placeholder="Title" type="text">
    <input v-model="post.body" placeholder="Body" type="text">
    <button type="submit">send</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        ...mapMutations({
            createPost: 'posts/createPost'
        }),
        submit() {
            this.createPost(this.post)
        }
    }
}
</script>