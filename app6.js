//Create Web Serve

const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our home page")
    }
    else if (req.url === "/about"){
        res.end("Welcome to about us page")
    }
    else{
    res.end(`
    <h1>Ooops</h1>
    <p>We dont have this site go back to home page</p>
    <a href="/">home</a>
    `)}
})

server.listen(5000)