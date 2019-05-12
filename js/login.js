
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
$("#login").click(function validate(){
var inputEmail = document.getElementById("inputEmail").value;
var inputPassword = document.getElementById("inputPassword").value;
if ( inputEmail == "admin@nw.com" && inputPassword == "12345**"){
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("inputEmail").disabled = true;
document.getElementById("inputPassword").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
});
