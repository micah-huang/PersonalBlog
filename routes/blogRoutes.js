const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

// grab our Blog model:
const Blog = require('../models/blog');

router.get('/create', blogController.blog_create_get);

router.get('/', blogController.blog_index);

// after setting up the post request on button click inside our create a blog page,
//      we set up a POST request handler inside of our app:
router.post('/', blogController.blog_create_post);

// after setting a custom URL for each clickable blog post, we'll have
//       to handle that (:{nameofvariable} specifies that it's changable):
router.get('/:id', blogController.blog_details);

// setup a delete method for a specific blog:
router.delete('/:id', blogController.blog_delete);

module.exports = router;