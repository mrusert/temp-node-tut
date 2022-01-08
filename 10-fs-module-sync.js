// Destructure specific methods out of fs module
const { readFileSync, writeFileSync, readlinkSync } = require('fs')

// Read files
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

// Write Files
writeFileSync('./content/third-sync.txt',`Here is the result \nValue from first.txt - ${first}\nValue from second.txt - ${second}`)

// Append to existing file
writeFileSync('./content/third-sync.txt', '\n\n<----Appending to third.txt----->', {flag: 'a'})