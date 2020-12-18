// middleware is code that is ran between receiving the request and sending the response:
//      Usage: 404 pages, authentication, logging details, parse JSON

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');

// connect to MongoDB:
const dbURI = 'mongodb+srv://newuser:123@nodecrashcourse.q5odz.mongodb.net/nodecrashcourse?retryWrites=true&w=majority';
// then we attempt to connect to the database at which time we can fire a callback function 
//      if we have a success or catch an error if one should occur
// the second parameter object set to true just gets rid of redundant log messages
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => 
    // we only want to start listening on the port after the database is connected:
    app.listen(3000))
    .catch((err) => console.log(err));

// set up view engine:
app.set('view engine', 'ejs');
//      This will now make anything in the public folder accessible by our express app
app.use(express.static('public'));
// setup another middleware that will allow to fetch the information passed in from our form:
// the extended: true part just gets rid of redundant log messages
app.use(express.urlencoded( {extended: true} ));
// you have to instruct app.use() to advance or else it will hang and not continue
// set up middleware to be used:
app.use(morgan('dev'));






app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// setting up get request handling, note the similar setup to what we had inside server.js
// app.get('/', (req, res) => {
// creating and saving blogs to our database:

// When we call the render method, we can pass in an object with a key-value pair for the 
//      rendered ejs file to use, this process is what we call server-side rendering

app.get('/', (req, res) => {
    res.redirect('/blogs');
  });

app.get('/about', (req, res) => {
    res.render('about');
});

// blog routes:
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
