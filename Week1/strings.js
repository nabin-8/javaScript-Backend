//Strings

/**
 * Strings is a sequence of character
 */

let name='Nabin'
let fname='Nabin'
let lastneme='Acharya'
let myname="Nabin"
let myFullName=`Nabin Acharya`

// console.log(name);
// console.log(myname);
// console.log(myFullName);

// for (const i of myFullName) {
    //     console.log(i);
    // }
    
    
// Accessing character based on index
    // console.log(myFullName[6]);
    // console.log(myFullName[22]);

    // name[6]="H"
    // console.log(name);
    //string is immutable
    // name="Santosh"
    // console.log(name);

    /**
     * Why almost every programming language string is immutable/ not changebel?
     *  1. string can be used to store sensitive information. password is stored in the form of string.
     *  2. Handle easily
     *  3. less storage
     */

    //finding the length of the string
    // console.log(myname.length);
    // console.log(myFullName.length);
    // // space also counted

    // //concatinating string
    // let full_name=name.concat(" ",lastneme)
    // console.log(full_name);

    // //another way +
    // console.log(fname+ " " +lastneme);


    //Convert that into upper case
    // console.log(myFullName.toUpperCase());
    // console.log(myFullName.toLocaleLowerCase());

    // //Character at any index str[i]

    // console.log(myFullName[8]);

    //slicing
    // console.log(myFullName);
    // console.log(myFullName.slice(2));
    // console.log(myFullName.slice(2,5));
    // console.log(myFullName.slice(-5));
    // console.log(myFullName.slice(-5,-1));


    // index of
    // console.log(myFullName.indexOf("A"));
    // //if it is not found it returns -1
    // console.log(myFullName.indexOf("K"));

    //Trim to remove string
    // let word=" Nabin "
    // console.log(word);
    // console.log(word.trim());


    //split

    console.log(myFullName.split(" "));