const allbtns = document.querySelectorAll("button");

for (const btn of allbtns) {
    btn.addEventListener("click",event=>{
        event.target.style.backgroundColor = "red";
    })
}

// Browser performs two works

// JS Engine + WebAPIS

// They call the callback function and also return which function is happened.

// That is why we used event or any other var as parameter.