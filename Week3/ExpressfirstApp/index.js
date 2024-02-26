const express=require("express")

console.log(typeof express);

const app=express()
//middleware
// routes
//express server

/**
 * Starting the express server
 */

app.listen(8000,()=>{
    console.log("Server get Started");
})

/**
 * see a req - cycle
 */

app.get("/",(req,res)=>{
    res.send("Hello from thw wxpress server")
})