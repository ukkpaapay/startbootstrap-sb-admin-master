
    $(document).ready(function () {
        console.log('Get data');
        $.getJSON("json/customers.json", function (data, status) {
            var customers=data
            if (status == 'success') {
                // $("#name").text(data.name);
                var customers = data;
                for (var i = 0;i < data.length;i++) {
                    var o = i+1;
                    htmlString = '<tr><td>' + customers[i].customerID +
                '</td><td ><a href="editcustomer.html" onclick="setCookies(' + i + ')">' +
                customers[i].companyName + '</td><td>' +
                customers[i].contactName + '</td><td>' +
                customers[i].contactTitle + '</a></td></tr>'
            $('#datalist').append(htmlString);

                }
            }
        });
    });

