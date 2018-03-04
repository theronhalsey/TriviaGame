$(document).ready(function () {
    
    var question1 = {
        questionText: "What is correct?",
        rightAnswer: "correct answer",
        wrongAnswers: {
            wrong1: "wrong answer #1",
            wrong2: "wrong answer #2",
            wrong3: "wrong answer #3",
        }
    }
    console.log(question1);

    $("#beginButton").on("click", function () {
        console.log(question1);
    });


});