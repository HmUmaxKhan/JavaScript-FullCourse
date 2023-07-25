// It is widely used loop for arrays iterations
// Syntax is below

/* 
   arrayname.forEach(function(any Variable name){
    console.log(any variable name);
   })
*/

// Lets make an array of fruits


var fruits = ["apple", "banana", "mango", "orange"];

// fruits.forEach(function(fruit){
//     console.log(fruit.toUpperCase());
// });

fruits.forEach( fruit =>{
    console.log(fruit.toUpperCase());
});