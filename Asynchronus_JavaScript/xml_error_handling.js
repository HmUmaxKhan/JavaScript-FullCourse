// Now we see that the callbacks are used for getting a single element from the whole document.

/* The code is creating a new XMLHttpRequest object and assigning it to the variable `xhr`. The URL
"https://jsonplaceholder.typicode.com/posts" is assigned to the variable `url`. The
`console.log(xhr)` statement is printing the `xhr` object to the console. */

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
console.log(xhr);



/* The code `xhr.open("GET", url, true);` is setting up the XMLHttpRequest object to make a GET request
to the specified URL. */

xhr.open("GET", url, true);


/* The code `xhr.onload` is assigning an anonymous function to the `onload` event of the `xhr` object.
This function is executed when the request has successfully completed and the response is available and readycode is 4. */

xhr.onload = function () {
    const json = xhr.response;
    const data = JSON.parse(json);
    const id = data[5].id;
    
    const xhr2 = new XMLHttpRequest();
    const url2 = `${url}/${id}`;

    xhr2.open("GET",url2);

    xhr2.onload = function () {
        const data = JSON.parse(xhr2.response);
        console.log(data);
    }

    xhr2.send();
  };
  
  
  /* `xhr.send();` is sending the HTTP request to the server. This method is used to actually send the
  request after setting up the request using `xhr.open()`. */

  xhr.send();
