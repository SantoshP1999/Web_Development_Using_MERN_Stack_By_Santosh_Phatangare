function getformData(){
    console.log("The Login Button is Clicked");

    let username_field=document.getElementById("username_input");
    let password_field=document.getElementById("password_input");
 
    //console.log(username_field.value);
    //console.log(password_field.value);

    alert("Username: "+username_field.value  +" "+ "Password: "+password_field.value);

    return false; 
}