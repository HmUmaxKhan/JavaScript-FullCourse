// SetInterval is a function which perform tasks after some time intervals.

// For example

// console.log("Script Start");

// setInterval(() => {
//     console.log("I am starving...");
// }, 5000);

// console.log("Script End");

// setTimeout and setInterval contains id which will be used to to remove that function

// For example

console.log("Script Start");

const id = setInterval(() => {
    console.log("I am starving...");
}, 5000);

console.log("setInterval id", id);
console.log("Script End");

clearInterval(id);