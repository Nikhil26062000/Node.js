

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



/*

 ? This is also a way using Promises

 // app.post('/students', (req, res) => {
//     res.send("Hello from server");
//    // console.log(req.body);
//     let user = new Student(req.body);
//     user.save().then(() => {
//         console.log("Data submitted");
//     }).catch((err) => {
//         console.log(err);
//     })
    
// })

*/

//?This way is using async await
app.post("/students", async(req, res) => {
    try {
        // let user = new Student(req.body);
        // const result = await user.save();
        //res.status(201).send(result);

        const data = req.body;
        const studentCreated = await Student.create(data);
        res.status(201).send(studentCreated);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})