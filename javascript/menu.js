
window.onload = function(){
    var proteinTables = ["steakType","fishType","chickenType","pastaType","potatoType","vegetableType", 
"pieType", "cakeType", "icecreamType"];
    for(var i=0;i<proteinTables.length;i++){
        document.getElementById(proteinTables[i]).style.display = "none";
    }
}

function displayProteinTable(imageID){
    var proteinArray = ["cowImage","fishImage","chickenImage"];
    var selectedImage = imageID;
    for(var i=0;i<proteinArray.length;i++){
        if(proteinArray[i] == selectedImage){
            document.getElementById(proteinArray[i]).classList.add("selectedImage");
        }
        else{
            document.getElementById(proteinArray[i]).classList.remove("selectedImage");
        }
    }
displayProteinType(selectedImage);
}

function displayProteinType(foodType){
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

function displaySidesTable(imageID){
    var sidesArray = ["pastaImage","potatoImage","vegetableImage"];
    var selectedImage = imageID;
    for(var i=0;i<sidesArray.length;i++){
        if(sidesArray[i] == selectedImage){
            document.getElementById(sidesArray[i]).classList.add("selectedImage");
        }
        else{
            document.getElementById(sidesArray[i]).classList.remove("selectedImage");
        }
    }
displaySidesType(selectedImage);
}

function displaySidesType(foodType){
    var typeMenu = foodType;
    if(typeMenu == "pastaImage"){
        document.getElementById("pastaType").style.display = "block";
        document.getElementById("potatoType").style.display = "none";
        document.getElementById("vegetableType").style.display = "none";
    }
    else if(typeMenu == "potatoImage"){
        document.getElementById("potatoType").style.display = "block";
        document.getElementById("pastaType").style.display = "none";
        document.getElementById("vegetableType").style.display = "none";
    }
    else if(typeMenu == "vegetableImage"){
        document.getElementById("vegetableType").style.display = "block";
        document.getElementById("pastaType").style.display = "none";
        document.getElementById("potatoType").style.display = "none";
    }
    
}

function displayDessertTable(imageID){
    var dessertArray = ["pieImage","cakeImage","icecreamImage"];
    var selectedImage = imageID;
    for(var i=0;i<dessertArray.length;i++){
        if(dessertArray[i] == selectedImage){
            document.getElementById(dessertArray[i]).classList.add("selectedImage");
        }
        else{
            document.getElementById(dessertArray[i]).classList.remove("selectedImage");
        }
    }
displayDessertType(selectedImage);
}

function displayDessertType(foodType){
    var typeMenu = foodType;
    if(typeMenu == "pieImage"){
        document.getElementById("pieType").style.display = "block";
        document.getElementById("cakeType").style.display = "none";
        document.getElementById("icecreamType").style.display = "none";
    }
    else if(typeMenu == "cakeImage"){
        document.getElementById("cakeType").style.display = "block";
        document.getElementById("pieType").style.display = "none";
        document.getElementById("icecreamType").style.display = "none";
    }
    else if(typeMenu == "icecreamImage"){
        document.getElementById("icecreamType").style.display = "block";
        document.getElementById("pieType").style.display = "none";
        document.getElementById("cakeType").style.display = "none";
    }
    
}