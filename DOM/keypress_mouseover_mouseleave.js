// In this we came to know about different evens such as keypress mouseover and mouseleave

// Keypress event

const body= document.body;

body.addEventListener('keypress', (e) => {
    console.log(e.key);
});

// Mouseover event

document.querySelector("button").addEventListener("mouseover", (e) => {
    console.log('over');
})
document.querySelector("button").addEventListener("mouseleave", (e) => {
    console.log('leave');
})