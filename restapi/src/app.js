

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

//? -------------------- This way is using async await to insert data in db ----------------------------------
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

//? -------------------- Getting all data from db ---------------------------------
app.get("/students",async(req, res) => {
    try {
        const result = await Student.find();
        console.log(result);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

//? ----------------------- Getting data of particular student --------------------------------------------------------
app.get("/students/:id",async(req, res) => {
    try {
        const id = req.params.id;
        //here if we use find method then The find method in Mongoose returns an array of documents, even if only one document matches the query. So, when you check if (!result), it will be true if the array is empty, which may not be the expected behavior.
        const result = await Student.findOne({_id:id});
        if(!result){
           return res.send("Data not found");
        }
        console.log("Data of single user");
        console.log(result);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})


//? ---------------------- Update student data ---------------------------------
app.patch('/students/:id',async(req, res) => {
    try {
        const _id = req.params.id;
        const result = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!result){
            return res.status(404).send(result);
        }else{
            res.status(200).send(result);
            console.log(result);
            console.log("Data Upddated");
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

//? ------------------- delete the student from db -------------------------
app.delete("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const result = await Student.findByIdAndDelete(_id);
        if(!result) {
            return res.status(404).send(result);
        }else{
            res.status(200).send(result);
            console.log("Data Deleted",result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})