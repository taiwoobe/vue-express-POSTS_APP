<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <!-- Create Posts -->
    <div class="create-post">
      <label for="create-post">Type in Post Title...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Enter Post Title..">
      <button @click="addPost">Create Post</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{ error }}</p>
    <div class="posts-container">
      <div class="post" v-for="post in posts" :key="post._id">
        <div class="created-at">
          {{ post.createdAt }}
        </div>
        <div class="delete-post">
          <span @click="deletePost(post._id)">Delete</span>
        </div>
        <!-- {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}} -->
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../services/post-service';
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      PostService.fetchPosts().then(response => {
        this.posts = response.data.data;
      }).catch(error => {
        console.log(error);
      })
    },
    addPost() {
      PostService.createPost({
        text: this.text
      });
      this.text = '';
      this.getPosts();
    },
    deletePost(id) {
      PostService.deletePostById(id).then(response => {
        this.getPosts();
      }).catch(error => {
        console.log(error);
      })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 20px;
}

div.created-at, div.delete-post {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background-color: darkgreen;
  color: #fff;
  font-size: 13px;
}

div.delete-post {
  right: 0;
  left: auto;
  background-color: red;
  padding: 4px 10px;
  cursor: pointer;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

</style>
