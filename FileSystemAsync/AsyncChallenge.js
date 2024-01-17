

const fs = require('fs');

//? creating the folder
// fs.mkdir("tempNew",(err)=>{
//     console.log("Folder created");
// })


//? creating file in the folder
// fs.writeFile("./tempNew/bio.txt","This is second challenge.",(err)=>{
//     console.log("file created");
// });


//? append the data in file
// fs.appendFile("./tempNew/bio.txt"," Appending the data.",(err)=>{
//     console.log("Data append successful");
// });


//? Reading the data
// fs.readFile("./tempNew/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

//?Rename the file
// fs.rename("./tempNew/bio.txt","./tempNew/mybio.txt",(err)=>{
//     console.log("Rename done");
// });

//? delete the file
// fs.unlink("./tempNew/mybio.txt",(err)=>{
//     console.log("Unlink done");
// });

//? delete the folder
fs.rmdir("./tempNew",(err)=>{
    console.log("Folder delete");
})