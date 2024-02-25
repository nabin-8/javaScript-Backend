const mongoose=require('mongoose')

/**
 * Write the code to connect with MongoDB
 */

mongoose.connect("mongodb://127.0.0.1/be_demodb")
// insted of localhost we can also use 127.0.0.1

const db=mongoose.connection //Start the connection with MongoDB

db.on("error", ()=>{
    console.log("Error while conection to DB");
})
db.once("open",()=>{
    console.log("Connected to Mongodb");
})