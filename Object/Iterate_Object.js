const person = {
    name: 'John',
        age: 30,
        hobbies: ['football','games','Music']
}

// There two ways to iterate the objects

// 1. For in loop, For example,

// If we wnat to access the values , we have to use bracket notation because the variable can be used to access values in the object using bracket notation.

console.log("\n\nFor in loop\n");

for (let key in person) {
    console.log(person[key])
}

// In order to get the key value pairs, we need to

for (let key in person)
{
    console.log(key + ":" + person[key])
}


//////////////////////////////////////////////////////////////////////////////////////////


// 2. Object.keys 

// It gives back the array

console.log("\n\nObject.keys");

console.log("\n",Object.keys(person));
console.log(Array.isArray(Object.keys(person)));

// Now we can use object.keys to iterate  object using for of loop


console.log("\n");
for (let key of Object.keys(person)){
    console.log(person[key])
}
