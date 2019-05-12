
    $(document).ready(function () {
        console.log('Get data');
        $.get("json/customers.json", function (data, status) {
            var customers=data
            if (status == 'success') {
                // $("#name").text(data.name);
                var customers = data;
                var tableHead = '<thead><tr><th>customerID</th><th>companyName</th><th>contactName</th><th>contactTitle</th></tr></tfoot>'
                $('#datalist').append(tableHead);
                for (var index in customers) {
                    var customers = customers[index];
                    var tableRow = '<tr><td>' +customers.customerID+ '</td><td>' +customers.companyName + '</td><td>' +customers.contactName + '</td><td>' +customers.contactTitle + '</td></tr>'
                    $('#datalist').append(tableRow);
                    console.log(customers);
                }
            }
        });
    });
