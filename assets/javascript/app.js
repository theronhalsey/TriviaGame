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

    ]

    // rnadomize questions
    function randomize() {
        questions.sort(function (a, b) { return 0.5 - Math.random() });
    }
    randomize();

    // global variables
    var question = questions[0];
    var askedQuestion
    var questionButtons = [];
    var index = 0;
    var rightAnswerCount = 0;
    var wrongAnswerCount = 0;
    var unansweredCount = 0;
    var questionsAsked = 0;

    var timer = 10;
    var intervalId;

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
        console.log("makeQuestionButtons function called =");
        questionsAsked++;
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
        console.log(questionButtons);

    };

    function nextQuestion() {
        if (questionsAsked < questions.length) {
            index++;
            question = questions[index];
            $("#questionText").text(question.questionText)
            $("#option1").text(question.answers.rightAnswer);
            $("#option2").text(question.answers.wrongAnswers.wrong1);
            $("#option3").text(question.answers.wrongAnswers.wrong2);
            $("#option4").text(question.answers.wrongAnswers.wrong3);
            makeQuestionButtons();
            run();
        } else {
            endGame();
        }
    };

    //game functions
    function endGame() {
        $("#gameArea").text("Game Over");
        alert("Game Over");
    };

    // begin game
    $("#beginButton").on("click", function () {
        makeQuestionButtons();
        $("#beginButton").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
        run();
        console.log(questionsAsked);

        // click right/wrong answers        
        $(".correct").on("click", function () {
            stop();
            rightAnswerCount++;
            $("#rightAnswerCount").text(rightAnswerCount);
            nextQuestion();
            console.log(questionsAsked);
        });

        $(".incorrect").on("click", function () {
            stop();
            wrongAnswerCount++;
            $("#wrongAnswerCount").text(wrongAnswerCount);
            nextQuestion();
            console.log(questionsAsked);
        });

    });

});