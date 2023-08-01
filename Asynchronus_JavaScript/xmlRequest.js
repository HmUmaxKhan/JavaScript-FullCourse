/* The code is creating a new XMLHttpRequest object and assigning it to the variable `xhr`. The URL
"https://jsonplaceholder.typicode.com/posts" is assigned to the variable `url`. The
`console.log(xhr)` statement is printing the `xhr` object to the console. */

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
console.log(xhr);


/* The code `xhr.open("GET", url, true);` is setting up the XMLHttpRequest object to make a GET request
to the specified URL. */

xhr.open("GET", url, true);

/* The code `xhr.onreadystatechange` is assigning an anonymous function to the `onreadystatechange`
event of the `xhr` object. This function is executed whenever the `readyState` property of the `xhr`
object changes. */

// xhr.onreadystatechange = function ( ) {
//     const json = xhr.response;
//     const data = JSON.parse(json);
//     console.log(data);
// }




/* The code `xhr.onload` is assigning an anonymous function to the `onload` event of the `xhr` object.
This function is executed when the request has successfully completed and the response is available and readycode is 4. */

xhr.onload = function () {
  const json = xhr.response;
  const data = JSON.parse(json);
  console.log(data);
};


/* `xhr.send();` is sending the HTTP request to the server. This method is used to actually send the
request after setting up the request using `xhr.open()`. */
xhr.send();

// Value	State	Description
// 0	UNSENT	: Client has been created. open() not called yet.
// 1	OPENED	: open() has been called.
// 2	HEADERS_RECEIVED  :	send() has been called, and headers and status are available.
// 3	LOADING	Downloading : responseText holds partial data.
// 4	DONE	: The operation is complete.

//////////////////////////////////////////////////////////////////////////////////////////
// For status codes visit

// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
