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

//Go ahead and create corresponding collection in DB
mongoose.model("Student", studentScheme)