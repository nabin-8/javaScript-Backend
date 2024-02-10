// Var
/**
 * 1. It's used to define a variable
 * 2. It has function scope but no block scope
 * 3. It is hoisted
 */
// function f1() {
//     var i=5;
//     console.log(i);
// }

// f1()
// console.log(i);

// {
//     var i=5
//     console.log(i);
// }

// console.log(i);


// console.log(i);
// var i=5
// after defining the variable name it goes to top which is hoisted




//Let
/**
 *  1. No hoisting
 * 2. It also has block scope
 */

// console.log(i);
// let i=5

// {
//     let name ="Nabin"
//     console.log(name);
// }

// console.log(name);

//Const
/**
 *  1. scope is exactly same as let
 *  2. Const variable are final, can't be re-assigned a value
 */

const country="Nepal"

country="USA"