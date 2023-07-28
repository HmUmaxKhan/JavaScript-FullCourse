// In this we will get and set attributes like href and input type etc.

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com");

const type = document.querySelector("input");
console.log(type.getAttribute("type"));
type.setAttribute("type", "password");