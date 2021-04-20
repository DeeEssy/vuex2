<template>
  <div id="app">
    <PostForm />
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <h3>
          {{ post.title }}
        </h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {
    PostForm,
  },
  computed: {
    ...mapGetters({
      posts: "posts/getPosts",
      postsLength: "posts/getPostsLength",
    }),
  },
  async created() {
    this.fetchPosts(10);
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
    }),
  },
};
</script>