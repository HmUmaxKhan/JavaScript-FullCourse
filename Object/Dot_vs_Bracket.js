// Creating a ner object

const person = {
    name: 'John',
    age: 25,
    hobbies: ['Music','Gaming', 'Computer']
}

// Bracket is used to


// 1. Accessing the key having space in it. For example

const person1 = {
    name: 'John',
    age: 25,
    "person hobbies": ['Music','Gaming', 'Computer']
}

console.log(person1['person hobbies'])

// 2. Making a variable and store key init and used it to add key value pair in the object. For example,

const key = 'email';

person1[key] = '123@example.com'

console.log(person1)