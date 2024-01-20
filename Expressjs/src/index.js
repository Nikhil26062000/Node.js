
const path = require('path');

const express = require('express');

const app = express();

console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public')

//! Using Built-in Middleware to use static file
app.use(express.static(staticPath));

app.get("/",(req,res) => {
    res.send("Hello World!");
})

app.get("/about",(req,res) => {
    res.send("Welcome to about page");
})

app.listen(3000,() => {
    console.log("Listen");
})