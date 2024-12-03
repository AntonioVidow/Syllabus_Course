let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickPattern = []
let started = false
let level = 0

function nextSequence(){
    userClickedPattern = [];
    level++
    rondomNumber = Math.floor(Math.random()*4)
    randomColor = buttonColors[rondomNumber]
    gamePattern.push(randomColor)

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomColor)
    $("h1").text("Level " + level)
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play().then(r => r.play())
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(() =>{    $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
        if(userClickPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000)
        }
    }else{
        $("body").addClass("game-over")
        playSound("wrong")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200)
        $("h1").text("Press A Key to Start")
        startOver()
    }
}

function startOver(){
    gamePattern = []
    userClickPattern = []
    started = false
    level = 0
}

$(".btn").on("click", function(event){
    let userChosenColor = event.target.id
    userClickPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickPattern.length-1)
})

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true
    }
})
