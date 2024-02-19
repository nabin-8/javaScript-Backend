/**
 * Async Await
 */

// 

// function getMessage(){
//     return 'Hello Students'
// }

// console.log(getMessage());


// async function getMessage(){
//     return 'Hello Students'
// }

// console.log(getMessage());
// //Promise { 'Hello Students' }
// getMessage().then(result => console.log(result))
// Hello Students

/**
 * Create a function  that print hello after a wait
 */

console.log("Hello from beginning");
async function printHelloAferWait(){
    console.log('First Line');
    
    let data = new Promise((resolve ,reject)=>{
        
        setTimeout(() => {
            resolve("Hello Students");
        }, 3000);
    })
    let result=await data  //start waiting for the data promises to be complete
    console.log(result);
    console.log("Last Line");
}

printHelloAferWait()
console.log("Hello from last");