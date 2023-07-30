// In this we will use Math.random() function to generates random numbers and also use them to change the background color

const rgb = ()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.querySelector('button');

btn.addEventListener('click', (event)=>{
    document.body.style.backgroundColor = rgb();
    document.querySelector("h1").textContent = "Background "+rgb();
})