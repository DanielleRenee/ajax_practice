// practice with AJAX and JSON

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};

// Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.
request.open('GET', 'footer.html');