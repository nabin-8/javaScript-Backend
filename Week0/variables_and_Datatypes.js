// var name 
// // variable declare
// console.log(name);

// // 
// var age=19
// console.log(age);

/**
 * Name a variable
 * Rules
 * 1. a-z/A-Z/0-9_/$
 * 2. keywords (if, else, for ...)
 * 3. No space between variable words, firstName, first name(not valid)
 * 
 * Guidline/Suggestions
 * 1.Meaning
 * 
 * Observations
 * 1.They are ccase sensitive ... name, nabin
 */

// var name="Nabin Acharya"


//Datatypes in JavaScript
//Datatype in javascript can devide in two groups they are:

//1. Primitive Datatypes
//2. Non-Primitive Datatypes

/**
 * Primitive
 *  1. Number
 *  2. Boolean
 *  3. Strings
 *  4. Undefine
 *  5. Null
 *  6. NAN
 *  7. BigInt
 *  8. Symbol
 */

/**
 * Non-Primitive
 *  1. Array
 *  2. Objects
 *  3. Boolean
 */

//strings
// var name="Nabin"
// var title="acharya"
// console.log(name);
// console.log(typeof(name));
//type of is used to find the type  of variable

//Number
// var age=91
// var x=1.4

// console.log(age);
// console.log(typeof x);

// //BigInt
// var big_num=123n
// console.log(typeof big_num);

// console.log(typeof NaN);

// Null
// console.log(typeof null);

// null vs undefined
// undefined: 
// It means you have defined the variable but not assigned the value

//null:
// Purposefully dont want any value assign to a variable

// boolean
// console.log(typeof true);

//symbol
// var s1=Symbol();
// console.log(s1);


// Non-primitive datatypes


//objects

var person ={
    name:"Nabin",
    age:19,
    hobby:"Programmer"
}

console.log(person);