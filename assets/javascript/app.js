
// Questions
var questions = [
    first = {
        question: "This director's wife won an Oscar for Best Film Editing. To date, this director has won zero Oscars.",
        answer1: "A) George Lucas",
        answer2: "B) Alfred Hitchcock",
        answer3: "C) David Fincher",
        answer4: "D) Quentin Tarantino",
        url: "http://www.syfy.co.uk/news/3-ways-which-marcia-lucas-helped-save-star-wars-0"
    },
    second = {
        question: "This application was included in Microsoft's operating systems to 'to soothe people intimidated by the operating system,' introduce users to graphic user interfaces, and taught them how to use a mouse.",
        answer1: "A) Minesweeper",
        answer2: "B) Solitaire",
        answer3: "C) Paint",
        answer4: "D) Start bar",
        url: "https://en.wikipedia.org/wiki/Microsoft_Solitaire#History"
    },
    third = {
        question: "This is the name of the mental state in which a person is completely absorbed in an activity, resulting in a wrong of their sense of space and time.",
        answer1: "A) Hyperfocus",
        answer2: "B) Capture",
        answer3: "C) Flow",
        answer4: "D)  Attention Span",
        url: "https://en.wikipedia.org/wiki/Flow_(psychology)"
    },
    fourth = {
        question: "This composer disliked performer Adriana Ferrarese del Bene, who was know for nodding her head down on low notes and raising her head on high notes, so much, that he wrote a song for her to perform that had lots of jumps from low to high just so he could see her head 'bob like a chicken' onstage.",
        answer1: "A) Chopin",
        answer2: "B) Bach",
        answer3: "C) Beethoven",
        answer4: "D) Mozart",
        url: "https://en.wikipedia.org/wiki/Cos%C3%AC_fan_tutte",
    },

    fifth = {
        question: "This person held a party open to all, but only publicized the party after it was over so that only time-travellers would know to attend; as expected, nobody showed up to the party.",
        answer1: "A) Stephen Hawking",
        answer2: "B) Albert Einstein",
        answer3: "C) Elon Musk",
        answer4: "D) Kanye West",
        url: "https://en.wikipedia.org/wiki/Stephen_Hawking#2000%E2%80%93present",
    },

    sixth = {
        question: "When this company had a fall in revenue from the less successful product launch its CEO cut his pay in half for 5 months rather than blame workers",
        answer1: "A) Steve Jobs of Apple",
        answer2: "B) Satoru Iwata of Nintendo",
        answer3: "C) Bill Gates of Microsoft",
        answer4: "D) Mark Zuckerberg of Facebook",
        url: "https://www.businessinsider.com.au/nintendos-ceo-will-halve-his-pay-after-profits-drop-2014-1?r=US&IR=T",
    },

    seventh = {
        question: "When the Nazis burned this author's books he said, 'What progress we are making. In the Middle Ages they would have burned me. Now, they are content with burning my books.'",
        answer1: "A) Karl Marx",
        answer2: "B) Albert Einstein",
        answer3: "C) Sigmund Freud",
        answer4: "D) Vladimir Lenin",
        url: "https://en.wikipedia.org/wiki/Sigmund_Freud#Escape_from_Nazism",
    },
];

// Correct answers
var correctAnswer = [questions[0].answer1, questions[1].answer2, questions[2].answer3, questions[3].answer4, questions[4].answer1, questions[5].answer2, questions[6].answer3];

// Variables 
var x = 0;
var qTimeOnScreen; 
var correct = 0; 
var wrong = 0;
var preventClick = [];
var timeLeft;
var timerClear;
var missedQuestions; 

// Displays quesitons if there are questions left to display. 
function displayQuestions () {
    if (x === correctAnswer.length) {
        clearInterval(qTimeOnScreen);
        clearInterval(timerClear);
        console.log(x);
        $("#timer").text("");
        $('#answer').text("");
        missedQuestions = correctAnswer.length - correct - wrong;
        updateScore();
        $("#question").text("Press the start button when ready");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#start").show()
    }
    else {
        clearInterval(timerClear);
        preventClick = [];
        timeLeft = 30;  
        $("#question").text("Question " + (x + 1) + ": " + questions[x].question);
        $("#answer1").text(questions[x].answer1);
        $("#answer2").text(questions[x].answer2);
        $("#answer3").text(questions[x].answer3);
        $("#answer4").text(questions[x].answer4);
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
    }
}

function updateScore () {
    missedQuestions = x - correct - wrong;
    $("#correct").text("Correct: " + correct);
    $("#wrong").text("Wrong: " + wrong);
    $("#misses").text("Missed: " + missedQuestions);
}

function timer () {
    timeLeft--;
    $("#timer").text(timeLeft);
}

// Shows the current question question
function currentQuestion(){
    x++;
    updateScore();
    displayQuestions (); 
}

// Gives time limit to guess current question
function displayNextQuestion() {
    currentQuestion (); 
    qTimeOnScreen = setInterval(currentQuestion, 1000 * 30);
}

// Start the game
$("#start").click(function () {
    correct = 0; 
    wrong = 0;
    x = 0;
    preventClick.push("0"); 
    displayQuestions ();
    qTimeOnScreen = setInterval(currentQuestion, 1000 * 30);
    $("#start").hide()
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
        correct++;
        $('#answer1').text("Correct! The answer was " + correctAnswer[x] + ".");
        $("#correct").text("Correct: " + correct);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }

    else if (preventClick.length === 1) {
        clearInterval(qTimeOnScreen);
        setTimeout(displayNextQuestion, 1000 * 3);
        clearInterval(timerClear)
        timeLeft = 3;
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
        wrong++;
        $("#answer1").text("Incorrect. You chose " + selectedAnswer + ". The answer was " + correctAnswer[x] + ".");
        $("#wrong").text("Wrong: " + wrong);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }
}) 