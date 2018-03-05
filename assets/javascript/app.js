$(document).ready(function () {


    // make questionButtons of questions
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

    ]

    // get random question
    function randomize() {
        questions.sort(function (a, b) { return 0.5 - Math.random() });
    }
    randomize();

    var question = questions[0];
    var askedQuestion
    var questionButtons = [];
    var index = 0;
    var rightAnswerCount = 0;
    var wrongAnswerCount = 0;

    
    /* var rightSounds = [];
    var wrongSounds = [
        'assets/sounds/wrong/f-o-o-l.wav',
        'assets/sounds/wrong/nofootballgame.wav',
        'assets/sounds/wrong/sense.wav',
        'assets/sounds/wrong/youcrazy.wav',
    ]; */

    function makeQuestionButtons() {
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
    }

    function nextQuestion() {
        index++;
        question = questions[index];
    };

    $("#beginButton").on("click", function () {
        makeQuestionButtons();
        $("#beginButton").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
        console.log(questions);

        $(".correct").on("click", function () {
            rightAnswerCount++;
            $("#rightAnswerCount").text(rightAnswerCount);
            nextQuestion();
            makeQuestionButtons();
            $("#questionText").text(question.questionText)
            $("#option1").text(question.answers.rightAnswer);
            $("#option2").text(question.answers.wrongAnswers.wrong1);
            $("#option3").text(question.answers.wrongAnswers.wrong2);
            $("#option4").text(question.answers.wrongAnswers.wrong3);
            /* $(".option").each(function(){
                var divs = $(this).find('div');
                for(var i = 0; i < divs.length; i++) $(divs[i]).remove();
                for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
            }); */

            console.log("this click is working");


        });

        $(".incorrect").on("click", function () {
           
            /* wrongSounds[Math.floor(Math.random() * wrongSounds.length)];
            var playWrongSound = new Audio(wrongSounds);
            audio.play(wrongSounds); */
        
            wrongAnswerCount++;
            $("#wrongAnswerCount").text(wrongAnswerCount);
            nextQuestion();
            makeQuestionButtons();
            $("#questionText").text(question.questionText)
            $("#option1").text(question.answers.rightAnswer);
            $("#option2").text(question.answers.wrongAnswers.wrong1);
            $("#option3").text(question.answers.wrongAnswers.wrong2);
            $("#option4").text(question.answers.wrongAnswers.wrong3);
            console.log("this click is also working");
        });

    });






});