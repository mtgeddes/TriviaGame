
// Questions
var questions = [
    first = {
        question: "question one",
        answer1: "A answer1",
        answer2: "B answer2",
        answer3: "C answer3",
        answer4: "D answer4"
    },
    second = {
        question: "question two",
        answer1: "A answer1",
        answer2: "B answer2",
        answer3: "C answer3",
        answer4: "D answer4"
    },
    third = {
        question: "question three",
        answer1: "A answer1",
        answer2: "B answer2",
        answer3: "C answer3",
        answer4: "D answer4"
    },
    fourth = {
        question: "question four",
        answer1: "A answer1",
        answer2: "B answer2",
        answer3: "C answer3",
        answer4: "D answer4"
    }
];

// Correct answers
var correctAnswer = [questions[0].answer1, questions[1].answer2, questions[2].answer3, questions[3].answer4];

// Variables 
var x = 0;
var qTimeOnScreen; 
var win = 0; 
var loss = 0;
var preventClick = [];
var timeLeft;
var timerClear;

// Displays quesitons if there are questions left to display. 
function displayQuestions () {
    if (x === correctAnswer.length) {
        clearInterval(qTimeOnScreen);
        clearInterval(timerClear);
        console.log(x);
        $("#timer").text("");
        $('#answer').text("");
        $("#score").text("Correct answers: " + win + ". Incorrect answers: " + loss);
        // *****unhide reset button****
    }
    else {
        clearInterval(timerClear);
        preventClick = [];
        timeLeft = 10;  
        $("#question").text(questions[x].question);
        $("#answer1").text(questions[x].answer1);
        $("#answer2").text(questions[x].answer2);
        $("#answer3").text(questions[x].answer3);
        $("#answer4").text(questions[x].answer4);
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
    }
}

function timer () {
    timeLeft--;
    $("#timer").text(timeLeft);
}

// Shows the current question question
function currentQuestion(){
    x++;
    displayQuestions (); 
}

// Gives time limit to guess current question
function displayNextQuestion() {
    currentQuestion (); 
    qTimeOnScreen = setInterval(currentQuestion, 1000 * 10);
}

// Start the game
$("#test").click(function () { 
    displayQuestions ();
    qTimeOnScreen = setInterval(currentQuestion, 1000 * 10);
})

// Select an answer
$(".guess").click(function () {
    selectedAnswer = $(this).text();
    preventClick.push("0");
    
    if (selectedAnswer === correctAnswer[x] && preventClick.length === 1) {
        clearInterval(qTimeOnScreen);
        setTimeout(displayNextQuestion, 1000 * 3);
        clearInterval(timerClear);
        timeLeft = 3;
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
        win++;
        $('#answer').text("Correct! The answer was " + correctAnswer[x] + ".");
    }

    else if (preventClick.length === 1) {
        clearInterval(qTimeOnScreen);
        setTimeout(displayNextQuestion, 1000 * 3);
        clearInterval(timerClear)
        timeLeft = 3;
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
        loss++;
        $('#answer').text("Incorrect. You chose " + selectedAnswer + ". The answer was " + correctAnswer[x] + ".");
    }
}) 