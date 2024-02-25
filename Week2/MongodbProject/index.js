const mongoose=require('mongoose')
const studentModule=require('./models/student.model')

/**
 * Write the code to connect with MongoDB
 */

mongoose.connect("mongodb://127.0.0.1/be_demodb")
// insted of localhost we can also use 127.0.0.1

const db=mongoose.connection //Start the connection with MongoDB

db.once("open",()=>{
    console.log("Connected to Mongodb");
    init()
    teacher()    
})

db.on("error", ()=>{
    console.log("Error while conection to DB");
})

async function init(){
    // logic to insert data in the DB
    const Student={
        name: "Nabin",
        age:102
    }
   const std_obj=await studentModule.create(Student)
   console.log(std_obj);
}
async function teacher(){
    // logic to insert data in the DB
    const Teacher={
        name: "Nabin",
        age:102,
        collage:"Code Library"
    }
   const std_obj=await studentModule.create(Teacher)
   console.log(std_obj);
}