// This method delete and insert items in an array

// start, delete(how many) and insert(write value)

//          !!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!!!!! 

// It changes the original array. To avoid this we use clonning

const items = ["'item1'", "'item2'", "'item3"];

///////////////////////////////////////////////////////////////////////////////////////////////////

// Delete


//  items.splice(1,1);

// console.log(items);


///////////////////////////////////////////////////////////////////////////////////////////////////


// Insert

// items.splice(1,0,"inserted item");

// console.log(items);

///////////////////////////////////////////////////////////////////////////////////////////////////


// Isert and Delete


items.splice(1,2,"inserted item1","inserted item2");

console.log(items);