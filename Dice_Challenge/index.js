let randomNumber = Math.floor(Math.random() * 6) + 1
document.getElementsByClassName("img1")[0].src = "images/dice" + randomNumber + ".png"

let secondRandomNumber = Math.floor(Math.random() * 6) + 1
document.getElementsByClassName("img2")[0].src = "images/dice" + secondRandomNumber + ".png"

if(randomNumber == secondRandomNumber){
    document.querySelector("h1").innerHTML="Draw!"
}else if(randomNumber > secondRandomNumber){
    document.querySelector("h1").innerHTML="Payer 1 Wins!"
}
 else{
    document.querySelector("h1").innerHTML="Payer 2 Wins!"
 }