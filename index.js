
// Determine dice for each player
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var player1dice = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var player2dice = document.querySelectorAll("img")[1];

var playButton = document.querySelector(".btn")

function editNames(){
    var player1 = prompt("Change Player 1 Name")
    var player2 = prompt("Chane Player 2 Name")
    document.querySelectorAll("p")[0].innerHTML = player1
    document.querySelectorAll("p")[1].innerHTML = player2
}

playButton.addEventListener("click",() =>{

    player1dice.setAttribute("src", randomImageSource)

    player2dice.setAttribute("src" , randomImageSource2)

    if(randomNumber1 > randomNumber2){

        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins1"
    
    }else if(randomNumber1 < randomNumber2){

        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"

    } else {

        document.querySelector("h1").innerHTML = "Draw!"

    }

    playButton.innerHTML= "Click for New Game!"
    
    if (    playButton.innerHTML= "Click for New Game!"
    ){
        playButton.addEventListener("click",() =>{
            window.location.reload()
        })
    }

})