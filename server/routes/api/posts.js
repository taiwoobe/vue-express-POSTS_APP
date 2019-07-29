// Initialize express and express router
const express = require('express');
const router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Yeah, Our API is working!',
        message: 'Running VueJS FullStack Post Application!'
    });
});

// Import post controller
var postController = require('../../controllers/posts-controller');

router.get('/posts', postController.getAll);
router.post('/posts', postController.create);
router.delete('/posts/:post_id', postController.delete);


// Export API routes
module.exports = router;