

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
})

app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
})

app.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page");
})

app.get('/temp', (req, res) => {
    res.send("Welcome to Temprature Page");
})

app.listen(3000,()=>{
    console.log("Running on port 3000");
})