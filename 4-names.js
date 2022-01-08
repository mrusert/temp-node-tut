// local
const secret = 'SUPER SECRET';

// share
const john = 'john';
const peter = 'peter';

// Every file in node is a module
// Below we're adding two constants to this file/modules 'exports' object
// By adding it to the exports object we can now access it in other files/modules
module.exports = {john, peter};
// console.log(module);
