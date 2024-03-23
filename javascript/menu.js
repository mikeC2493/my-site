
window.onload = function(){
    var proteinTables = ["steakType","fishType","chickenType"];
    for(var i=0;i<proteinTables.length;i++){
        document.getElementById(proteinTables[i]).style.display = "none";
    }
}

function displayTable(imageID){
    var proteinArray = ["cowImage","fishImage","chickenImage"];
    var selectedImage = imageID;
    console.log(selectedImage);
    for(var i=0;i<proteinArray.length;i++){
        if(proteinArray[i] == selectedImage){
            document.getElementById(proteinArray[i]).classList.add("selectedImage");
        }
        else{
            document.getElementById(proteinArray[i]).classList.remove("selectedImage");
        }
    }
displayType(selectedImage);
}

function displayType(foodType){
    var typeMenu = foodType;
    if(typeMenu == "cowImage"){
        document.getElementById("steakType").style.display = "block";
        document.getElementById("fishType").style.display = "none";
        document.getElementById("chickenType").style.display = "none";
    }
    else if(typeMenu == "fishImage"){
        document.getElementById("fishType").style.display = "block";
        document.getElementById("steakType").style.display = "none";
        document.getElementById("chickenType").style.display = "none";
    }
    else if(typeMenu == "chickenImage"){
        document.getElementById("chickenType").style.display = "block";
        document.getElementById("steakType").style.display = "none";
        document.getElementById("fishType").style.display = "none";
    }
    
}

