// GLOBAL variables - they can be used anywhere in the code

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

console.log(__dirname); 

setInterval(() => {
    console.log(`Hello King`);
}, 1000) //Hello King repeats every 1sec