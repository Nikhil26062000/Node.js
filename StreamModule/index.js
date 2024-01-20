

var fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
    
    //*this is reading data using readFile
    // fs.readFile("read.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    //? Now reading data using Straem
    const rstream = fs.createReadStream("read.txt");

    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // })

    // rstream.on("end",()=>{
    //     res.end();
    // })

    // rstream.on("error",(err)=>{
    //     console.error(err);
    //     res.end(err.message);
    // })

    //! Another way
    rstream.pipe(res);
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening");
})