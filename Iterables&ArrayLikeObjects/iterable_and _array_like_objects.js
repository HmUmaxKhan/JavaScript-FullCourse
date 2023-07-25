// Iterables

// Iterables are thoes in which we can apply for of loop

// Arrays and Strings. 

// Objects are not iterables because we make them array by using object.keys() and then apply for of loop

// Stringd

const name = "Umar";
for (let n of name){
    console.log(n);
}

// Array

const names = ["Umar", "Moeez", "Ali"];
for (let n of names){
    console.log(n);
}


///////////////////////////////////////////////////////////////////////////////////////////


// Array like objects

// Array like objects are those which have properties of length
// and we can acess them through index


const name1 = "Umar";
console.log(name1.length);
console.log(name1[3]);

// Array

const names1 = ["Umar", "Moeez", "Ali"];
console.log(names1.length);
console.log(names1[1]);