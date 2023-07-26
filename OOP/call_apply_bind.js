// We use the call method to call the function but incase of method we must have to pass object name to declare that which this function we want to call

// For example

function sayHello(song,game) {
    console.log('Hello '+ this.name, song, game);
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

person1.func.call(person2);// Now we can call this function of 2nd person by calling it using person 1.

// We must have to pass object name.


// We can pass arguments to the function as following
person1.func.call(person2,"faslay", "cricket");

// Apply is also almost same but there is difference that we pass arguments in an array.

person1.func.apply(person1, ['faslay', 'cricket']);

// Bind is used to bind the function with specific values and we can use it later but binds does not take arguments

const myFunc = person2.func.bind(person1);

// Bind does not print anything it just binds the function.

// Now we can call bind function as

person2.func('faslay', 'cricket');

myFunc('love me like u do', 'football');