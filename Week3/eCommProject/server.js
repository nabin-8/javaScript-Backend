/**
 * This will be the starting file of the project
 */
const express=require("express")
const mongoose=require("mongoose")
const server_config=require("./configs/server.config")
const db_config=require("./configs/db.config")
const user_model=require("./models/user.model")
const bcrypt=require("bcryptjs")
const app=express()

app.use(express.json())

/**
 * Create an admin user at the starting of the application
 * if not already present
 */

// connection with mongodb
mongoose.connect(db_config.DB_URL)

const db=mongoose.connection

db.on("error",()=>{
    console.log('Error while connecting to the mongoDB');
})

db.once("open",()=>{
    console.log("Connected to MongoDB");
    init()
})

async function init(){
    try {
        
        const user= await user_model.findOne({userId:"admin"})

        if(user){
            console.log("Admin is already present");
            return
        }

    } catch (err) {
        console.log(err);
    }

    try {
        
        user=await user_model.create({
            name:"Nabin",
            userId:"admin",
            email:"nabin@gmail.com",
            userType:"ADMIN",
            password:bcrypt.hashSync("nabin123",8)
        })
        console.log("Admin created: ",user)

    } catch (error) {
        console.log("Error while creating admin",error);
    }
}

/**
 * stich the route to the server
 */
require("./routes/auth.routes")(app)


/**
 * Start the server
 */

app.listen(server_config.PORT,()=>{
    console.log("Server started at port num :",server_config.PORT);
})