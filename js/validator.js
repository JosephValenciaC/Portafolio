
var response = grecaptcha.getResponse();

if(response.length == 0)
{
    alert("Please verify that you are not a robot");
    return false;
}
else{
    return true;
    
}
    