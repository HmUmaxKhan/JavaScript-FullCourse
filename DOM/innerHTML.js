// inner HTML shows the full html of any HTML element

// For example

const ul = document.getElementsByClassName("nav-item");
console.log(ul.innerHTML);

// The reason you are getting undefined when trying to log ul.innerHTML is that document.getElementsByClassName returns a collection of elements, not a single element. Even if the collection contains only one element, you still need to access it by its index before accessing its innerHTML property.


const ul1 = document.getElementsByClassName("nav-item");
console.log(ul[1].innerHTML);

// We can also access the innerHTML property of a collection by using loop

for (const el of ul){
    console.log(el.innerHTML);
}