// practice with AJAX and JSON

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};

// Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.
request.open('GET', 'footer.html');
request.send();


// reminder, JSONP = Json with Padding
// a web proxy is useful for AJAX requests because it allows you to bypass a web 
// browser's same-origin policy by retrieving data from another server while keeping 
// AJAX requests within the same domain.


// JSON is transmitted over the web as plain text. To make it useful for a 
// JavaScript program, you need to parse it, or convert it from a string to JavaScript.