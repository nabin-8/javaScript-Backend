//Destructuring

/**
 * Fetch the values out of arrays and objects
 * and assigned at to the variable
*/

//Destructuring in arraya
// const nums=[1,2,3]

// const [a,b,c,d]=[1,2,3]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// const [p,q,r]=[1,2,[4,5,6]]
// console.log(p);
// console.log(q);
// console.log(r);

//Destructuring in objects

const person={
    age:99,
    name:"Nabin",
    city:"ktm",
    address:{
        cityy:"ktm",
        state:"kktm"
    }
}

const {age,name,city, address:{cityy, state}}=person
//this is how you can get nested array
console.log(age);
console.log(name);
console.log(city);
// variable most match keys of the object
console.log(address);