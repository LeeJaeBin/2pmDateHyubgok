var isdown = false;
function dropdown(){
    if(!isdown){
        document.getElementsByClassName("option-select-div")[0].style.display = "block";
        isdown = true;
    }
    else{
        document.getElementsByClassName("option-select-div")[0].style.display = "none";
        isdown = false;
    }
}