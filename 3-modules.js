// CommonJS, every file in node is a module (by default)
// Modules - encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data);

// Without assigning a module to a variable the code within that module will be invoked
// In this case, the function addValues will be invoked
// This shows that when you import a module you're actually invoking it
require('./7-mind-grenade');