// Objects OOP

const user={
    name:"Nabin",
    age:22,
    city:"Bnb"
}

//Accessing the data

// console.log(user.name);
// console.log(user['name']);

/**
 * Adding data to the object
 */

// user.country="Nepal"
// user["countinent"]="Nepal"
// console.log(user);

/**
 * Deleting object
*/

// delete user.country
// delete user['countinent']
// console.log(user);

let person={
    name:"Nabin",
    age:22,
    address:{
        city:"ktm",
        province:3,
        country:"Nepal"
    }
}

// for (const key in person) {
//     console.log(key, "=>", person[key]);
// }

// console.log(Object.keys(person));

// console.log(Object.values(person));
// //get entire object
// console.log(Object.entries(person));


/**
 * Cloning an object using assign
 */

const new_person=Object.assign({},person)
console.log(new_person);


const new_person_1=Object.assign({},person,{role:"Developer"})
console.log(new_person_1);