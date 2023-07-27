// Inheritance is the most imp in OOP.

// We can use inheritance using extends key word in JS

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

    class Teacher extends Person {

    }

    const Ali = new Teacher("Ali",27);

    console.log(Ali);
    Ali.info();


    // Now we use super keyword.

    class Student extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
        info() {
                    console.log(`${this.name} is ${this.age} years old and ${this.subject} is favourite`);
                }
        sub() {
            console.log(`${this.name} is ${this.age} years old and ${this.subject}`);
        }
    }

    const Ali1 = new Student("Ali",27,"Math");
    console.log(Ali1);
    Ali1.info();
    Ali1.sub();

    // Sub class Student find info method for object 
    //1st look into its class
    // Not found then go to Parent Class