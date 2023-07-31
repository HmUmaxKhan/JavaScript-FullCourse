// Set time out function provides functionality of asynchronous in javascript.
// It is done by browser
// It work with minimum time required to do a function.


// For examole

console.log("Script Started");

setTimeout(()=>{
    console.log("Script Completed");
},10000)

console.log("Script ended");

// Set time out goes to global execution context after time is completed and and moves to callback queue