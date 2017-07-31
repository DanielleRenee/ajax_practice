// practice with AJAX and JSON

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};