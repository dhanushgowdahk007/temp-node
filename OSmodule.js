const { log } = require('console');
const os = require('os');
// console.log(os);

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    TotalMEM: os.totalmem(),
    freeMem: os.freemem(),
}
 console.log(currentOS)