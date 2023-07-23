
const arrs = ["a", "b", "c", "d", "e"];
console.log(arrs);

// It gives the elements of the array.

console.log("\nNow creating for of loop")

for(let arr of arrs) {
    console.log(arr);
}

// For in loops, it gives indexes of the elements.
console.log("\n\nNow creating for in loop")

for(let index in arrs) {
    console.log(index);
}

// In order to get the elements of the array in for in loops
console.log("\nGetting the elements of the array in for in loop");
for(let index in arrs) {
    console.log(arrs[index]);
}

// Extra Notes 
// It is advisable to make plural name for array ,therefore we can use sigular notation in loops.