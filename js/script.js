var isdown = false;
function dropdown(){
    if(!isdown){
        document.getElementsByClassName("option-select-div")[0].style.display = "block";
        var optionbtn = document.getElementById("option-button");
        optionbtn.style.backgroundColor = "white";
        optionbtn.style.border = "1px solid white"
        optionbtn.src = "../img/cross-out.png"
        isdown = true;
    }
    else{
        document.getElementsByClassName("option-select-div")[0].style.display = "none";
        var optionbtn = document.getElementById("option-button");
        optionbtn.style.backgroundColor = "#70408b";
        optionbtn.style.border = "1px solid #70408b"
        isdown = false;
    }
}