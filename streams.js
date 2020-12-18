const fs = require('fs');

// start by setting up the read and write streams
// the read stream is simply the source that we read in the data from:
// streams get passed small buckets(buffers) of data

// syntax: fs.createReadStream({path to stream}, {formatting options})
const readStream = fs.createReadStream('./docs/blog3.txt');

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// consider the following 'data being passed in' event listener:
// syntax:
//      readStream.on({event}, {callbackFunction(chunk)}), where we now get access to the {chunk} of data:
readStream.on('data', (chunk) => {
    console.log("NEW ------------ CHUNK");
    // console.log(chunk);
    writeStream.write("\nNEW CHUNK BEING WRITTEN:\n");
    writeStream.write(chunk);
});

// we can simplify the above by just using this one line:
// PIPING:
// readStream.pipe(writeStream);