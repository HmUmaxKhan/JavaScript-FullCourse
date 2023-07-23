// for loops in the array

let arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// In order to get the last element of an array, we need to -1 from the arr.length.
console.log("\nGet the last element of an array by length function");
console.log(arr1[arr1.length - 1]);

// In order to get all uppercase characters
console.log("\nUpper case characters");
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i].toUpperCase());
}