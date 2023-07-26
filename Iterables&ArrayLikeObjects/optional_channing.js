// Optional chaining is used to remove uncaught error and introduce undefined behavior

// For example

const person = {
    name: 'John',
    age: 30,
    // extrainfo: {height : '180cm', weight : '60kg'}
}

// console.log(person.extrainfo.weight); This output gives the uncaught error if we wnat to change this error message into undefined.

const person1 = {
    name: 'Alice',
    age: 34,
    //  extrainfo: {height : '180cm', weight : '60kg'}
}
console.log(person1?.name);
console.log(person1?.extrainfo?.height);