// In this file we create a function that creates multiple objects by using that function.

// Steps1 create an empty object

// Steps2 create key value pairs

// Steps3 return object.


// Now we will create that function.

function createObject(name, age, skill, weight, freelancing) {
  let newObj = {}
  newObj.name = name;
  newObj.age = age;
  newObj.skill = skill;
  newObj.weight = weight;
  newObj.freelancing = freelancing;

  newObj.about = function () {
    console.log("I have "+ this.skill+ "  skill");
  }

  newObj.freelance = function () {
    console.log("I am creating an account in " + this.freelancing +" to tet my skills");
  }
  return newObj;
}

// Now we will create objects using the current function.

let john = createObject("John", 30, "Javascript", 70, "freelancing");
let mary = createObject("Mary", 25, "Javascript", 60, "upwork");
let jane = createObject("Jane", 20, "Javascript", 50, "fiverr");

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