// Promises

/*
const simranPromise=new Promise((resolve, reject)=>{
    let paranetDecision=true

    if(paranetDecision){
        resolve("Prepare for shaadi")
    }else{
        reject("Papa find IAS: Sorry...")
    }
});

simranPromise.then((msg)=>{
    console.log("Simran Message : ",msg);
}).catch((msg)=>{
    console.log("Simran Message : ",msg);

}).finally(()=>console.log("Clarity"))

*/
// to handle all promises
//There is a function all promises

// const f1promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5){
//             resolve("Friend1> Hey I am in for Goa")
//         }else{
//             reject("Friend1> Sorry: I can't Go to Goa")
//         }
//     },3000)
// })

// const f2promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5){
//             resolve("Friend2> Hey I am in for Goa")
//         }else{
//             reject("Friend2> Sorry: My family is going out of valley")
//         }
//     },2000)
// })
// const f3promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5){
//             resolve("Friend3> Hey I am in for Goa")
//         }else{
//             reject("Friend3> Sorry:I have no leave on job")
//         }
//     },2000)
// })

// Promise.all([f1promise,f2promise,f3promise]).then((msg)=>{
//     console.log(msg);
//     console.log("We are in Goa.");
// }).catch((msg)=>{
//     console.log(msg);
//     console.log("Stop: We are Not Going Goa");

// })

// console.log(Math.random()>0.5);


//Promises.any()

const gfpromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF1> Hey I am in for Dinner")
        }else{
            reject("GF1> Sorry: I can't Go to Dinner")
        }
    },3000)
})
const gf2promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF2> Hey I am in for Dinner")
        }else{
            reject("GF2> Sorry: I can't Go to Dinner")
        }
    },3000)
})
const gf3promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF3> Hey I am in for Dinner")
        }else{
            reject("GF3> Sorry: I can't Go to Dinner")
        }
    },3000)
})


Promise.any([gf2promise,gfpromise,gf3promise]).then(result=>{
    console.log(result);
    console.log("My valentine day is sorted");
}).catch(mag=>{
    console.log(mag);
    console.log("My valentine day is Boring");

})