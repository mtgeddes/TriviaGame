

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

function displayQuestion () {
    document.getElementById("question").textContent = questions[x].question
    document.getElementById("answer1").textContent = questions[x].answer1
    document.getElementById("answer2").textContent = questions[x].answer2
    document.getElementById("answer3").textContent = questions[x].answer3
    document.getElementById("answer4").textContent = questions[x].answer4
}

var guessTime; 
var x = 0;

clearInterval(guessTime)


$("#test").click(function () {
    guessTime = setInterval(question, 1000 * 10)
    displayQuestion ()
    function question(){
        displayQuestion ()
        x++;
    }
})

$(".guess").click(function () {
    var chosen = $(this)
    selectedAnswer = $(this).text();
  //  revealTime = setTimeout(answer, 1000 * 3);
    if (selectedAnswer === correctAnswer[x]) {
        //display correct answer + you're right
        clearInterval(guessTime) 
        document.write("You got it!")
  //      function answer () {
  //          function question () {
  //              displayQuestion ()
            }
 //       }
  //  }

    else {
        //display correct answer + you're wrong

    }
}) 