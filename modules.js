// the require key word looks for the specified file and runs that file
const variable = require('./people');

// the ./people refers to file name
// calling node modules will run the entire people.js file 
// variable now has a value of whatever the export value was set as in people.js
// without a modules.exports line in the people.js file, 'variable' at the moment would be an empty object

// _____________________________________________________________________________________________________

// here we specify what from the module.exports we want
// we also could have specified only the ages array and we wouldn't get people
const {people, ages} = require('./people');

// the above line now gives access to the people and ages variables defined in people.js
console.log(people, ages);

// consider the following equivalent to importing the {os} class in Java:
const os = require('os')
// console.log(os);
