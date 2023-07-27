// We use new key word for following characteristics.

// 1. It makes an empty object itself {}
// 2. It takes this to right object
// 3. It returns object it self

// We denote functions names with capital letters  to recognise that for that functions we can use new key word.

// Now we will modify our existing code

// Create a object which contains the methods.


  function CreateObject(name, age, skill, weight, freelancing) {
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.weight = weight;
    this.freelancing = freelancing;
  }

  CreateObject.prototype = {
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

let john = new CreateObject("John", 30, "Javascript", 70, "freelancing");
let mary = new CreateObject("Mary", 25, "C++", 60, "upwork");
let jane = new CreateObject("Jane", 20, "Python", 50, "fiverr");

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
