// What is first order function
    // => The function which pass parameter in primitive or object and its return type is primitive or object is fof
// Example:

// Higher order hunction
    // => If function pass parameter in both primitive or object and it returns primitive or object and have it also can pass function as a parameter is hof
    // operationFn is function and operation is Higher order hunction
    function operation(operationFn, a,b){

        return operationFn(a,b)
    }

    //how to work on it

    function add(a,b){
        return a+b
    }

    let result=operation(add,5,6)
    console.log(result);

    function getGreenMethod(){
        return function(){
            console.log("Hello Nabin");
        }
    }

  let greenFn=  getGreenMethod()
  
  console.log( typeof greenFn);
  greenFn()

  /*Output
  
    11
    function
    Hello Nabin
   */