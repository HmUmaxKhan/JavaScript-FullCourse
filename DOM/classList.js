// By using class list we can add classes and also remove claasses from the HTML documents.

// For example

const classList = document.querySelector(".container h2");
console.log(classList);

// classList.classList.add("bg-dark");

// We can also remove it from the HTML document

// classList.classList.remove("bg-dark");

// Toggle class list Toggle means if class is already selected then it will be removed and if it is removed then it will be selected.

classList.classList.toggle("bg-dark");