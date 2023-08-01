// Async is also a promise

// Await is also a promise inside async function

// const URL = "https://jsonplaceholder.typicode.com/posts";

const post = async () => {
    const resolve = await  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  const result = await resolve.json();
  console.log(result);
  
};
 post();

