$(document).ready(function() {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time;
var rightAnswers = ["Greenland", "Amazon", "The Moon", "One-Punch Man"];
var questions = [
                "Name the world's biggest island",
                "What is the world's longest river?",
                "Where would you find the Sea of Tranquility?",
                "Whos is the Strongest"
                ];
var answers = [["GreenLand", "Japan", "Madagascar", "Australia"], ["Nile", "Yellow", "Amazon", "Yangtze"], ["Canada", "Africa", "Antarctica", "The Moon"],
                ["Goku", "One-Pucn Man", "Superman", "Thor"]];



function start(){
    correct = 0;
    incorrect = 0;
    time;
    $(".image1").show();
    $(".startbox").show();
    $(".container").hide();
    $(".title").hide()
    slide1();
}




function slide1(){
    $(".s").on("click",function(){
        $(".image1").hide();
        $(".startbox").hide();
        $(".container").show();
        $(".title").show();
        console.log(answers[0][0]);

        for(var i = 0; i < answers[0].length; i++){
            var a = $("<button>");
            a.addClass("answerbutton");
            a.attr("data-name", answers[0][i]);
            a.html(answers[0][i]);
            $(".button").append(a);
            }
            console.log(this.textContent);
        if(this.textContent === rightanswers[0]){
            alert("yay");
        }
    })
}


start();

})


