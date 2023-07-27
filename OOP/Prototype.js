// Js' function has two properties.

// function is made ---> function + object

// That extra objrct is called prototype

// We can also use that prototype to store key value pairs

// For example

function obj(){
    console.log(hello);
}

obj.prototype = {
    name: 'Umar'
}

// Now we can call that prototype

console.log(obj.prototype.name)

// We can also introduce methods in that prototype

obj.prototype.sayHello = function(){
    console.log(this.name);
}

obj.prototype.sayHello();

// Now we modify our existing code using prototype

// Create a object which contains the methods.


  // Now we will create methods without passing arguments

function createObject(name, age, skill, weight, freelancing) {
    let newObj = Object.create(createObject.prototype)
    newObj.name = name;
    newObj.age = age;
    newObj.skill = skill;
    newObj.weight = weight;
    newObj.freelancing = freelancing;

    return newObj;
  }

  createObject.prototype = {
    expert: function () {
      console.log("I have " + this.skill + "  skill");
    },
  
    freelance: function () {
      console.log(
        "I am creating an account in " + this.freelancing + " to tet my skills"
      );
    },

    about: function () {
      console.log(
        "My name is " + this.name + " and my age is " + this.age 
      );
    },
  };

  // Now we will create objects using the current function.

let john = createObject("John", 30, "Javascript", 70, "freelancing");
let mary = createObject("Mary", 25, "C++", 60, "upwork");
let jane = createObject("Jane", 20, "Python", 50, "fiverr");

// Now we will print the objects.

console.log(john);
console.log(mary);
console.log(jane);

// Now we will check the methods

john?.about();
john?.expert();
john?.freelance();

mary?.about();
mary?.expert();
mary?.freelance();

jane?.about();
jane?.expert();
jane?.freelance();

  