export default {
    namespaced: true,
    state: {
        posts: [],
    },
    getters: {
        getPosts: (state) => state.posts,
        getPostsLength: (state) => state.posts.length,
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        }
    },
    actions: {
        async fetchPosts(context, limit = 3) {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const posts = await res.json();
            context.commit('setPosts', posts)
        }
    }
}