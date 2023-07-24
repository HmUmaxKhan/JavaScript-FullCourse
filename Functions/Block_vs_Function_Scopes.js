// block scope vs function scope

// let and const are block scope

// var is function scope



//////////////////////////////////////////////////////////////////////////////////////////



// Block is everything that is inside a curly braces or {}.

// For example,

{
    let x = 10;
    console.log(x);
}

// console.log(x);

{
    const x = 14;
    console.log(x);
}

// console.log(x);


const myFunc = ()=>{
    if (true){
        let z = "Umar";
        console.log(z);  
    }
    // console.log(z);
}

myFunc();

//////////////////////////////////////////////////////////////////////////////////////////


// Function is everything that is inside this file.

// For Example,

var y = "Hello world!";

{
    console.log(y);
}

{
    var y = "My Computer!";
}

console.log(y);

const myFunc1 = ()=>{
    if (true){
        var z = "Umar";
        console.log(z);  
    }
     console.log(z);
}

myFunc1();