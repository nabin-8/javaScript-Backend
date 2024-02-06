var num=20

// if
// if(num %2==0){
//     console.log("Even Number");
// }

// console.log("after if");

// if-else

// if(num %2==0){
//     console.log("Even Number");
// }else{
//     console.log("after if");
// }

//ternary operator

// num%2==0?console.log("Even Number"):console.log("after if")


//nested if-else

var a=2
if(a>=0){
    if(a>5){
        console.log("a is greater then 0 ans 5");
    }else{
        console.log("a is greater then 0 but less than 5");
    }
}else{
    console.log("a is less than 0");
}

// switch

var frute ="Apple"

switch (frute) {
    case "Mango":
        console.log("Its is Mango");
        break;
    case "Apple":
        console.log("Its is Apple");
        break;
        
    default:
        console.log("Its is Not Mango or Apple");
        break;
}