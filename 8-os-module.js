const os = require('os');

// info about current user
const currentUser = os.userInfo();
// console.log(currentUser);

// methods returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);