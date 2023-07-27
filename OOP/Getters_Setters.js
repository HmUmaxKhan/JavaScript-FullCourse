// We can use get to make any method a property.

// For example

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const peter = new Person('Peter', 30);
// peter.info();  Cause error

peter.info;

// We use setters for the methods and we can use to change the value in the methods but value of the constructor remains same as given in the exampple.


class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
    set reqInfo(value) {
            const [name1 , age] = value.split(" ");
            this.name = name1;
            this.age = age;
        }
}

const peter1 = new Teacher('Peter', 30);
peter1.reqInfo = "Peter "+45;
peter1.info;

