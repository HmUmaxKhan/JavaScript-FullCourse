// Destructuring

const users = [
    { name: 'Umar', id:1},
    { name: 'Ali', id:2},
    { name: 'Moeez', id:3}
]

console.log("\nDestructuring\n");

const [user1, ,user2] = users;

console.log(user1);
console.log(user2);

// Destructuring objects from the array of users

console.log("\nDestructuring objects from the array of users\n");
const [{name}, ,{id}] = users;

console.log(name);
console.log(id);