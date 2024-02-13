// forEatch method

//let's take an example

// players=["Rahul", "Dhoni", "Sachine", "Ronak"]

// players.forEach(player => {
//     console.log(player);
// });

/**
 * Map 
 * => Creation of new transformed array
 */

// arr=[1,2,3,4,5,6,7]

// cube_array=arr.map(num => num**3)
// console.log(cube_array);
// Note: map doesnot change the orginal array 
// console.log(arr);

//filter

arr=[1,2,3,4,5,6,7]

let even_arr=arr.filter((num)=> num%2==0)

// console.log(even_arr);

// reduce


const sum=[1,2,3,4,5,6,7,8,9,10].reduce((curr, next)=> curr+next)

console.log(sum);