// function hello(){
//     let name="Nabin"
//     console.log(name);
// }

// const { log } = require("async")

// hello()

// console.log(name);

// function outerFun(){
//     let outerVar="I am from outer Fun"
//     function innerFun(){
//         console.log(outerVar);
//     }

//     return innerFun
// }

// let fun=outerFun()

// fun()

function customerCounter(){
    let count =0

    return function(){
        count++
        console.log("New customer count is ", count);
    }
}

let counter =customerCounter()

counter()
counter()
counter()