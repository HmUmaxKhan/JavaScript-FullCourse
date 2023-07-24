// Following are some examples of different types of functions

function output() {
  console.log("\nIt only outputs the console.log");
}

function returnVal() {
  return 2 + 2;
}

function parameters(num1, num2) {
  return num1 * num2;
}

function arr(arr1, target) {
  for (let arr of arr1) {
    if (arr === target) {
      return true;
    }
  }
}


// Functions can have only one return value

// Functions are workers that return their work


console.log("\nNow Calling the functions");

output();

console.log(returnVal());

console.log(parameters(4, 2));

console.log(arr([1, 2, 3], 2));