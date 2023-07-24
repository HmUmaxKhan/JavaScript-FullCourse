
let fruits =["apple", "orange", "mango", "grapes"];
console.log(fruits);

// push is method that push or add an element in the last position of array.

fruits.push("pineapple");
console.log(fruits);

//pop is method that removes the element from the last position of array.

fruits.pop();
console.log(fruits);

// pop method also returns the element that is removed from the last position of array

let popFruit = fruits.pop();
console.log(popFruit);

//shift is method that removes the element from the first position of array. It returns the element that is removed from the array.

fruits.shift();
console.log(fruits);

// unshift is method that adds an element in the first position of array.

fruits.unshift("banana");
console.log(fruits);

// push and pop is method are faster than unshift and shift because push and pop add and remove element from the last of the array.

