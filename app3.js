//Working with in-built modules

const os = require("os")
const user = os.userInfo()
console.log(user)//Print user info
console.log(`The system uptime is ${os.uptime()} second`)
//print some usefull data about the os

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
}
console.log(currentOS)