//Generate random password
function generate(){

//Set password length/complexity
    let complexity =document.get ElementById("slider").value;
    
//Possible Password Values
    let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password="";

//Create for loop to choose password characters
    for(var i =0; i <= complexity; i++){
        password= password + values.charAt(Math.floor(Math.random()* Math.floor(value.length-1)));
    }
}

//Add password to display area

document.getElementById("display").values=password;{

}

