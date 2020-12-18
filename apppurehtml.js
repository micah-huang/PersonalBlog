const express = require('express');

// set up express app:
const app = express();

// set up the listener:
app.listen(3000);

// setting up get request handling, note the similar setup to what we had inside server.js
// app.get('/', (req, res) => {
//     // note the specification of where the root is
//     res.sendFile('./views/index.html', { root: __dirname });
// })

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // it'll search inside views folder automatically to find the index file
    res.render('index');
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

// redirects in express:
app.get('/aboutredirect', (req, res) => {
    res.redirect('/about');
})

// express code runs top to bottom, so we can set up a app.use function to handle bad URLs:
// be careful of placement of use as it will run for every single URL request
// so if we put it at the top, it will never hit the '/' or '/about' endpoints

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})
