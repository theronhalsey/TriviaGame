$(document).ready(function () {


    // make questionButtons of questions
    var questions = [

        question1 = {
            questionText: "1 - What is correct?",
            answers: {
                rightAnswer: "1 - correct answer",
                wrongAnswers: {
                    wrong1: "1 - wrong answer #1",
                    wrong2: "1 - wrong answer #2",
                    wrong3: "1 - wrong answer #3",
                }
            }
        },

        question2 = {
            questionText: "2 - What is correct?",
            answers: {
                rightAnswer: "2 - correct answer",
                wrongAnswers: {
                    wrong1: "2 - wrong answer #1",
                    wrong2: "2 - wrong answer #2",
                    wrong3: "2 - wrong answer #3",
                }
            }
        }

    ]

    // get random question

    var question = questions[Math.floor(Math.random() * questions.length)];
    var askedQuestion
    var questionButtons = [];

    function makeQuestionButtons() {
        askedQuestion = $("<h4>").text(question.questionText);
        option1 = $("<button>").text(question.answers.rightAnswer).addClass("option");
        questionButtons.push(option1);
        option2 = $("<button>").text(question.answers.wrongAnswers.wrong1).addClass("option");
        questionButtons.push(option2);
        option3 = $("<button>").text(question.answers.wrongAnswers.wrong2).addClass("option");
        questionButtons.push(option3);
        option4 = $("<button>").text(question.answers.wrongAnswers.wrong3).addClass("option");
        questionButtons.push(option4);
    }

    $("#beginButton").on("click", function () {
        console.log(question);
        console.log(questionButtons);
        makeQuestionButtons();
        questionButtons.sort(function(a, b){return 0.5 - Math.random()});
        $("#beginButton").replaceWith(askedQuestion, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
    });


});