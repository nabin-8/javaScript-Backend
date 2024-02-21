// write the code to write to an external file

const { log, error } = require('console')
const fs = require('fs')

console.log("Before Read");
fs.writeFileSync('output1.txt','Hello Students!')
console.log("After Read");

fs.writeFile('output2.txt',"Hello i am second with async",error=>{
    if(error){
        return console.log(error);
    }
    console.log("written succesfully !");
})