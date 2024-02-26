const mongoose=require('mongoose')
const studentModule=require('./models/student.model1')

/**
 * Write the code to connect with MongoDB
 */

mongoose.connect("mongodb://127.0.0.1/be_demodb")
// insted of localhost we can also use 127.0.0.1

const db=mongoose.connection //Start the connection with MongoDB

db.once("open",()=>{
    console.log("Connected to Mongodb");
    // init()
  
    //Running the queries on MongoDB
    // dbQueries()
    deleteQueries()
})

db.on("error", ()=>{
    console.log("Error while conection to DB");
})

// async function init(){
//     // logic to insert data in the DB
//     const Student={
//         name: "Nabin",
//         age:102
//     }
//    const std_obj=await studentModule.create(Student)
//    console.log(std_obj);
// }


// async function teacher(){
    //     // logic to insert data in the DB
//     const Teacher={
//         name: "Nabin",
//         age:102,
//         collage:"Code Library"
//     }
//    const std_obj=await studentModule.create(Teacher)
//    console.log(std_obj);
// }


// async function init(){
//     // logic to insert data in the DB
//     const Student={
//         name: "Rahul",
//         age:55,
//         email:"Rahul@gmail.com",
//         subjects:["Maths","English"]
//     }
//    const std_obj=await studentModule.create(Student)
//    console.log(std_obj);
// }

//async  function dbQueries(){
    // Read the student data based on the id
    // console.log("Inside the dbQueries function");
    // try {
    //     const student=await studentModule.findById('65db49794f157f6e3e65d9f1')
    //     console.log(student);
    // } catch (error) {
    //     console.log(error);
    // }

    // I want search based on the name
    // try{
    // const students= await studentModule.find({name:"Mohan"})
    // const students= await studentModule.findOne({name:"Nabin"})
    // const students= await studentModule.find({})
    // console.log(students);
    // } catch(error){
    //     console.log(error);
    // }

    // studentModule.find({email:"nabin740@gmail.com"})

    /**
     * Deal with multiple conditions
     */

    // const std= await studentModule.where("age").gt("10").where("name").equals("Nabin").limit(2)
    // console.log(std);
//}

//Delete documents

async function deleteQueries(){
    // Dlete one document where name ="Nabin"

   const student= await studentModule.deleteOne({name:"Nabin"})
   console.log(student);
}