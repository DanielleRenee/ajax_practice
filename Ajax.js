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




// follow the four stages of an AJAX request. 
// 1. create a new xml http request object
// 2. 
// 3. 
// 4. 

// SET UP THE NEW REQUEST OBJECT

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        // two helpful console debugging views
        // console.log(xhr.responseText);
        // console.log(typeof xhr.responseText);

        // convert the JSON string to a JavaScript object.
        var employees = JSON.parse(xhr.responseText);
        // console.log(typeof employees);
        var statusHTML = '<ul class="bulleted">';
        // using this class because the css class is already built out.
        for (var i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class= "in">';
            } else {
                statusHTML += '<li class= "out">';
            }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
        }
      statusHTML += '</ul>';
      // attaching the JavaScript to the html div
      // the complete HTML goes inside a div with the ID of "employeeList"
      document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

xhr.open('GET', 'data/employees.json'); 
xhr.send();

// PROCESS THE JSON DATA

// for each item in the JS object, create a new html list item.
// 1. create a new HTML list item
// 2. Check the 'inoffice' property
// 3. Get the value for the 'name' property; insert it in the <li> tag
// 4. close the <li> tag


