// find method is used to find the specific value from the array and return that value not the array

// If array has two values with the same true value as in the callback function mentioned then t returns the only first value.

// For example

const names = ['dog','cat','lion','duck'];

const three = names.find(name=>name.length===3);

console.log(three);


/////////////////////////////////////////////////////////////////////////////////////////////////////

// Real world problem

// Every user has specific id if we want to get only that person only that person not the array we use the find method.


const items = 
[
    {productId : 1 , productName : "7up", price : 100034},
    {productId : 2 , productName : "Coke", price : 100345},
    {productId : 3 , productName : "Pepsi", price : 100234},
    {productId : 4 , productName : "Marinda", price : 100324},
    {productId : 5 , productName : "Fanta", price : 345324},
]

const ans = items.find(item=>item.productId===4);

console.log(ans)