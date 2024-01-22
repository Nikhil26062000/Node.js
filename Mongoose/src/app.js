
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tempdata").then(()=>console.log("Connection successful..."))
.catch((err)=>console.log(err));

// Define the schema for your collection
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  });

  const User = new mongoose.model("User",userSchema);

  //?creating document
//  const createDocument = async() => {
//     try {
//         const userFirst = new User({
//             name:"User3",
//             age:30,
//             email:"user3@gmail.com"
//       })
//       const result = await userFirst.save();
//       console.log(result)
//     } catch (error) {
//         console.log(error);
//     }
//  }

//  createDocument();


//?Inserting multiple documents at a time
const insertDocuments=async ()=>{
    try {
        const results =await User.insertMany([
            { 
                name : "John Doe",
                age : 30,
                email : 'john.doe@example.com'
            },
            { 
                name : "Jane Smith",
                age : 35,
                email : 'jane@example.com'
            },
            { 
                name : "Bob Smith",
                age : 40,
                email : 'bob@example.com'
            }
        ])
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

insertDocuments();



