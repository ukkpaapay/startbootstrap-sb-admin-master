

$(document).ready(function () {
    console.log('Get data');
    $.getJSON("json/customers.json", function (data, status) {
        var count=0
        while (data[count]) {
            count++;
        }
        $('#data').append(count);

    });
});