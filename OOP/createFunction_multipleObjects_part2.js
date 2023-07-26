// In this  we will take out methods from the function so that hundreds of methods will not create. We will only pass refrence of methods.

// Now we will start

// Create aobject which contains the methods.

const methods = {
  about: function () {
    console.log("I have " + this.skill + "  skill");
  },

  freelance: function () {
    console.log(
      "I am creating an account in " + this.freelancing + " to tet my skills"
    );
  },
};

// Now we will pass the methods to the function

function createObject(name, age, skill, weight, freelancing) {
    let newObj = {}
    newObj.name = name;
    newObj.age = age;
    newObj.skill = skill;
    newObj.weight = weight;
    newObj.freelancing = freelancing;
  
    newObj.about = methods.about;
  
    newObj.freelance = methods.freelance;

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
john?.freelance();

mary?.about();
mary?.freelance();

jane?.about();
jane?.freelance();
