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
if (localStorage.getItem("music-trivia-scores") == null) {
    localStorage.setItem("music-trivia-scores", JSON.stringify([]));
}
$("#submit-btn").click(function () {
    addUserScore($("#username-input").val(), $("#points").text());
    location.reload();
});
var userScores = JSON.parse(localStorage.getItem("music-trivia-scores"));
function addUserScore(user, score) {
    userScores.push([user, score]);
    localStorage.setItem("music-trivia-scores", JSON.stringify(sortScores(userScores)));
}
function sortScores(arrayOfArrays) {
    return arrayOfArrays.sort((a, b) => b[1] - a[1]);
};
// Display High Scores in High Score Modal
if (userScores.length > 0) {
    for (let i = 1; i < 6; i++) {
        $(`#user-${i}`).text(userScores[i - 1][0]);
        $(`#score-${i}`).text(userScores[i - 1][1]);
    }
}

var eighties = document.getElementById('eightiesBtn');
var ninties = document.getElementById('nintiesBtn');
var early = document.getElementById('earlyBtn');
var current = document.getElementById('currentBtn');

var heroImage = document.getElementById('hero-image');
var heroText = document.getElementById('hero-text');
var hero = document.getElementById('hero');
var genreText = document.getElementById('genreText');
var buttonContainerChildDiv = document.createElement("div");
var buttonContainer = document.createElement("div");
var startButton = document.createElement("button");
var heroBg = document.getElementById('hero-bg');
var heroBgClass= "relative shadow-xl sm:rounded-2xl sm:overflow-hidden";




function setStage() {
    buttonContainer.setAttribute("class", "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center");
    buttonContainer.setAttribute("id", "buttonContainer");

    buttonContainerChildDiv.setAttribute("class", "space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5");
    buttonContainerChildDiv.setAttribute("id", "buttonContainerChildDiv");
    startButton.setAttribute("class", "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8");
    startButton.setAttribute("id", "start");
}

var selectedGenre = "";

eighties.addEventListener('click', function () {
    setStage();
    heroBgClass=heroBgClass+" bg-purple-600";
    selectedGenre = "eighties";
    genreText.remove();
    heroText.textContent = "80's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1980s-hero.png");
});
ninties.addEventListener('click', function () {
    setStage();
    selectedGenre = "ninties";
    genreText.remove();
    heroText.textContent = "90's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1990s-hero.png");
});
early.addEventListener('click', function () {
    setStage();
    selectedGenre = "early";
    genreText.remove();
    heroText.textContent = "00's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/2000s-hero.png");
});
current.addEventListener('click', function () {
    setStage();
    selectedGenre = "current";
    genreText.remove();
    heroText.textContent = "10's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/2010s-hero.png");
});

// start quiz
let questionIndex = 0;
startButton.addEventListener('click', function () {
    startButton.remove();
    heroImage.remove();
    heroText.textContent = musicObjectArr[questionIndex].triviaQ;
    let buttonWrapper = document.getElementById('wrapper');
    buttonWrapper.setAttribute("class","answerWrapper");
    var answerContainer = document.createElement('div');
    answerContainer.setAttribute('class',"grid grid-cols-1 gap-4 sm:grid-cols-2");
    heroBg.setAttribute("class", heroBgClass);
    for (i = 0; i < 4; i++) {
        
        var answerContainerChildTwo = document.createElement('div');
        var answerContainerChildThree = document.createElement('div');
        var answerImage = document.createElement('img');
        var answerContainerChildFour = document.createElement('div');
        var answerChoice = document.createElement('div');
        var answerChoiceText = document.createElement('p');

        answerChoiceText.textContent=musicObjectArr[questionIndex].possible_answers[i];
        answerChoiceText.setAttribute("questionVal", i);
        

        answerContainerChildTwo.setAttribute("class", "relative rounded-lg border border-gray-300 bg-white px-6 py-6 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500");
        answerContainerChildThree.setAttribute("class", "flex-shrink-0");
        answerImage.setAttribute("class", "h-5 w-5 rounded-full");
        answerImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png");
        answerImage.setAttribute("alt", "Green Circle");
        answerContainerChildFour.setAttribute("class", "flex-1 min-w-0");
        answerChoice.setAttribute("href", "#");
        answerChoice.setAttribute("class", "focus:outline-none");
        answerChoiceText.setAttribute("class", "text-sm font-medium text-gray-900");

        answerChoice.appendChild(answerChoiceText);
        answerContainerChildFour.appendChild(answerChoice);
        answerContainerChildThree.appendChild(answerImage);
        answerContainerChildTwo.appendChild(answerContainerChildThree);
        answerContainerChildTwo.appendChild(answerContainerChildFour);
        answerContainer.appendChild(answerContainerChildTwo);
        buttonWrapper.appendChild(answerContainer);
        // genreText.innerHTML = musicObjectArr[0].questionText;
        // genreText.setAttribute("id", musicObjectArr.id);
        
    }
    // questionIndex = questionIndex + 1;
    // setQuizQuestion(questionIndex);
});

var score = 0;
// function getAnswer(userAnswer, questionId) {
// startButton.addEventListener('click', function () {
//     questionIndex += 1;
//     answer = musicAnsKey.find(currentQuestion => currentQuestion.id == questionId);
//     if (answer.correctAnswer == userAnswer) {
//         // answerResponse.textContent = "Correct";
//         score = score + 5;
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