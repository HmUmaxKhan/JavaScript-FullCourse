// In programming, a primitive type (also known as a primitive data type) is a basic data type provided by a programming language as a building block to construct more complex data structures and perform operations. In most programming languages, primitive types are considered fundamental and are not composed of other data types. They typically represent simple, atomic values.

// In primitive types, if we change value of one thing than it does not effect other primitive types. For example,

let num1 = 1;
let num2 = num1;
console.log(num1);
console.log(num2);

num1++;

console.log("After incrementing num1");
console.log(num1);
console.log(num2);

// Refrence types
// Array

// In   Refrence types, if we change value of one thing than it will effect other primitive types. For example,
console.log("\nIn Refrence types");
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr1.push(4);

console.log("After adding 4 to arr1");
console.log(arr1);
console.log(arr2);


// Reasons

// Primitive types store in the stack and every element in the stack stores its own place. If we change num1 then num2 does not change.

// Refrence types stores in the heap and stack contain pointer of refrence types. Pointer is the address of the refrence in the heap. If we copy the arr2 from arr1 then arr2 contain same address in the stack. If we add 4 to arr1 then arr2 pointer points the same address in the heap. It means that there is only one array in the heap and two pointers in the stack named arr1 and arr2. It is all because of same address in the stack.