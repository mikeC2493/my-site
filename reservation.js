window.onload = function(){
    document.getElementById("thankYouNote").style.display = "none";
}

function clearFields(){
    var formFields = ["firstName", "lastName", "email"];
    for(var i=0; i<formFields.length; i++){
        document.getElementById(formFields[i]).value = "";
    }
    document.getElementById("thankYouNote").style.display = "block";
}