// npm - global command, comes with node
// npm --version

// local dependency - use package only in this particular project
// npm i <packageName>

// global dependency - use package in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file that stores important info about project/packages
// package name needs to be unique if you plan to share it on npm
// Different Approaches
    // 1. manual approach - create package in the root folder, create properties, etc.
    // 2. npm init approach - automated step by step, press enter to skip
    // 3. npm init -y approach - automated, everything default 

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)