// To handle Exception we have try and catch

// try {
//     let obj=undefined
//     console.log(obj.name);

// } catch (error) {
//     console.log("Exception handled",error);   
// }

// if we fixed it and run
// try {
//     let obj={
//         name:"Nabin"
//     }
//     console.log(obj.name);

// } catch (error) {
//     console.log("Exception handled",error);   
// }
//Output will be
/**
 * JS:node exceptionHandling.js
Nabin
*/

// we have finally also it will always run if it is error or not
try {
    let obj={
        name:"Nabin"
    }
    console.log(obj.name);

} catch (error) {
    console.log("Exception handled",error);   
}finally{
    console.log("Its normal error");
}