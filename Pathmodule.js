const path = require('path');

console.log(path.sep); // platform-specific seperator

const filePath = path.join('/NODEJS','subfolder','text.txt')
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName); // returns the last part of the path

// console.log(path.resolve(filePath))

const absolute = path.resolve(__dirname,'subfolder','text.txt');
console.log(absolute);
