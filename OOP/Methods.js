// Methods are functions which are made inside the object.

// For example

const person  = {
    name: 'John',
    age: 25,
    sayHello: function() {
        console.log('Hello '+ this.name);
    }
}

// We should call method not console.log it

person.sayHello();

// We can also describe function outside object and make it method

function sayHello() {
    console.log('Hello '+ this.name);
}

const person1  = {
    name: 'John',
    age: 25,
    func: sayHello
    
}

const person2 = {
    name: 'Alice',
    age: 30,
    func: sayHello
}

// This function calls the value of the object as it is called.

person1.func();
person2.func();

