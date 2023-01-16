var num = Math.floor(((Math.random())*100)+1);
// var pNum = document.getElementById("inNum").value ;
var heartCount = 10;
document.getElementById("heart").innerHTML= heartCount;
function checkNum(){
    var gn = parseInt(document.getElementById("inNum").value, 10);
    heartCount--;
    document.querySelector(".A").innerHTML="<strong>🚩New Game</strong>";
    document.querySelector(".result").innerHTML="Enter number between <strong>0 & 100</strong>";
    document.querySelector(".life").innerHTML='YOU ARE LEFT WITH &#9829 x <strong id="heart">10</strong>';
    document.getElementById("heart").innerHTML= heartCount;

    if(!(gn >= 0 && gn <= 100 && (document.getElementById("inNum").value!=""))){
        alert("Enter A valid Number");
    }
    if(gn===num){
        document.querySelector(".A").innerHTML="<strong>🏆WON!!🏆</strong>";
        document.querySelector(".result").innerHTML="WOW! You Guessed The Correct Number";
        document.querySelector(".life").innerHTML=num;
    }
    else if (heartCount>0){
        if(gn<num){
            document.querySelector(".A").innerHTML="<strong>Wrong!!🎭</strong>";
            document.querySelector(".result").innerHTML="Oop! You Guessed The Smaller Number Go🔼";
            document.querySelector(".life").innerHTML='YOU ARE LEFT WITH &#9829 x <strong id="heart">10</strong>';
            document.getElementById("heart").innerHTML= heartCount;
            document.getElementById("inNum").value="";
        }
        else if(gn>num){
            document.querySelector(".A").innerHTML="<strong>Wrong!!🎭</strong>";
            document.querySelector(".result").innerHTML="Oop! You Guessed The Greater Number Go🔽";
            document.querySelector(".life").innerHTML='YOU ARE LEFT WITH &#9829 x <strong id="heart">10</strong>';
            document.getElementById("heart").innerHTML= heartCount;
            document.getElementById("inNum").value="";   
        }
    }
    else if(heartCount<=0){
        heartCount=10;
        document.querySelector(".A").innerHTML="<strong>Game Lost</strong>";
        document.querySelector(".result").innerHTML="<strong>The Number is</strong>";
        document.querySelector(".life").innerHTML=num;
        document.getElementById("inNum").value="";
    }
}


function showNum(){
    heartCount=10;
    document.querySelector(".A").innerHTML="<strong>Game and Hope Lost🥵</strong>";
    document.querySelector(".result").innerHTML="<strong>The Number is</strong>";
    document.querySelector(".life").innerHTML=num;

}


function changeNum(){
    heartCount=10;
    num = Math.floor(((Math.random())*100)+1);
    document.querySelector(".A").innerHTML="<strong>🚩New Game🚩</strong>";
    document.querySelector(".result").innerHTML="Enter number between <strong>0 & 100</strong>";
    document.querySelector(".life").innerHTML="YOU ARE LEFT WITH &#9829 x <strong class='heart'>10</strong> ";

    
}

  