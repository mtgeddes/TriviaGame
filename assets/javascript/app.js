

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
]

var correctAnswer = ["A answer1", "B answer2", "C answer3", "D answer4"]

var x = 0;
var guessTime; 
var win = 0; 
var lose = 0;
var preventClick = []

function displayQuestions () {
    if (x === correctAnswer.length) {
        clearInterval(guessTime);
        document.write("finished!")
    }
    else {
        preventClick = []  
        document.getElementById("question").textContent = questions[x].question
        document.getElementById("answer1").textContent = questions[x].answer1
        document.getElementById("answer2").textContent = questions[x].answer2
        document.getElementById("answer3").textContent = questions[x].answer3
        document.getElementById("answer4").textContent = questions[x].answer4
    }
}

function currentQuestion(){
    x++;
    displayQuestions ()  
}

function displayNextQuestion() {
    currentQuestion (); 
    guessTime = setInterval(currentQuestion, 1000 * 10)
}

function showAnswer() {
    console.log(correctAnswer + selectedAnswer + " was the correct answer.")
}

$("#test").click(function () { 
    displayQuestions ()
    guessTime = setInterval(currentQuestion, 1000 * 10)
})

$(".guess").click(function () {
    selectedAnswer = $(this).text();
    preventClick.push("0")
    if (selectedAnswer === correctAnswer[x] && preventClick.length === 1) {
        clearInterval(guessTime);
        showAnswer()
        setTimeout(displayNextQuestion, 1000 * 3)
        win++;
    }

    else if (preventClick.length === 1) {
        clearInterval(guessTime);
        showAnswer()
        setTimeout(displayNextQuestion, 1000 * 3)
        lose++;
    }
}) 