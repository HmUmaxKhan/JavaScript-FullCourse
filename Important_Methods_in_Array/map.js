// Map is the method that iterates through the array and perform actions on it and returns the result in a new array.

// We should return a  callback function instead of simply just console.log because if we do console.log then we get an array filled with undefined values.

// Create an array of objects

const persons =
[
{
  name: "John",
  age: 30,
  hobbies: ["football", "basketball", "golf"],
},
{
  name: "Alice",
  age: 30,
  hobbies: ["football", "basketball", "golf"],
},
{
  name: "Jhonny",
  age: 30,
  hobbies: ["football", "basketball", "golf"],
}
]

const personName = persons.map(person=> {
    return person.name;
})

console.log("\n",personName);



