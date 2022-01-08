// GLOBALS 

//- NO WINDOW OBJECT IN NODE !!!
// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (commonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

// There are more global variables, but these are most common 

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);
console.log(`require: ${require}`);
console.log(`module: ${module}`);
console.log(`process: ${process}`);

// setInterval and setTimeout are also globally available in node.

// setInterval(()=> {
//     console.log('Hello World!');
// }, 1000)