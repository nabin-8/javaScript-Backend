//Arrays
/**
 * Baically array is the collection of same datatype
 * in js you can store data in any datatype
 */

// arr=[1,2,3]
//this is one way to define array
// arr1=new Array()
// //this is another way
// console.log(arr);
// console.log(arr1);
// console.log(typeof arr);
// console.log(typeof arr1);

// arr=[1,2,3,4,5,6,7,8,9,10]

// console.log(arr[0]);
// console.log(arr[7]);
// console.log(arr[21]);

// console.log(arr[-1]);



//Arrays are mutable
// arr[1]=200
// console.log(arr);

//Insert items
array=[5,7,1,3,4,8,9,6]
// console.log(array);

//push method add elements in the end of array
// array.push(11)
// console.log(array);

// array.push(99,100,101)
// console.log(array);


//unshift add elements in the begning
// array.unshift(999)
// console.log(array);

// array.unshift(999,99,9999)
// console.log(array);

//Removing element
/**
 * pop method
*/

// array.pop()
// console.log(array);
//pop method delete elements in the end of array

//shift
// array.shift()
// console.log(array);

//Adding two arrays
//concat
let a1=[1,2,3]
let a2=[4,5,6]

// let newarray=a1.concat(a2)
// console.log(newarray);
// console.log(a1);

//size of the array
// console.log(a1.length);

//Converting array into string
chr_arr=['N','a','b','i','n',' ','A','c','h','a','r','y','a']

//join
// console.log(chr_arr.join());
// console.log(chr_arr.join(""));
// console.log(chr_arr.join("-"));

// console.log(chr_arr.toString());
// console.log(typeof chr_arr.toString());

/**
 * Slicing of the array
 * slicing dosnot change orginal array
 */

// let nums=[3,4,5,6,7,8,9,2,1]

// console.log(nums.slice(2));
// console.log(nums.slice(2,7));
// console.log(nums.slice(5,-1));
// console.log(nums.slice(-9,-2));
// console.log(nums.slice(2,-1));

/**
 * Splicing. which modifies the given array
*/

// let numbers=[1,2,3,4,5]
// let removed=numbers.splice(2,2,11,12,13)
// console.log(numbers);
// console.log(removed);

/**
 * Reverse a given array
*/

let nums=[3,4,5,6,7,8,9,2,1]
// nums.reverse()
// console.log(nums);

/**
 * Indexof
 */

// console.log(nums.indexOf(2));

/**
 * sorting the array
 */

nums.sort((a,b)=>a-b)
console.log(nums);