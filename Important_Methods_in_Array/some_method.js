// This method returns a boolean value and accepts boolean functions.

// If all values are false then it returns false otherwise true

// For example

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.some(number=>number%2==0);

console.log(even);