// Import Posts model
Post = require('../models/post-model');

// Retrieve and return all posts from the database.
exports.getAll = (req, res) => {
    Post.find(function (err, post) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else {
            res.json({
                status: "success",
                message: "Posts retrieved successfully",
                data: post
            });
        }
    });
};

// Handle create posts actions
exports.create = (req, res) => {
    let post = new Post();
    post.text = req.body.text ? req.body.text : post.text;

    // save the post and check for errors
    post.save(function (err) {
        if (err) { 
            res.json({
                status: "error",
                message: err,
            });
        }
        else {
            res.json({
                status: "success",
                message: 'New post created!',
                data: post
            });
        }
    });
};

// Handle delete post
exports.delete = (req, res) => {
    Post.deleteOne({
        _id: req.params.post_id
    }, function (err) {
        if (err) {
            res.json({  
                status: "error",
                message: err, 
            });
        }
        else {
            res.json({
                status: "success",
                message: 'Post deleted succesfully'
            });
        } 
    });
};