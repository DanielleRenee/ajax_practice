// this is a jQuery thing. it waits for all the html in a file
// to load in the browser before running the JS

$(document).ready(function () {

    var url="..//data/employees.json";

    $.getJSON(url, function (reponse) {
        var statusHTML = '<ul class="bulleted">';

        // use jQuery's cool .each method, which is basically a loop
        $.each(response, function (index, employee) {
            if (employee.inoffice === true) {
                statusHTML += '<li class="in">';
            }
                else {
                    statusHTML += '<li class="out">';
                }
            statusHTML += employee.name + '</li>';
        });

        // after the loop finishes we can add the closing unordered list tag
        statusHTML += '</ul>';
        // and insert completed html in to the page
        $.('#employeeList').html(statusHTML);
    }); // end getJSON

}); // end ready