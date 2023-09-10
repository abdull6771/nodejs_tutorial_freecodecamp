//Writing and Reading File 
const {readFileSync,writeFileSync}  = require("fs")

const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8")

console.log(first)
console.log(second)

const third = writeFileSync("./content/third.txt",`This is the new file created you can see the content
 of first file : ${first}`,"utf8")