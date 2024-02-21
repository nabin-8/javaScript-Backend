// Read from an external file

const { log, error } = require('console')
const fs = require('fs')
// console.log(typeof fs);

// Read in the sync way
console.log("Before start");

// const content=fs.readFileSync("input.txt")
// console.log("Output content is: "+content);

console.log("Last Line");

// Reading Async way

fs.readFile('input.txt',(error, content)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Content of the file is: "+content);
    }
})


