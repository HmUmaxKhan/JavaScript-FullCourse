// In this we will see the use of the object.create() method.

// Creating two objects.

const obj1  = {
   key1 : 'value1',
   key2 : 'value2'    
}

const obj2  = {
   key3 : 'value3',
   key4 : 'value4'    
}

// Now I want to access the obj1 property using obj2

console.log(obj2.key2);

// It is not possible to access yet.

// Now we will use the power of object.create() method
// It searches itself for that property if it is not found than it will search in obj1.

// Now we will see how to do it.

const obj3 = Object.create(obj1);

obj3.key3 = 'Value3';
obj3.key4 = 'Value4';

console.log(obj3);
console.log(obj3?.key3);
console.log(obj3?.key1); // Now it is working

// Now we will use this to create multiple methods without passing them into the function

// Create a object which contains the methods.

const methods = {
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


  // Now we will create methods without passing arguments

function createObject(name, age, skill, weight, freelancing) {
    let newObj = Object.create(methods)
    newObj.name = name;
    newObj.age = age;
    newObj.skill = skill;
    newObj.weight = weight;
    newObj.freelancing = freelancing;

    return newObj;
  }

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

  