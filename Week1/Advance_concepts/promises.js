// Promises


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