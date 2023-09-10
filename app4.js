//Working with path
const path = require("path")
const file = require("path")

console.log(file.sep)

const filepath = path.join("/content","subfolder","text.txt")
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,"content","subfolder","test.txt")
console.log(absolute)