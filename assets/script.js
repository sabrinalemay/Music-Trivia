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