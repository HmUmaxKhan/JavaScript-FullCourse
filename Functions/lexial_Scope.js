// In other words, lexical scope refers to the ability of a function scope to access variables from the parent scope. When there is lexical scope, the innermost, inner and outermost functions may access all variables from their parent scopes all the way up to the global scope.

// Example 1

console.log("\nExample: 1\n");

function App() {

    const myVar = "value 1";
    const myFunc = ()=>{
        const myVar = "value 3"
        console.log(myVar);
    } 

    console.log(myVar);
    myFunc();
}

App();


// Example 2

console.log("\nExample: 2\n");

function App1() {

    const myVar = "value 1";
    const myFunc = ()=>{
        // const myVar = "value 3"
        console.log(myVar);
    } 

    console.log(myVar);
    myFunc();
}

App1();


// Example 3

const myVar = "Value 0";

console.log("\nExample: 2\n");

function App3() {

    // const myVar = "value 1";
    const myFunc = ()=>{
        // const myVar = "value 3"
        console.log(myVar);
    } 

    console.log(myVar);
    myFunc();
}

App3();
