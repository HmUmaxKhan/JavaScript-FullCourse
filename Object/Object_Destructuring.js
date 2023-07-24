// Object Destructuring

const favrt = {
  hollywood: "Pirates of Carribean",
  Bollywood: "Drisshyaam",
};

console.log("\nObject Destructuring\n");
const { hollywood, Bollywood } = favrt;
console.log(hollywood);
console.log(Bollywood);

// In Object destructuring , values stores in the keys when they are destructured

//////////////////////////////////////////////////////////////////////////////////////////

// In order to store values in custom variables, we need to

console.log("\nObject Destructuring using custom variables\n");
const { hollywood: val1, Bollywood: val2 } = favrt;

console.log(val1);
console.log(val2);
