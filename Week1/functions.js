// Functions

/**
 * Define a functions
 */

function hellofun(){
    console.log("Hello Function1");
}

hellofun() //Hello Function1

/**
 * Create the function which returns two number sum
 */

function sum(a,b) {
    console.log(a+b);
    return a+b;
}

sum(10,20) //output: 30


//default value
function sum2(a,b=9) {
    console.log(a+b);
    return a+b;
}

sum2(10) //output: 19


function func(){
    console.log(arguments);
}

// func(1,2,3,4,5)
//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }





// Arrow Function

/**
 *  function with no argument and no return
 */

var hello=()=> console.log("Hello Arrow Function");

hello()

/**
 * Fn with parameters and return
 */

var sumfun=(a,b)=>a+b;
console.log(sumfun(10,30));


/**
 * fn with parameters, multiple lines of fn body
 */

var process=(a,b)=>{
    console.log("I need process");
    return a*b
}


console.log(process(5,6));

// IIFE (Immediately invoked function expression)

// The function which haven't any name called anonymous function
(function(){
    console.log(`Hello students`);
})()