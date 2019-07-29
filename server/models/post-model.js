const mongoose = require('mongoose');

// Setup schema
const postsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// Export Post model
let Post = mongoose.model('post', postsSchema);
module.exports = Post;