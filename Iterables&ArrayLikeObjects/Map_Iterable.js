// Map is just like objects

// Does not support duplicate key

// Map is iterable

// Store values in key value pairs

//  Object has two types of keys

// 1. String            2. Symbol

// Map has any type of key even array itself be key in map


// Creating Map

const persons = new Map();

persons.set('name','Ali');
persons.set('age',8);
persons.set(["hobby","favrt gaame"],'Cricket');

console.log(persons);

//In order to get the specific key value pair we use get()

console.log(persons.get('name'));
console.log(persons.get('age'));
console.log(persons.get((["hobby","favrt gaame"])));

// In order to print all the keys

console.log(persons.keys());

// Iterable

for(let key of persons){
     // In this each key var is array so we can get values by destructuring it.
     console.log(key);
}

// We can acees the values by index approach or destructuring approach

// Index
for(let key of persons){
    console.log(key[1]);
}

// Destructuring

for(let [key,value] of persons){
    console.log(value);
}

//  Real World

// In order to store more information about the person

// For example

const person = {
    name: 'Ali',
    age: 8,
    hobby: 'Cricket'
}


const extraInfo = new Map();

extraInfo.set(person,{
    height: 180,
    weight: '40kg'
});

console.log(extraInfo);

// In order to get extra  information

console.log(extraInfo.get(person).height)
