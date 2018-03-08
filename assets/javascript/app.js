$(document).ready(function () {


    // questions block
    var questions = [

        question1 = {
            questionText: "Which Nick is best Nick?",
            answers: {
                rightAnswer: "Nick Offerman",
                wrongAnswers: {
                    wrong1: "Nicholas Cage",
                    wrong2: "Nickelodeon",
                    wrong3: "The Knick",
                }
            }
        },

        question2 = {
            questionText: "Who will win the World Cup?",
            answers: {
                rightAnswer: "Not America",
                wrongAnswers: {
                    wrong1: "Germany",
                    wrong2: "Brazil",
                    wrong3: "Belgium",
                }
            }
        },

        question3 = {
            questionText: "Where did I leave my phone?",
            answers: {
                rightAnswer: "Under the bed",
                wrongAnswers: {
                    wrong1: "In the kitchen",
                    wrong2: "Someone stole it",
                    wrong3: "None of these",
                }
            }
        },

        question4 = {
            questionText: "Will SEPTA ever provide adequate rail service to the city?",
            answers: {
                rightAnswer: "Ha! No.",
                wrongAnswers: {
                    wrong1: "Maybe like, in the future?",
                    wrong2: "It's already great!",
                    wrong3: "Do busses count?",
                }
            }
        },

        question5 = {
            questionText: "How did my computer die?",
            answers: {
                rightAnswer: "Magic smoke got out.",
                wrongAnswers: {
                    wrong1: "Cat pushed it off the desk.",
                    wrong2: "Dropped a heavier bag on my computer bag",
                    wrong3: "It never really worked to begin with.",
                }
            }
        },

    ];

    // randomize questions
    function shuffleQuestions() {
        questions.sort(function (a, b) { return 0.5 - Math.random() });
    }
    shuffleQuestions();


    // global variables
    var question = questions[0];
    var askedQuestion
    var questionButtons = [];
    var index = 0;
    var rightAnswerCount = 0;
    var wrongAnswerCount = 0;
    var unansweredCount = 0;
    var questionsAsked = 0;

    var timer = 20;
    var intervalId;

    var goodGifs = [
        "assets/images/good/giphy1.gif",
        "assets/images/good/giphy2.gif",
        "assets/images/good/giphy3.gif",
        "assets/images/good/giphy4.gif",
    ];

    var badGifs = [
        "assets/images/bad/giphy1.gif",
        "assets/images/bad/giphy2.gif",
        "assets/images/bad/giphy3.gif",
        "assets/images/bad/giphy4.gif",
    ];

    
    // global functions
    //timer
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        timer--;
        $("#countdown").html(timer);
        if (timer === 0) {
            stop();
            unansweredCount++;
            $("#unansweredCount").text(unansweredCount);
            nextQuestion();
        };
    };

    function stop() {
        clearInterval(intervalId);
        timer = 10;
    };

    //question functions
    function makeQuestionButtons() {
        question = questions[index];
        if (questionsAsked < questions.length) {
        askedQuestion = $("<h4 id='questionText'>").text(question.questionText);
        option1 = $("<button id='option1'>").text(question.answers.rightAnswer).addClass("option correct");
        questionButtons[0] = option1;
        option2 = $("<button id='option2'>").text(question.answers.wrongAnswers.wrong1).addClass("option incorrect");
        questionButtons[1] = option2;
        option3 = $("<button id='option3'>").text(question.answers.wrongAnswers.wrong2).addClass("option incorrect");
        questionButtons[2] = option3;
        option4 = $("<button id='option4'>").text(question.answers.wrongAnswers.wrong3).addClass("option incorrect");
        questionButtons[3] = option4;
        questionButtons.sort(function (a, b) { return 0.5 - Math.random() });
        };
    };

    function nextQuestion() {
        if (questionsAsked < questions.length) {
            $("#gifImage").remove();
            $("#questionText").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
            run();
        } else if (questionsAsked === questions.length) {
            stop();
            endGame();
            shuffleQuestions();
        }
    };

    //game functions
    function goodJob() {
        gifIndex = Math.floor(Math.random()*4);
        console.log(gifIndex);
        $("#questionText").text("That's correct!");
        $("#option1").replaceWith("<img id='gifImage' src='"+goodGifs[gifIndex]+"'>");
        $("#option2").remove();
        $("#option3").remove();
        $("#option4").remove();
        var windowTimeout = setTimeout(function(){
            nextQuestion();
          }, 3000);
    };

    function badJob() {
        gifIndex = Math.floor(Math.random()*4);
        console.log(gifIndex);
        $("#questionText").text("No wai!");
        $("#option1").replaceWith("<img id='gifImage' src='"+badGifs[gifIndex]+"'>");
        $("#option2").remove();
        $("#option3").remove();
        $("#option4").remove();
        var windowTimeout = setTimeout(function(){
            nextQuestion();
          }, 3000);
    };
    
    function endGame() {

        $("#questionText").text("You know " + rightAnswerCount + " things!");
        $("#gifImage").replaceWith("<button id='tryAgain'>Try again?</button>");
    };

    function startOver() {
        question = questions[0];
        askedQuestion
        questionButtons = [];
        index = 0;
        rightAnswerCount = 0;
        wrongAnswerCount = 0;
        unansweredCount = 0;
        questionsAsked = 0;
        timer = 10;
        intervalId;
        shuffleQuestions();
        makeQuestionButtons();
        $("#tryAgain").remove();
        $("#questionText").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
        run();;
    };

    // begin game
    $(document).on("click", "#beginButton", function () {
        makeQuestionButtons();
        $("#beginButton").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
        run();
    });
    // click right/wrong answers        
    $(document).on("click", ".correct", function () {
        stop();
        index++;
        questionsAsked++;
        rightAnswerCount++;
        $("#rightAnswerCount").text(rightAnswerCount);
        makeQuestionButtons();
        goodJob();
    });

    $(document).on("click", ".incorrect", function () {
        stop();
        index++;
        questionsAsked++;
        wrongAnswerCount++;
        $("#wrongAnswerCount").text(wrongAnswerCount);
        makeQuestionButtons();
        badJob();
    });

    $(document).on("click", "#tryAgain", function () {
        startOver();
    });
});