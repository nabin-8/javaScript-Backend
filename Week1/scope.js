/**
 * 1. Global scope
 * 2. Function scope] Local 
 * 3. Block scope   ] scope
 */

//Global Scope
// var name="Nabin"
// console.log(name);

// function func() {
//     console.log(name);
// }

// func()

// Local scope/ function scope variable

// function func() {
//     var num=55
//     console.log(num);
// }

// func()
// console.log(num);


//Block scope

// {
//     // This is block 
//     var x=20
//     console.log(x);
// }

// console.log(x);


// using let keyword

{
    // This is block 
    let x=20
    console.log(x);
}

console.log(x);