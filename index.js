// Create a random number for dices
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";

// Give out a result by comparing the random numbers
if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
