// Objects inside arrays

const users = [
    { name: 'Umar', id:1},
    { name: 'Ali', id:2},
    { name: 'Moeez', id:3}
]

console.log("\n",users);


/////////////////////////////////////////////////////////////////////////////////////////


// Iterating through the array containing objects


console.log("\nIterate through the users\n");

for (let user of users) {
    console.log(user);
}
