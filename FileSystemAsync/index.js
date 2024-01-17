

const fs = require('fs');

//? creating the file
// fs.writeFile("read.txt","Today is wednesday",(err)=>{
//     console.log("File is created");
// });


//? append the data to file
// fs.appendFile("read.txt"," Time is 6:49pm",(err)=>{
//     console.log("File append successfull");
// })


//? reading data from file as buffer data
// fs.readFile("read.txt",(err,data)=>{
//     // callback function which gives error and result
//     console.log(data);
// })


//? reading data without buffer
fs.readFile("read.txt","utf8",(err,data)=>{
    console.log(data);
});