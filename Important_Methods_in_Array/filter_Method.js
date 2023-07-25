// Filter method takes out the true values from the callback function and returns a new array.

// Callback function for filter method must return a boolean value.

// Creating an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter method.

const EvenNumbers = numbers.filter(even => {
    return even % 2 === 0; // Returns an array containing even numbers
})

console.log(EvenNumbers);

