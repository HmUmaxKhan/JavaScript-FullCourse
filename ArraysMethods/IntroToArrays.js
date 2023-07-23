// In JavaScript, an array is a data structure used to store multiple values in a single variable. It is a versatile and widely used data structure that allows you to store elements of any data type, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed, which means the first element is at index 0, the second element at index 1, and so on.

// Refrence Data Types

// Arrays are the collection of elements 

// Ordered collection of elements

// Creating an Array

let fruits=["banana","apple","orange","mango","seashell","cheese"];

console.log(fruits);

// Only print the element at the index at 2
console.log(fruits[2]);
// Only print the element at the index at 3
console.log(fruits[3]);

// Mixed collection of elements

let mixed = [1,2,3,"string",null,undefined];
console.log(mixed);

// We can store arrays in the arrays.

// Changing the element at some index.

fruits[2]="chilli";
console.log(fruits);

// Refrence types are also called objects. That is why we called array as object.
// Check type of the array

console.log(typeof fruits);
console.log(typeof mixed);