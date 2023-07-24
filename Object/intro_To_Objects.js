//Objects

// Arrays are good  but arenot sufficient for real world problems

// Objects store key value pairs

// Objects dont have indexes

// Object is also a refrence type

const person = {
    name: 'John',// name is key and john is value
    age: 30
}

// It is also called object literal

// To get the name of the person, we need to

console.log("\n",person.name);

// To store array in the object, we need to

const person2 = {
    name: 'John',// name is key and john is value
    age: 30,
    hobbies: ['football','basketball','Music']
}

console.log("\n",person2.hobbies);


// Adding key value pairs to the object separtely

person2.gender = 'Male'
console.log("\n",person2);

// Accessing the value from the object by square brackets

console.log("\n",person2['hobbies']);


// To delete the key value pair from the object, we need to

delete person2['gender']
console.log("\n",person2);