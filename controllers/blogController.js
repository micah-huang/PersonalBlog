const Blog = require('../models/blog');

const blog_index = (req, res) => {
    // we can also find and sort by a certain property (eg. newest blogs first):
    Blog.find().sort({createdAt: -1}).then((result) => {
        res.render('blogs/index', {title: 'All Blogs', blogs:result});
    }).catch(err => {
        console.log(err);
      });
}

const blog_details = (req, res) => {
    // extract the id:
    const id = req.params.id;
    // find the blog inside our DB and render it onto the details page by 
    //      passing in the blog document fetched from the DB:
    Blog.findById(id).then((result) => {
        res.render('blogs/details', {blog: result, title: 'Blog Details'});
    }).catch((err) => {
        res.status(404).render('404', {title: 'Blog not found'});
    });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    // urlencoded passes in the blog info formatted the way we want
    // next we'll fetch and save the blog:
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        res.redirect('/blogs');
    }).catch((err) => {
        console.log(err);
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/blogs' });
    }).catch((err) => console.log(err));
}

module.exports = {
    blog_index, 
    blog_details, 
    blog_create_get, 
    blog_create_post, 
    blog_delete
}