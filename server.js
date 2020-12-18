const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// create a server with callback function that takes in request, response params
// when we send a request to localhost 3000, we'll fire the callback function 

// quick node on status codes:
//      100s: informationl responses
//      200s: success codes
//      300s: redirect codes
//      400s: user/client error codes
//      500s: server error codes

// the req param contains info about the request that was made to localhost 3000
const server = http.createServer((req, res) => {
    // console.log("A request was made");
    const num = _.random(0, 10);
    console.log(num);

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //consider a redirect case for old, outdated URLs:
        case '/about-anotherone':
            res.statusCode = 301;
            res.setHeader('Location', './about');
            break;
        default:ç
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("There was an error: " + err);
            res.end();
        } else {
            res.end(data); // equivalent to res.write(data) -> res.end()
        }
    });
});

// listens to any calls to the 3000 local port
server.listen(3000, 'localhost', () => {
    console.log("The server is now running")
})



