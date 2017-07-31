<!-- using jQuery get method -->
jQuery.get(url, data, callback);
// 1. first argument is the url, the one you are making a request to 
// 2. the second argument is optional, its the data you would send to a web server
// 3. the third is the callback function to process the server response

var url = '/employees.php';
var data = {
  firstName : "Dave",
  lastName : "McFarland"
};

var callback = function (response) {

};

$.get(url, data, callback);

// a note to myself on anonymous functions: 
// The function above is actually an anonymous function (a function without a name).
// The function still needs a parameter for that function to catch
// the server's incoming response.

// Functions stored in variables do not need function names. 
// They are always invoked (called) using the variable name.


var callback = function(response) {
  $('#footer').html(reponse);
};
  

$.get("footer.html", callback);