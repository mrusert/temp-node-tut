// Highlights the different syntaxes that can be used to add items to the exports object of the module

module.exports.items = ['items1', 'items2'];
const person = {
    name: 'bob'
}

module.exports.singlePerson = person;
console.log(module);