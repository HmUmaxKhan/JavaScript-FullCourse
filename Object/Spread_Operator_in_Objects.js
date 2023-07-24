// Applying Spread operators in the objects

// Creating object1 and object2

const object1 = {
    key1: 'value1',
    key2: 'value2'
}

const object2 = {
    key3: 'value3',
    key4: 'value4'
}

// Applying spread operator

const object3 = {
   ...object1,
   ...object2
}
console.log("\nSpread operator\n");
console.log(object3)

// Adding extra properties

console.log("\nAdding properties\n");

const object4 = {
    ...object1,
    ...object2,
    key5: 'value5',
    key6: 'value6'
}

console.log(object4);