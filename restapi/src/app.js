

const express = require('express');
const app = express();
require("./db/connection")
const Student = require("./models/students");
const PORT = process.env.PORT ||8000;

//! to get data from frontend or Postman we need to use middleware in express js
app.use(express.json()); //* this is a built-in middlware

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.post('/students', (req, res) => {
    res.send("Hello from server");
    console.log(req.body);
    let user = new Student(req.body);
    user.save().then(() => {
        console.log("Data submitted");
    }).catch((err) => {
        console.log(err);
    })
    
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})