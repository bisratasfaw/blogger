function register(){

var firstname=document.getElementById("fn").value;
var lastname=document.getElementById("ln").value;
var email=document.getElementById("email").value;
var pass1=document.getElementById("pwd").value;
var pass2=document.getElementById("pwds").value;
var pass
if (pass1==pass2){
    pass=pass1;
}
else
{
    document.getElementById("pwd").value="";
    document.getElementById("pwds").value="PASSWORD DOSENT MATCH!";
    document.getElementById("PWDS").style.color="red";
}
var user=[
    Fname,Lname,Email,password
]

    var size=user.length;
    size+=1;
    user[size].Fname=firstname;
    user[size].Lname=lastname;
    user[size].Email=email;
    user[size].password=pass;
    
    

}