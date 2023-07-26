// Set is just like array but with exceptions

// Set is iterable

// It does not store duplicate items

// It can store any kind of data types and also can store arrays

// Set items can not be accessedby index

// Order is not defined

// Creating Set

const fruits = new Set(["Mango", "Orange"]);

 fruits.add(1);
 fruits.add(2);
 fruits.add(3);
 fruits.add(4);

 console.log(fruits);

 // To check whether the item is present or not

if(fruits.has("Mango")){
    console.log("Present");
}

// Iterable

for(let fruit of fruits){
    console.log(fruit);
}

// To get unique value from the array

const arr = [1,2,3,3,4,5,5,6,2,1];

const unique = new Set(arr);

console.log(unique);