// CommonJS, every file is module (by default)
// MODULES - Encapsulated Code (Only share minimum)

// Built - in Modules
// OS
// PATH
// FS
// HTTP

const names = require('./names');
// console.log(names);

const sayHi = require('./module-2')

// sayHi('Dhanush');
// sayHi(names.john);
// sayHi(names.peter);

// console.log(sayHi.items);
// console.log(sayHi.singlePerson.fname);

require('./mind-grenade');