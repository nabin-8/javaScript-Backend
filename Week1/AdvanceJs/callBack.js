// The function which passed as an argument is called callback function

// const { log } = require("async");

// function greet(name, callback){
//     const greeting="Hello "+name
//     callback(greeting)
// }

// function displayGreeting(message){
//     console.log(message);
// }

// greet("Nabin", displayGreeting)

// Callback hell | pyramid of doom

getUser(function(user){
        getPosts(user.id, function(post){
            displayUserInfopost(user, posts, function(){
                console.log("user info and post successfully displayed")
            })
        })
})