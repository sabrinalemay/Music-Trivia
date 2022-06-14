var showingModal = false;

function showModal(){
    if(showingModal == true){
        $("#modal").css("display", "block");
        $("#modal").removeClass("opacity-0");
        $("#modal").addClass("opacity-100");
    }else{
        $("#modal").css("display", "none");
        $("#modal").removeClass("opacity-100");
        $("#modal").addClass("opacity-0");
    }
}

$("#high-scores-btn").on("click", function(){
    showingModal = true;
    showModal();
});

$("#modal-close-btn").on("click", function(){
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