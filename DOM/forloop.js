// loop through getElement 
// 1. for loop
// 2. for of loop
// 3. forEach loop does not work

const navItems = document.getElementsByTagName('a');

// 1. for loop


// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
// }

// 2. for of loop

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
// }

// 3. foeRach loop is not working in the getElement

// We can use alternative method

// const navItem = Array.from(navItems);

// navItem.forEach(element => {
//     element.style.backgroundColor = "white";
//     element.style.color = "green";
// });


///////////////////////////////////////////////////////////////////////////////////////////



// loop through querySelectorAll

// 1. for loop
// 2. for of loop
// 3. forEach loop

const items = document.querySelectorAll("a");

// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     element.style.color = "green";
//     element.style.backgroundColor = "blue";
// }


// 2. for of loop

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "green";
// }

// 3. forEach loop

items.forEach((item)=>{
    item.style.color = "green";
    item.style.backgroundColor = "black";
})