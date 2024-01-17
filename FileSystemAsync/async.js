

const fs = require('fs');

//? read data in sync
// const data = fs.readFileSync("read.txt",'utf-8');
// console.log(data);
// console.log("After the data");


//? read data in Async
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data)
});
console.log("after the data");