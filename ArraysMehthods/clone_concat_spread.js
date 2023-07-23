
let array1 = [1, 2, 3, 4];
let array2 = array1;
console.log("True shows that array1 and array2 is one array");
console.log(array1===array2);

//Clonning an array

console.log("\nClonning an array");

/////////////////////////////////////////////////////////////////////////////////////////


console.log("\nWay 1 Slicing");
// Slice method gives new array starting from the index given in the slice function
// Slice method starts from the beginning 0 index.
let array3 = array1.slice(0);
console.log("\nFalse shows that array1 and array3 is not one array");
console.log(array1===array3);

array3.push(5);
console.log("After pushing 5 element in array3");
console.log(array1);
console.log(array3);

console.log("\nAdding new elements to array usisng slicing method");
let array3New = array1.slice(0).concat(6,7,8,9);
console.log(array3New);


/////////////////////////////////////////////////////////////////////////////////////////



// Way 2
// We also use concatenation for clonning of an array.
console.log("\n\nWAY 2 Concatenation")

let array4 = [].concat(array1);
console.log("\nFalse shows that array1 and array4 is not one array");
console.log(array1===array4);

array4.push(5);
console.log("After pushing 5 element in array4");
console.log(array1);
console.log(array4);

console.log("\nAdding new elements to array usisng concatinating method");
let array4New = [].concat(array1,[6,7,8,9]);
console.log(array4New);



///////////////////////////////////////////////////////////////////////////////////////



// Way 3
// e use spread operator also for clonning
console.log("\n\nWAY 3 Spread Operator");

let array5 = [...array1];
console.log("\nFalse shows that array1 and array5 is not one array");
console.log(array1===array5);

array5.push(5);
console.log("After pushing 5 element in array5");
console.log(array1);
console.log(array5);

console.log("\nAdding new elements to array usisng spreadoperating method");
let array5New = [...array1,6,7,8,9];
console.log(array5New);

// Extra and Imp Notes

// Slice method is fastest but spread operator is most convenient method and is most widely used.
