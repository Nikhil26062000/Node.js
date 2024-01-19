

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("This message from server side");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening");
})