//// FILE SYSTEM:

// start by importing the files library that we need:
const fs = require('fs');

//// reading files:

// note: fs.readFile({relative path to file}, {function(err, data) to be ran after reading the file}) 
//      is an asynchronous function, i.e. it will run other code in the file before the function call finishes

// example usage:
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//// writing files:

// function syntax:
//      fs.writeFile({relative path to file wanted to be created}, {content to be written}, {callback function})
// usage:
fs.writeFile('./docs/blog3.txt', 'this is a newly created blog', (e ) => {
    console.log("You've succesfully created a new blog file")
});

//// Making Directories:

// function syntax:
//      fs.mkdir({relative path to where the directory should be created}, {callbackFunction(err)})
// usage:
fs.mkdir('./assets', (err) => {
    console.log("You've succesfully created the new directory");
});

//// Deleting Directories:

// function syntax:
//      fs.rmdir({relative path to where the directory should be created}, {callbackFunction(err)})
// usage:
fs.rmdir('./assets', (err) => {
    console.log("You've deleted the directory");
})

// Checking for existing files/dirs:
// fs.existsSync({relative path to file or dir})

//// Deleting Files:
//      fs.unlink({relative path to the file to be deleted}, {callbackFunction(err)})