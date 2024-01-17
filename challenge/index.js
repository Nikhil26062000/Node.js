

const fs = require('fs');

//? create the folder
// fs.mkdirSync("temp");

//? creating new filw
// fs.writeFileSync("temp/bio.txt","This is text file");

//?append the data in file
// fs.appendFileSync("temp/bio.txt"," This is the challenge section");

//? getting data without buffer
// const data = fs.readFileSync("temp/bio.txt","utf8");
// console.log(data);

//? rename the file
// fs.renameSync("temp/bio.txt","temp/mybio.txt");

//? delete the file
// fs.unlinkSync("temp/mybio.txt");

//? delete the folder
// fs.rmdirSync("temp");