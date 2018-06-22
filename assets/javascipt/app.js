$(document).ready(function() {

var clockRunning = false;
var answernum = 0;
var questionnum = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalId;
var number = 10;
var rightAnswers = ["GreenLand", "Amazon", "The Moon", "One-Punch Man"];
var questions = [
                "Name the world's biggest island",
                "What is the world's longest river?",
                "Where would you find the Sea of Tranquility?",
                "Whos is the Strongest"
                ];
var answers = [["GreenLand", "Japan", "Madagascar", "Australia"], ["Nile", "Yellow", "Amazon", "Yangtze"], ["Canada", "Africa", "Antarctica", "The Moon"],
                ["Goku", "One-Punch Man", "Superman", "Thor"]];



    function start(){
        correct = 0;
        incorrect = 0;
        answernum = 0;
        questionnum = 0;
        unanswered = 0;
        number = 10;
        $(".image1").show();
        $(".startbox").show();
        $(".bigbox1").hide();
        $(".bigbox2").hide();
        $(".title").hide();
    }

    $(".s").on("click", function(){
        question(questionnum);
    });

    function numplus(){
        question(questionnum);
    }

    function question(j){
            number = 10;
            $(".timeleft").html("<h3> Time left: " +number+ "</h3>");
            run();
            $(".image1").hide();
            $(".startbox").hide();
            $(".title").show();
            $(".bigbox1").show();
            $(".bigbox2").hide(); 
            $(".button").empty();

            if(questionnum > answers.length-1){
            endgame();
            }
            else {
                $(".question").html("Q: " + questions[j]);

                for(var i = 0; i < answers[j].length; i++){
                    var a = $("<button>");
                    a.addClass("btn btn-primary answerbutton ");
                    a.attr("data-name", answers[j][i]);
                    a.html(answers[j][i]);
                    $(".button").append(a);
                }
            }
        }

    function endgame(){
            $(".image1").hide();
            $(".startbox").hide();
            $(".title").show();
            $(".bigbox1").hide();
            $(".bigbox2").show(); 
            $(".box3").empty();
            stop();

            $(".box3").append("<h1> Correct: " + correct  + "</h1>");
            $(".box3").append("<h1> Incorrect: " + incorrect + "</h1>");
            $(".box3").append("<h1> Unanswered: " + unanswered  + "</h1>");
            $(".box3").append("<button class='playAgain btn btn-primary'> Play Again </button>");
    }
            $(".box3").on("click", ".playAgain", start);

        $(".button").on("click",".answerbutton", function(){
            if(this.textContent === rightAnswers[answernum]){
                console.log("the text xontent " + this.textContent);
                console.log("the right answer " +   rightAnswers[answernum]);
                wins();
            }
            else{
                console.log("the text xontent " + this.textContent);
                console.log("the right answer " +   rightAnswers[answernum]);
                loss();
            }
        });
        console.log("dwasdw");
    

    function wins(){
        stop();
        correct++;
        questionnum++;
        answernum++;
        $(".bigbox1").hide();
        $(".bigbox2").show();
        $(".box3").empty();
        $(".box3").append("<h1>You Are Correct</h1>");
        $(".box3").append( "<img id=onepunch src='./assets/images/one-punch.gif'>");
        setTimeout(numplus, 2000);
    }

    function loss(){
        stop();
        incorrect++;
        questionnum++;
        answernum++;
        $(".bigbox1").hide();
        $(".bigbox2").show();
        $(".box3").empty();
        $(".box3").append("<h1>You Are Incorrect</h1>");
        $(".box3").append("<h1>Correct Answer: " +  rightAnswers[answernum-1] + "</h1>");
        $(".box3").append( "<img id=onepunch src='./assets/images/wrong.gif'>");
        setTimeout(numplus, 2000);
        console.log("loss");
    }


    function run() {
        if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
         clockRunning = true;
        }
    
      }

  
    function decrement() {
        number--;
        $(".timeleft").html("<h3> Time left: " +number+ "</h3>");

        if (number === 0) {
        unanswered++
        questionnum++;
        answernum++;
        stop();
        $(".bigbox1").hide();
        $(".bigbox2").show();
        $(".box3").empty();
        $(".box3").append("<h1>You Are Out Of Time</h1>");
        $(".box3").append("<h1>Correct Answer: " +  rightAnswers[answernum-1] + "</h1>");
        $(".box3").append( "<img id=onepunch src='./assets/images/miss.gif'>");
        setTimeout(numplus, 2000);

        }
    }

    function stop() {
    clearInterval(intervalId);
    clockRunning = false;
     }

start();

})


