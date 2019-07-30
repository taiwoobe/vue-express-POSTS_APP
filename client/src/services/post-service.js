import { HTTP } from '../config/api'

export default {
    fetchPosts () {
        return HTTP.get('posts');
    },
    createPost(post) {
        return HTTP.post('posts', post);
    },
    deletePostById(id) {
        return HTTP.delete(`posts/${id}`);
    }
}
