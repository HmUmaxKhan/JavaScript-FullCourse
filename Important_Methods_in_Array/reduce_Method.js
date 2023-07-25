// It is the most useful method in react

// It is used to takes an array of numbers and returns a single value by performing some calculations on it

// It is widely used for adding shopping cart items.

// Creating an array

const numbers = [1, 2, 3, 4, 5];

// Applying reduce method

const sum = numbers.reduce((accumulator,currentValue) => { 
      
    return accumulator + currentValue;
})

console.log(sum);


// it takes two parameters 

// First parameter is the return value since from the starting it has not any return value so it takes index 0 as a return value and then takes return value in each iteration.

// Second parameter is the current value of an array. Since 1st parameter takes index 0 as a starting value so current value starts at index 1.

// [1,2,3,4,5]

// accumulator ,  currentValue , return
//     1               2            3
//     3               3            6
//     6               4            10
//     10              5            15


// We can also pass initial value to accumulator by writing the initial value at the end of the callback function.



const sum1 = numbers.reduce((accumulator,currentValue) => { 
      
    return accumulator + currentValue;
}, 0 // Passing initial value to accumulator
)

console.log(sum1);


// Now the process becomes,

// [1,2,3,4,5]

// accumulator ,  currentValue , return
//     0               1            1
//     1               2            3
//     3               3            6
//     6               4            10
//     10              5            15


// Now we dealing with shopping cart problem

const items = 
[
    {productId : 1 , price : 100034},
    {productId : 2 , price : 100345},
    {productId : 3 , price : 100234},
    {productId : 4 , price : 100324},
    {productId : 5 , price : 345324},
]

const ShoppingCart = items.reduce((startPrice , {price})=>{
    return price + startPrice;
},0)

console.log(ShoppingCart);


// Keep in mind that first value must be accumulator and  second value must be the current value.


