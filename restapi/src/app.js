

const express = require('express');
const app = express();
require("./db/connection")
const StudentRoute = require('./router/StudentRouter');
const PORT = process.env.PORT ||8000;

//! to get data from frontend or Postman we need to use middleware in express js
app.use(express.json()); //* this is a built-in middlware
app.use(StudentRoute);
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})