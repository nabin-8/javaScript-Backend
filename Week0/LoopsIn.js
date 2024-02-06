var hello="Hello World!"

// for (let index = 0; index <10; index++) {
//    console.log(index,hello);
// }

//while loop

let i=0;
// while (i<10) {
//     console.log(i,hello);
//     i++
// }

// do{
//     console.log(i,hello);
//     i++
// } while (i<10)


//continue

for (let index = 0; index < 20; index++) {
   if(index%2 !=0){
        continue
   }else{
    console.log(index);
   }
}

//break

for (let index = 0; index < 20; index++) {
    if(index==6){
         break
    }else{
        console.log("Accept: ",index);
    }
 }