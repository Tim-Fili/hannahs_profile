function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.user_email.focus();
return true;
}
else
{
alert("Invalid email address! Try Again");
document.form1.user_email.focus();
return false;
}
}
