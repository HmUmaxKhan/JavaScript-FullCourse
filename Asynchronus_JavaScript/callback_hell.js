//  Every timeout function calls the callback function

// For example

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");
const h6 = document.querySelector(".h6");

// Now i want to change the color of the heading 2 after 2s when heading 1 changes.

// To do this we have to call the callback function inside the setTimeout function.

// setTimeout(()=>{
//     h1.style.color ='red';
//     setTimeout(()=>{
//         h2.style.color = 'green';
//     },1000)
// },2000);

// Now we will see the pyramid of dom

function func(element, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.style.color = color;

      if (onSuccess) {
        onSuccess();
      } else if (onFailure) {
        onFailure();
      }
    }
  }, time);
}




func(
  h1,
  "red",
  2000,
  () => {
    console.log("Success!");
    func(h2, "green", 1000, () => {
      console.log("Success!");
      func(
        h3,
        "red",
        1000,
        () => {
          console.log("Suceess!");
          func(
            h4,
            "blue",
            1000,
            () => {
              console.log("Sucess!");
              func(
                h5,
                "yellow",
                1000,
                () => {
                  console.log("Sucess");
                  func(
                    h6,
                    "green",
                    1000,
                    () => {
                      console.log("Success");
                    },
                    () => {
                      "Failure";
                    }
                  );
                },
                () => {
                  console.log("Failure");
                }
              );
            },
            () => {
              console.log("Failure!");
            }
          );
        },

        () => {
          console.log("Failure");
        }
      );
      () => {
        console.log("failure!");
      };
    });
  },
  () => {
    console.log("failure!");
  }
);


// This can be error prone so that we use promises.