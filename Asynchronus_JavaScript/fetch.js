// In this we can use the fetch instead of xml request


// For example

const URL = "https://jsonplaceholder.typicode.com/posts";

/* This code is using the `fetch` function to make a GET request to the specified URL
(`https://jsonplaceholder.typicode.com/posts`). */

fetch(URL)
.then((res)=>{
   return res.json();
}).then((res)=>{
    console.log(res);
   const id = res[5].id;
   console.log(id);
   return id;
}).then((id)=>{
   const url = `${URL}/${id}`;
   return fetch(url);
}).then((req)=>{
    return req.json();
}).then((res)=>{
    console.log(res);
})


// In this we have to return resolve.json() to another promise in order to console.log() it.

