
// Questions
var questions = [
    first = {
        question: "This director's wife won an Oscar for Best Film Editing. To date, this director has won zero Oscars.",
        answer1: "1 - George Lucas",
        answer2: "2 - Alfred Hitchcock",
        answer3: "3 - David Fincher",
        answer4: "4 - Quentin Tarantino",
        url: "http://www.syfy.co.uk/news/3-ways-which-marcia-lucas-helped-save-star-wars-0"
    },
    second = {
        question: "This application was included in Microsoft's operating systems to 'to soothe people intimidated by the operating system,' introduce users to graphic user interfaces, and taught them how to use a mouse.",
        answer1: "1 - Minesweeper",
        answer2: "2 - Solitaire",
        answer3: "3 - Paint",
        answer4: "4 - Start bar",
        url: "https://en.wikipedia.org/wiki/Microsoft_Solitaire#History"
    },
    third = {
        question: "This is the name of the mental state in which a person is completely absorbed in an activity, resulting in a loss of their sense of space and time.",
        answer1: "1 - Hyperfocus",
        answer2: "2 - Capture",
        answer3: "3 - Flow",
        answer4: "4 - Attention Span",
        url: "https://en.wikipedia.org/wiki/Flow_(psychology)"
    },
    fourth = {
        question: "This composer disliked performer Adriana Ferrarese del Bene, who was know for nodding her head down on low notes and raising her head on high notes, so much, that he wrote a song for her to perform that had lots of jumps from low to high just so he could see her head 'bob like a chicken' onstage.",
        answer1: "1 - Chopin",
        answer2: "2 - Bach",
        answer3: "3 - Beethoven",
        answer4: "4 - Mozart",
        url: "https://en.wikipedia.org/wiki/Cos%C3%AC_fan_tutte",
    },

    fifth = {
        question: "This person held a party open to all, but only publicized the party after it was over so that only time-travellers would know to attend; as expected, nobody showed up to the party.",
        answer1: "1 - Stephen Hawking",
        answer2: "2 - Albert Einstein",
        answer3: "3 - Elon Musk",
        answer4: "4 - Kanye West",
        url: "https://en.wikipedia.org/wiki/Stephen_Hawking#2000%E2%80%93present",
    },

    sixth = {
        question: "When this company had a fall in revenue from the less successful product launch its CEO cut his pay in half for 5 months rather than blame workers",
        answer1: "1 - Steve Jobs of Apple",
        answer2: "2 - Satoru Iwata of Nintendo",
        answer3: "3 - Bill Gates of Microsoft",
        answer4: "4 - Mark Zuckerberg of Facebook",
        url: "https://www.businessinsider.com.au/nintendos-ceo-will-halve-his-pay-after-profits-drop-2014-1?r=US&IR=T",
    },

    seventh = {
        question: "When the Nazis burned this author's books he said, 'What progress we are making. In the Middle Ages they would have burned me. Now, they are content with burning my books.'",
        answer1: "1 - Karl Marx",
        answer2: "2 - Albert Einstein",
        answer3: "3 - Sigmund Freud",
        answer4: "4 - Vladimir Lenin",
        url: "https://en.wikipedia.org/wiki/Sigmund_Freud#Escape_from_Nazism",
    },
];

// Correct answers
var correctAnswer = [questions[0].answer1, questions[1].answer2, questions[2].answer3, questions[3].answer4, questions[4].answer1, questions[5].answer2, questions[6].answer3];

// Variables 
var x = 0;
var qTimeOnScreen; 
var win = 0; 
var loss = 0;
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
        missedQuestions = correctAnswer.length - win - loss;
        $("#wins").text("Wins: " + win);
        $("#losses").text("Losses: " + loss);
        $("misses").text("Missed: " + missedQuestions);
        // *****unhide reset button****
    }
    else {
        clearInterval(timerClear);
        preventClick = [];
        timeLeft = 10;  
        $("#question").text("Question: " + questions[x].question);
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
    preventClick.push("0"); 
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
        $('#question').text("Correct! The answer was " + correctAnswer[x] + ".");
    }

    else if (preventClick.length === 1) {
        clearInterval(qTimeOnScreen);
        setTimeout(displayNextQuestion, 1000 * 3);
        clearInterval(timerClear)
        timeLeft = 3;
        $("#timer").text(timeLeft);
        timerClear = setInterval(timer, 1000);
        loss++;
        $('#question').text("Incorrect. You chose " + selectedAnswer + ". The answer was " + correctAnswer[x] + ".");
    }
}) 