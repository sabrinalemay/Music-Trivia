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
var heroBgClass = "relative shadow-xl sm:rounded-2xl sm:overflow-hidden";
var heroContainer = document.querySelector('.hero-container');

function setStage() {
    buttonContainer.setAttribute("class", "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center");
    buttonContainer.setAttribute("id", "buttonContainer");
    buttonContainerChildDiv.setAttribute("class", "space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5");
    buttonContainerChildDiv.setAttribute("id", "buttonContainerChildDiv");
    startButton.setAttribute("class", "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8");
    startButton.setAttribute("id", "start");
    startButton.textContent = "Click to Start Game";
}

var selectedGenre = "";

eighties.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-purple-600";
    selectedGenre = "eighties";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "80's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1980s-hero.png");
});
ninties.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-blue-600";
    selectedGenre = "ninties";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "90's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/1990s-hero.png");
});
early.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-green-600";
    selectedGenre = "early";
    getSpotifyResp(selectedGenre);
    genreText.remove();
    heroText.textContent = "00's Hits";
    buttonContainerChildDiv.appendChild(startButton);
    buttonContainer.appendChild(buttonContainerChildDiv);
    hero.appendChild(buttonContainer);
    heroImage.setAttribute("src", "./assets/images/2000s-hero.png");
});
current.addEventListener('click', function () {

    setStage();
    heroBgClass = heroBgClass + " bg-pink-600"
    selectedGenre = "current";
    getSpotifyResp(selectedGenre);
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
    hero.setAttribute("class", "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8");
    setGameQuestion(questionIndex);

});

var buttonWrapper = document.getElementById('wrapper');
buttonWrapper.setAttribute("class", "answerWrapper");

function setGameQuestion(questionIndex) {

    heroText.textContent = musicObjectArr[questionIndex].triviaQ;
    heroText.setAttribute("question-value", questionIndex);

    var answerContainer = document.createElement('div');
    answerContainer.setAttribute('class', "grid grid-cols-1 gap-4 sm:grid-cols-2");
    heroBg.setAttribute("class", heroBgClass);
    var playParent = document.createElement('div');
    var playChildOne = document.createElement('div');
    var playChildOneOne = document.createElement('div');
    var playImage = document.createElement('img');
    var playChildTwo = document.createElement('div');
    var playChildTwoOne = document.createElement('div');
    var playChildTwoAhref = document.createElement('a');
    var playChildTwoPara = document.createElement('p');
    playParent.setAttribute("class", "max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl play-parent");
    playChildOne.setAttribute("class", "md:flex play-child-one");
    playChildOneOne.setAttribute("class", "md:shrink-0 play-child-one-one");
    playImage.setAttribute("class", "h-48 w-full object-cover md:h-full md:w-80 play-image");
    playImage.setAttribute("src", musicObjectArr[questionIndex].track_image);
    playChildTwo.setAttribute("class", "p-8 play-child-two");
    playChildTwoOne.setAttribute("class", "uppercase tracking-wide text-sm text-indigo-500 font-semibold play-child-two-one");
    playChildTwoAhref.setAttribute("class", "block mt-1 text-xl font-semibold text-gray-900 leading-tight font-medium  play-child-two-a");
    playChildTwoAhref.textContent = "Click Here to Play a Sample of the Song";
    playChildTwoAhref.setAttribute("href", musicObjectArr[questionIndex].preview_url);
    playChildTwoAhref.setAttribute("target", "_blank");
    // console.log(musicObjectArr[questionIndex].preview_url);
    playChildTwoPara.setAttribute("class", "mt-2 text-slate-500 play-child-two-p");
    playChildTwoOne.appendChild(playChildTwoAhref);
    playChildTwoOne.appendChild(playChildTwoPara);
    playChildTwo.appendChild(playChildTwoOne);
    playChildOneOne.appendChild(playImage);
    playChildOne.appendChild(playChildOneOne);
    playChildOne.appendChild(playChildTwo);
    playParent.appendChild(playChildOne);
    hero.appendChild(playParent);

    for (i = 0; i < 4; i++) {


        var answerContainerChildTwo = document.createElement('div');
        var answerContainerChildThree = document.createElement('div');
        var answerImage = document.createElement('img');
        var answerContainerChildFour = document.createElement('div');
        var answerChoice = document.createElement('a');
        var answerChoiceText = document.createElement('p');

        // answerContainerChildThree
        answerImage.style.pointerEvents = 'none';
        answerContainerChildFour.style.pointerEvents = 'none';
        answerChoice.style.pointerEvents = 'none';
        answerChoiceText.style.pointerEvents = 'none';
        answerChoiceText.textContent = musicObjectArr[questionIndex].possible_answers[i];

        answerContainerChildTwo.setAttribute("aid", i);
        //console.log(answerContainerChildTwo);
        answerContainerChildTwo.setAttribute("class", "relative rounded-lg border border-gray-300 bg-white px-6 py-6 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500");
        answerContainerChildThree.setAttribute("class", "flex-shrink-0");
        answerImage.setAttribute("class", "h-5 w-5 rounded-full");
        answerImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png");
        answerImage.setAttribute("alt", "Green Circle");

        answerContainerChildFour.setAttribute("class", "flex-1 min-w-0");
        answerChoice.setAttribute("class", "focus:outline-none");
        answerChoiceText.setAttribute("class", "text-sm font-medium text-gray-900");

        answerChoice.appendChild(answerChoiceText);
        answerContainerChildFour.appendChild(answerChoice);
        answerContainerChildThree.appendChild(answerImage);
        answerContainerChildTwo.appendChild(answerContainerChildThree);
        answerContainerChildTwo.appendChild(answerContainerChildFour);
        answerContainer.appendChild(answerContainerChildTwo);
        buttonWrapper.appendChild(answerContainer);
        answerContainerChildTwo.addEventListener('click', function (event) {
            var userChoice = event.target.getAttribute("aid");
            var questioNumber = heroText.getAttribute('question-value');
            answerContainer.remove();
            playParent.innerHTML = "";
            playParent.remove();
            checkAnswer(userChoice, questioNumber);
        })

    }



};

var score = 0;
var scoreIncorrect = 0;
var scoreCorrect = 0;

function checkAnswer(userChoice, questioNumber) {
    questionIndex += 1;
    theAnswer = musicAnsKey.find(theQuestion => theQuestion.id == questioNumber);
    //console.log(theAnswer);
    if (theAnswer.correctAnswerIndex == userChoice) {
        // answerResponse.textContent = "Correct";
        score = score + 5;
        scoreCorrect += 1;
        //console.log("correctAnswer");
        //console.log(score);
    } else {
        scoreIncorrect += 1;
        //answerResponse.textContent = "Incorrect";
        //console.log("incorrentAnswer");
        //console.log(score);
    }
    if (questionIndex < 5) {

        setGameQuestion(questionIndex);
    } else {

        endGame();
    }
};

function endGame() {

    scoreArr = [{
            "score": "Final Score",
            "value": score
        },
        {
            "score": "Number Incorrect",
            "value": scoreIncorrect
        },
        {
            "score": "Number Correct",
            "value": scoreCorrect
        }
    ];
    var statText = document.createElement('h3');
    statText.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900');
    statText.textContent = "Final Tally";
    var statParent = document.createElement('div');
    var statContainerEl = document.createElement('div');
    statContainerEl.setAttribute('class', "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8");
    var statContainer = document.createElement('dl');
    statContainer.setAttribute('class', 'mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3');

    statDivArr = [];
    for (i = 0; i < scoreArr.length; i++) {

        var statElOne = document.createElement('dt');
        var statElTwo = document.createElement('dd');

        statElOne.setAttribute('class', 'text-sm font-medium text-gray-500 truncate');
        statElOne.textContent = scoreArr[i].score;
        statElTwo.setAttribute('class', 'mt-1 text-3xl font-semibold text-gray-900');
        statElTwo.textContent = scoreArr[i].value;
        var statDataDiv = document.createElement('div');
        statDataDiv.setAttribute('class', 'px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6');
        statDataDiv.appendChild(statElOne);
        statDataDiv.appendChild(statElTwo);
        statContainer.appendChild(statDataDiv);

    }
    
    statParent.appendChild(statText);
    statParent.appendChild(statContainer);
    statContainerEl.appendChild(statParent);
    buttonWrapper.appendChild(statContainerEl);
    hero.setAttribute("class", "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8");
    heroText.textContent = "Game Over";
    heroImage.setAttribute("src", "./assets/images/times-up-hero.png");
    heroContainer.appendChild(heroImage);
    heroBg.appendChild(heroContainer);
    heroBg.appendChild(hero);

    // // Contact Form  
    var contactContent = document.createElement('div');
    var contactContentH = document.createElement('h2');
    var contactContentP = document.createElement('p');
    var formParent = document.createElement('div');
    var formMain = document.createElement('form');
    var formEmail = document.createElement('label');
    var emailAddress = document.createElement('input');
    var formButtonParent = document.createElement('div');
    var contactChild = document.createElement('div');
    var contactParent = document.createElement('div');

    contactChild.setAttribute('class', 'max-w-4xl mx-auto py-10 px-10 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center');
    contactContent.setAttribute('class', 'lg:w-4 lg:flex-1');
    contactContentH.setAttribute('class', 'text-3xl font-extrabold text-gray-900 sm:text-4xl');    
    contactContentP.setAttribute('class', 'mt-3 max-w-3xl text-lg text-gray-500 ');
    formParent.setAttribute('class', 'mt-8 lg:mt-0 lg:ml-8');
    // formParent.appendChild('formMain');
    formMain.setAttribute('class', 'sm:flex form-main');
    // formMain.appendChild('formEmail');
    // formMain.appendChild('emailAddress');
    formEmail.setAttribute('class', 'sr-only ');
    emailAddress.setAttribute('class', 'mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0');    
    formButtonParent.setAttribute('class', 'mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0');
    // formButtonParent.appendChild('formButtonText');

    contactChild.appendChild(contactContent);
    contactChild.appendChild(formParent);
    contactParent.setAttribute('class', 'bg-white');
    contactContent.appendChild(contactContentH);
    contactContent.appendChild(contactContentP);
    contactParent.appendChild(contactChild);
    buttonWrapper.appendChild(contactParent);
 

    startConfetti();

    //console.log(score);
    //console.log("The End");

};