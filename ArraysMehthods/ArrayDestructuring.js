// array destructuring

// Destructuring the array in JavaScript simply means extracting multiple values from data stored in arrays.

// We can store single or multiple values into different variables and we can also cahnge them

// Creating Array
const fruits = ["mango", "banana", "orange","grapes"];

/////////////////////////////////////////////////////////////////////////////////////


// Destructuring the array in JavaScript
const [apple, banana, orange] = fruits;

console.log("\n",apple, banana, orange);



/////////////////////////////////////////////////////////////////////////////////////



// If we have four values and we want to extract only 1st and 3rd values.

const [mango, , , grapes] = fruits;

console.log("\n",mango, grapes);



/////////////////////////////////////////////////////////////////////////////////////




// If we have two values in array and we want to extract 3 values from it.

const arr = [1,2];

const [a, b, c] = arr;

console.log("\n",a, b, c);


/////////////////////////////////////////////////////////////////////////////////////



// If we want to extract an array from the last two elements of an array.

// METHOD 1
console.log("\nMETHOD:1 (Slicing Method)");

const arr2 = fruits.slice(2);

console.log("\n",arr2);


// METHOD 2 Using spread operating method
console.log("\nMETHOD:2 (Spread Operating Method)");

const [d,e,...arr3] = fruits;
console.log("\n",d,e);
console.log("\n",arr3);

