// fill method is the method which fills the array with the only same value.

// value, start and end

// For example,

const value = new Array(10).fill(-1);

console.log(value);

// Now Applying fill method to exisisting array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.fill(-1,3,7);

console.log(arr);