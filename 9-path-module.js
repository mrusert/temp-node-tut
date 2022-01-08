const path = require('path')

// My platform specific separator
console.log(path.sep) // /

// join paths together, returns normalized path based on platforms separator
const filePath = path.join('/content','subfolder', 'text.txt')
console.log(filePath) // /content/subfolder/text.txt

// find the base name for a path
const base = path.basename(filePath)
console.log(base) // text.txt

// resolve returns absolute path, accepts sequence of paths or path segements
// nice when you have applications running on different systems and the paths for resources may be different
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)