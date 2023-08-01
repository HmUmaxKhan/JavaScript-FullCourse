// Now we will do it
// We will use promises for callback hell

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");
const h6 = document.querySelector(".h6");

function func(element, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

func(h1, "red", 1000)
  .then(() => {
    return func(h2, "green", 1000);
  })
  .then(() => {
return func(h3, "blue", 1000);
  })
  .then(() =>{
   return func(h4, "yellow", 1000);
  })
  .then(()=>{
    return func(h5, "purple", 1000);
  })
  .then(()=>{
    func(h6, "gray", 2000);
  })
  .catch(()=>{
    console.log("Error in element");
  })
