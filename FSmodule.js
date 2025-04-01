// const { log } = require('console');
const {readFileSync,writeFileSync} = require('fs');
// const fs = require('fs');

const first = readFileSync('NODEJS\\subfolder\\first.txt', 'utf8');
const second = readFileSync('NODEJS\\subfolder\\second.txt', 'utf8');
// const first = fs.readFileSync('NODEJS\\subfolder\\first.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('NODEJS\\subfolder\\result-sync.txt', `Here is the result: ${first}, ${second} `, { flag: 'a' });

