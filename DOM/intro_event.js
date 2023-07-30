// Introduction to events.

// Events are the most important functionality 
// They can be used in three ways.

// Use MDN events Documentation

// 1. Direct in HTML
// 2. In Js File
// 3. Direct in JS File as addEventListner

// 3rd way is the best way to implement its functionality


// For example

const button = document.querySelector('.btn');
// console.log(button);

button.addEventListener("click", function(){
       alert('clicked');
})