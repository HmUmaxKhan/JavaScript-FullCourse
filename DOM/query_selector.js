// We can get any element using querySelector

// For example

const mainHeading = document.querySelector('#main-heading');

console.log(mainHeading);

const navItem = document.querySelector('.nav-item');
// It will select only first class and left rest of the classes.
console.log(navItem);


// In order to select all the classes we can use querySelectorAll.

const navItems = document.querySelectorAll('.nav-item');

console.log(navItems);