// Clone node is used to clonning the nodes

// For example

const newItem = document.createElement("li");
newItem.textContent = "Hello";
const ul = document.querySelector(".todo-list li");

// ul.append(newItem);
// ul.prepend(newItem);

// We cannot append and prepend simultaneouly there fore we use clonning nodes


const newItem1 = newItem.cloneNode(true);

ul.append(newItem1);
ul.prepend(newItem);
