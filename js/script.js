var isdown = false;
var isMain = 0;

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
    document.getElementsByClassName("sex-select")[0].style = "display: block; margin-left:25px;"
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
    document.getElementsByClassName("age-select")[0].style = "display: block; margin-left:25px;"
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

function mainLineClick(){
    isMain = 1;
    document.getElementById("select-title-line").innerHTML = "<strong>주라인</strong>";
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    document.getElementsByClassName(" mainLine-select")[0].style = "display: block; margin-left:25px;"
    optionContents.style = "-webkit-filter: blur(5px); -moz-filter: blur(5px);-o-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);background-color: #FFFFFF;"; // Code for Safari 3.1 to 6.0
    optionContents.style.transition = "all 0.5s";
}
function cancelMainLine(){
    document.getElementsByClassName("mainLine-select")[0].style = "display: none;";
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    optionContents.style = "";
    
    /*document.getElementById("mainLineValue").value = document.getElementById("select-mainLine-input").value;
    document.getElementById("mainLine-diamond-text").innerHTML = "<strong>" + document.getElementById("select-mainLine-input").value + "</strong>";*/
}
function selectTop(){
    if(isMain == 1){
        document.getElementById("mainLineValue").value = "Top";
        document.getElementById("mainLine-diamond-text").innerHTML = "<strong>탑</strong>";
    }
    else{
        document.getElementById("minorLineValue").value = "Top";
        document.getElementById("minorLine-diamond-text").innerHTML = "<strong>탑</strong>";
    }
}
function selectJungle(){
    if(isMain == 1){
        document.getElementById("mainLineValue").value = "Jungle";
        document.getElementById("mainLine-diamond-text").innerHTML = "<strong>정글</strong>";
    }
    else{
        document.getElementById("minorLineValue").value = "Jungle";
        document.getElementById("minorLine-diamond-text").innerHTML = "<strong>정글</strong>";
    }
}
function selectMid(){
    if(isMain == 1){
        document.getElementById("mainLineValue").value = "Mid";
        document.getElementById("mainLine-diamond-text").innerHTML = "<strong>미드</strong>";
    }    
    else{
        document.getElementById("minorLineValue").value = "Mid";
        document.getElementById("minorLine-diamond-text").innerHTML = "<strong>미드</strong>";
    }
}
function selectSup(){
    if(isMain == 1){
        document.getElementById("mainLineValue").value = "Sup";
        document.getElementById("mainLine-diamond-text").innerHTML = "<strong>서폿</strong>";
    }
    else{
        document.getElementById("minorLineValue").value = "Sup";
        document.getElementById("minorLine-diamond-text").innerHTML = "<strong>서폿</strong>";
    }
}
function selectBot(){
    if(isMain == 1){
        document.getElementById("mainLineValue").value = "Bot";
        document.getElementById("mainLine-diamond-text").innerHTML = "<strong>봇</strong>";
    }
    else{
        document.getElementById("minorLineValue").value = "Bot";
        document.getElementById("minorLine-diamond-text").innerHTML = "<strong>봇</strong>";
    }
}

function minorLineClick(){
    isMain = 0;
    document.getElementById("select-title-line").innerHTML = "<strong>보조라인</strong>";
    var optionContents = document.getElementsByClassName("option-contents-div")[0];
    document.getElementsByClassName(" mainLine-select")[0].style = "display: block; margin-left:26px;"
    optionContents.style = "-webkit-filter: blur(5px); -moz-filter: blur(5px);-o-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);background-color: #FFFFFF;"; // Code for Safari 3.1 to 6.0
    optionContents.style.transition = "all 0.5s";
}