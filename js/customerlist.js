$(function () {
   
    $.get("json/customers.json", function (data, status) { //,message)
        if (status == 'success') {
            console.log(status);
         
            var customers = data;
            var i = 0
            for (i = 0;i< data.length;i++) {
                var customer = customers[i];
            
                var ID = '<a href="custdetail.html" onclick="setCookies('+i+')">'+customer.companyName +'</a>' ;
                var tableRow = '<tr><td>'+customer.customerID+ '</td><td>' + ID + '</td><td>' + customer.contactName + '</td><td>' + customer.contactTitle + '</td></tr>';
                $("#datalist").append(tableRow);
                
               
            }
            
         
        }
    });
});

  function setCookies(i){
    document.cookie = i;
  }

