const path = require('path')

//return platform specific seperator
console.log(path.sep)

//joins sequence of path segment using the path seperator
const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath);

// /get base name
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
