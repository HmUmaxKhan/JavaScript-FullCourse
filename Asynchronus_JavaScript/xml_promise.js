// Now we use promises to make requests for different routes.

const URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * The function `get` is a JavaScript function that sends an HTTP GET request to a specified URL and
 * returns a promise that resolves with the response if the request is successful, or rejects with an
 * error if the request fails.
 * @param method - The method parameter specifies the HTTP method to be used for the request, such as
 * "GET", "POST", "PUT", "DELETE", etc.
 * @param url - The URL is the address of the server or resource you want to send the request to. It
 * can be a relative or absolute URL.
 * @returns The `get` function returns a Promise object.
 */


function get(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Invalid"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("error"));
    };

    xhr.send();
  });
}



// Now we consume the promise





/* The code is making a series of asynchronous HTTP GET requests using promises. */


get("GET", URL)
  .then((data) => {
    const info = JSON.parse(data);
    return info;
  })
  .then((info)=>{
    return  info[4].id
  })
  .then((id)=>{
      const url = `${URL}/${id}`;
      return get("GET",url);
  })
    .then((data)=>{
        console.log(data);
    })
  .catch((err) => {
    console.log(err);
  });
