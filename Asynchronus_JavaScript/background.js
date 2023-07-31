const body = document.body;

const id = setInterval(()=>{
    const r  = Math.floor(Math.random()*256);
    const g  = Math.floor(Math.random()*256);
    const b  = Math.floor(Math.random()*256);
    const rgb = `rgb(${r}, ${g}, ${b})`; 
    body.style.background = rgb;
},1000)

const btn = document.querySelector("button");

btn.addEventListener('click',()=>{
    clearInterval(id);
    btn.textContent = body.style.background;
})