var showingModal = false;

function showModal() {
    if (showingModal == true) {
        $("#modal").css("display", "block");
        $("#modal").removeClass("opacity-0");
        $("#modal").addClass("opacity-100");
    } else {
        $("#modal").css("display", "none");
        $("#modal").removeClass("opacity-100");
        $("#modal").addClass("opacity-0");
    }
}

$("#high-scores-btn").on("click", function () {
    showingModal = true;
    showModal();
});

$("#modal-close-btn").on("click", function () {
    showingModal = false;
    showModal();
});

showModal();


// End View JS

if(localStorage.getItem("music-trivia-scores") == null){
    localStorage.setItem("music-trivia-scores", JSON.stringify([]));
}

$("#submit-btn").click(function(){
    addUserScore($("#username-input").val(), $("#points").text());
    location.reload();
});

var userScores = JSON.parse(localStorage.getItem("music-trivia-scores"));

function addUserScore(user, score){
    userScores.push([user, score]);
    localStorage.setItem("music-trivia-scores", JSON.stringify(sortScores(userScores)));
}

function sortScores(arrayOfArrays){
    return arrayOfArrays.sort((a, b) => b[1] - a[1]);
};

// Display High Scores in High Score Modal

for(let i = 1; i < 6; i++){
    $(`#user-${i}`).text(userScores[i-1][0]);
    $(`#score-${i}`).text(userScores[i-1][1]);
}

// Spotify API
const clientid = "";
const clientsecret = "";

const _getToken = async() => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: ""
    })
}
// start quiz
let questionIndex = 0;
let possibleAnswers = 3;
let startQuizButton = document.getElementById('start');

startQuizButton.addEventListener('click', function () {
    let buttonWrapper = document.getElementById('button-parent');

    // for (i = 0; i <= possibleAnswers; i++) {

    //     var button = document.createElement("button");
    //     let fireIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //     let fireIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    //     button.setAttribute("class", "inline-flex items-center px-20 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-black hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");

    //     //questionTitle.innerHTML=quizQuestions[0].questionText;
    //     //questionTitle.setAttribute("id", quizQuestions.id);

    //     fireIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //     fireIconSvg.setAttribute("class", "-ml-1 mr-3 h-5 w-5");
    //     fireIconSvg.setAttribute("viewBox", "0 0 20 20");
    //     fireIconSvg.setAttribute("fill", "currentColor");

    //     fireIconPath.setAttribute("fill-rule", "evenodd");
    //     fireIconPath.setAttribute("d", "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z");
    //     fireIconPath.setAttribute("clip-rule", "evenodd");
    //     fireIconSvg.appendChild(fireIconPath);
    //     button.appendChild(fireIconSvg);
    //     button.innerHTML += 'Possible Answer';
    //     buttonWrapper.appendChild(button);
    // }

    // questionIndex = questionIndex + 1;
        setQuizQuestion(questionIndex);
});

function setQuizQuestion(questionIndex) {
    // Iterate through the questions and make sure that the questions are advanced by 1 each round.
    for (i = 0; i < quizQuestion.answers.length; i++) {
        cardTitle.textContent = quizQuestion.questionText;
        // Dynamically set the question id to the card title and the  and the quiz answer id to each answer. with custom attributes
        cardTitle.setAttribute('qId', quizQuestion.id);
        answerListValueText.setAttribute('answerId', i);
        // Add event listener to each answer so that it fires the check answer function.
        answerListValueText.addEventListener('click', function (event) {
            // get the question id 
            let questionId = cardTitle.getAttribute('qId');
            // get the answer id of the answer the user clicked.
            let userAnswer = answerListValueText.getAttribute('answerId');
            // pass the question Id and the answer id to the checkAnswer function to process the response.
            checkAnswer(userAnswer, questionId);
        })

        // Set the value of the answers on the card body
        //remove the start button
        cardButton.remove();
        answerListValueText.textContent = quizQuestion.answers[i];
        answerListValue.appendChild(answerListValueText);
        answerList.appendChild(answerListValue);
    }
    cardBody.append(answerList);
};


// function setQuizQuestion(questionIndex) {
//     // console.log(questionIndex);
// };
// userAnswer = 2;
// questionId = 1;
// var score = 0;

// // function getAnswer(userAnswer, questionId) {
//     startQuizButton.addEventListener('click', function () {

//     questionIndex += 1;
//     answer= answerKey.find(currentQuestion => currentQuestion.id == questionId);
//     if (answer.correctAnswer == userAnswer) {
//         // answerResponse.textContent = "Correct";
//          score = score + 5;
//         console.log("correctAnswer");
//         console.log(score);
//     } else {
//         //answerResponse.textContent = "Incorrect";
//         console.log("incorrentAnswer");
//         console.log(score);
//     }
// });

let quizQuestions = [{
    "id": 1,
    "questionText": "Commonly Used Data Types DO NOT include:",
    "answers": ["strings", "booleans", "alerts", "numbers"]
},
{
    "id": 2,
    "questionText": "The condition if/else statement is enclosed within ______.",
    "answers": ["quotes", "curly brackets", "parentheses", "square brackets"]
},
{
    "id": 3,
    "questionText": "String values must be enclosed within ______ when being assinged to variables.",
    "answers": ["parentheses", "curly brackets", "quotes", "square brackets"]
},
{
    "id": 4,
    "questionText": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "answers": ["JavaScript", "terminal/branch", "for loops", "console.log"]
},
{
    "id": 5,
    "questionText": "Which method is used to reset the timer interval?",
    "answers": ["reset()", "clearInterval()", "function()", "resetTimer()"]
}
];

let answerKey = [{
    "id": 1,
    "correctAnswer": 2
},
{
    "id": 2,
    "correctAnswer": 2
},
{
    "id": 3,
    "correctAnswer": 2
},
{
    "id": 4,
    "correctAnswer": 3
},
{
    "id": 5,
    "correctAnswer": 1
}
];
