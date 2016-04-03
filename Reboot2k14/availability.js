//Ajax javascript

$(document).ready(function(){
$("#mobile").keyup(function() {
var mobile = $('#mobile').val();
if(mobile=="")
{
$("#disp").html("");
}
else
{
$.ajax({
type: "POST",
url: "usercheck.php",
data: "rmobile="+ mobile ,
success: function(html){
$("#disp").html(html);
}
});
return false;
}
});
});

//email

$(document).ready(function(){
$("#emails").keyup(function() {
var email = $('#emails').val();
if(email=="")
{
$("#ema").html("");
}
else
{
$.ajax({
type: "POST",
url: "usercheck.php",
data: "rmail="+ email ,
success: function(html){
$("#ema").html(html);
}
});
return false;
}
});
});

