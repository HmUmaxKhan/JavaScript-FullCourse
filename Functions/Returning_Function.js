// We can also return a  function using a function.

// For example,

const func = () => {
    console.log("\nFunction 1\n");

    return  () => {
        console.log("\nFunction 2");
    }

    
}

const ans = func();

ans();


// To use the returned function, we need to store main function in the variable and then called it. Due to this we can use both of these functions.