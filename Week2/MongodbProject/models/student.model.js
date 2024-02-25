/**
 * Define the schema of students collection to be
 * stored in the DB
 */

const mongoose=require("mongoose")

// schema
const studentScheme=new mongoose.Schema({
    name:String,
    age:Number
})
const teacherScheme=new mongoose.Schema({
    name:String,
    age:Number,
    collage:String
})

//Go ahead and create corresponding collection in DB
module.exports=mongoose.model("Student", studentScheme)
module.exports=mongoose.model("Teacher", teacherScheme)