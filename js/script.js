var isdown = false;
function dropdown(){
    if(!isdown){
        document.getElementsByClassName("option-select-div")[0].style.display = "block";
        var optionbtn = document.getElementById("option-button");
        optionbtn.style.backgroundColor = "white";
        optionbtn.style.border = "1px solid white"
        document.getElementById("option-button-img").src = "../img/cross-out.png"
        isdown = true;
    }
    else{
        document.getElementsByClassName("option-select-div")[0].style.display = "none";
        var optionbtn = document.getElementById("option-button");
        optionbtn.style.backgroundColor = "#70408b";
        optionbtn.style.border = "1px solid #70408b"
        document.getElementById("option-button-img").src = "../img/arrow.png"
        isdown = false;
    }
}

function sexClick(){
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    document.getElementsByClassName("sex-select")[0].style = "display: block; margin-left:26px;"
    optionContents.style = "-webkit-filter: blur(5px); -moz-filter: blur(5px);-o-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);background-color: #FFFFFF;"; // Code for Safari 3.1 to 6.0
    optionContents.style.transition = "all 0.5s";
}

function cancelSex(){
    document.getElementsByClassName("sex-select")[0].style = "display: none;";
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    optionContents.style = "";
}

function clickedMan(){
    document.getElementById("sexValue").value = "man";
    document.getElementById("sex-diamond-text").innerHTML = "<strong>남</strong>";
}
function clickedWoman(){
    document.getElementById("sexValue").value = "woman";
    document.getElementById("sex-diamond-text").innerHTML = "<strong>여</strong>";
}

function ageClick(){
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    document.getElementsByClassName("age-select")[0].style = "display: block; margin-left:26px;"
    optionContents.style = "-webkit-filter: blur(5px); -moz-filter: blur(5px);-o-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);background-color: #FFFFFF;"; // Code for Safari 3.1 to 6.0
    optionContents.style.transition = "all 0.5s";
    document.getElementById("select-age-input").focus();
}

function cancelAge(){
    document.getElementsByClassName("age-select")[0].style = "display: none;";
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    optionContents.style = "";
    
    document.getElementById("ageValue").value = document.getElementById("select-age-input").value;
    document.getElementById("age-diamond-text").innerHTML = "<strong>" + document.getElementById("select-age-input").value + "</strong>";
}