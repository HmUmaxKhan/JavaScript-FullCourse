// Following are the functions' expressions

 const output = function() {
    console.log("\nIt only outputs the console.log");
  }
  
  const returnVal = function () {
    return 2 + 2;
  }
  
  const parameters = function (num1, num2) {
    return num1 * num2;
  }
  
  const arr = function (arr1, target) {
    for (let arr of arr1) {
      if (arr === target) {
        return true;
      }
    }
  }

  console.log("\nNow Calling the functions");

  output();
  
  console.log(returnVal());
  
  console.log(parameters(4, 2));
  
  console.log(arr([1, 2, 3], 2));