let add =(a,b)=>{
    return a+b
}

//to convert into module

let prod=(a,b)=>{
    return a*b
}

// module.exports=add

//another way to export module
// module.exports={
//     add:add,
//     prod:prod
// }
//another way to export module
exports.dev=(a,b)=>{
    return a/b
}