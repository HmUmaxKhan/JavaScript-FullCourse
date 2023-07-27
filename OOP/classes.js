// JS is not purely OOP but we can also use classes in it becaause of ES6 support.

class CreateObject{

    constructor(name, age, skill, weight, freelancing) { // Constructor
        this.name = name;
        this.age = age;
        this.skill = skill;
        this.weight = weight;
        this.freelancing = freelancing;
      }
    
       
        expert () {
          console.log("I have " + this.skill + "  skill");
        }
      
        freelance () {
          console.log(
            "I am creating an account in " + this.freelancing + " to tet my skills"
          );
        }
    
        about() {
          console.log(
            "My name is " + this.name + " and my age is " + this.age 
          );
        }
      ;
    
}

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
