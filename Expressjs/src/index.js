
const path = require('path');

const express = require('express');
const hbs = require('hbs');

const app = express();

//console.log(path.join(__dirname, '../public'));
//const staticPath = path.join(__dirname, '../public')
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//to set the view engine
app.set('view engine', 'hbs');
app.set('views',templatesPath);
hbs.registerPartials(partialsPath);



//! Using Built-in Middleware to use static file
// app.use(express.static(staticPath));

//template engine route
app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/about',(req, res)=>{
    res.render('about');
})


// app.get("/",(req,res) => {
//     res.send("Hello World!");
// })

// app.get("/about",(req,res) => {
//     res.send("Welcome to about page");
// })

app.get("/about/*",(req,res) => {
    res.render("error",{
        errorMessage: "This about us page doesn't found"
    });
})

app.get("*",(req,res) => {
    res.render("error",{
        errorMessage: "404 error page"
    });
})

app.listen(3000,() => {
    console.log("Listen");
})