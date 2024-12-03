$("h1").addClass("big-title margin-50")
console.log($("h1").hasClass("big-title"))

$("button").html("<em>Try</em>")

console.log($("img").attr("src"))
$("a").attr("href", "https://www.yahoo.com")

$("h1").on("mouseover", function(){
    $("h1").animate({margin: "20%"})
})

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: "0.5"})
})

$("input").keypress(function(event){
    console.log(event)
})

$(document).keypress(function(event){
    $("h1").text(event.key)
    // console.log(event.key)
})
