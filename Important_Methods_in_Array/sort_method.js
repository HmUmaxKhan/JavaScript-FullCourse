// Sort method is a method is a method that sorts according to assci characters.

// For Strings,

const names = ['UMAR', 'ali','Moeez', 'Hanzala'];

console.log(names.sort());

// Capital words are sorted 1st.

//////////////////////////////////////////////////////////////////////////////////////////


// For Numbers,

const numbers = [123, 221, 134, 40, 500, 1000];

console.log(numbers.sort());

// It is sorting wrong because sort method deals numbers in array as strings and strings are sorted in order of ascii characters.


///////////////////////////////////////////////////////////////////////////////////////////////////


// In order to sort numbers in correct orders we use the following algorithm.

const numbers1 = [123, 221, 134, 40, 500, 1000];

console.log(numbers1.sort((a, b) => a - b)); // Sorting numbers in assending order

// a-b ----> +ve -----> b,a sort
// a-b ----> -ve -----> a,b sort

console.log(numbers.sort((a, b) => b - a )); // For desending Order we replace a - b to b - a


/////////////////////////////////////////////////////////////////////////////////////////////////////


// Real World Problems include sorting according to price or name of products.


// For example,

const items = 
[
    {productId : 1 , price : 100034},
    {productId : 2 , price : 100345},
    {productId : 3 , price : 100234},
    {productId : 4 , price : 100324},
    {productId : 5 , price : 345324},
]

console.log(items.sort((a, b) => a.price - b.price));


// !!!!!!!!!!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!!!!!!!!


// Sort method does not give a new array but it changes the existing array. In order to get new array we use clonnig.



const items1 = 
[
    {productId : 1 , price : 34},
    {productId : 2 , price : 45},
    {productId : 3 , price : 23},
    {productId : 4 , price : 24},
    {productId : 5 , price : 53},
]


const lowtTohigh = [...items1].sort((a,b) => a.price - b.price);

console.log("\nLow to High\n");

console.log(lowtTohigh);


const hightTolow = [...items1].sort((a,b) => b.price - a.price);

console.log("\nHigh to Low\n");

console.log(hightTolow);


console.log("\nOriginal Arrya\n");

console.log(items1);


