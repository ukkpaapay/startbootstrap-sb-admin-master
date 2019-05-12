

$(document).ready(function () {
    console.log('Get data');
    $.getJSON("json/customers.json", function (data1) {
        var count=0
        while (data1[count]) {
            count++;
        }
        $('#data1').append(count);

    });
    $.getJSON("json/orders.json", function (data) {
        var count=0
        while (data[count]) {
            count++;
        }
        $('#data2').append(count);

    });
    $.getJSON("json/products.json", function (data) {
        var count=0
        while (data[count]) {
            count++;
        }
        $('#data3').append(count);

    });
    $.getJSON("json/suppliers.json", function (data) {
        var count=0
        while (data[count]) {
            count++;
        }
        $('#data4').append(count);

    });
});