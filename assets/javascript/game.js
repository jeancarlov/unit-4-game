
//JavaScript funtion that wraps everything
$(document).ready(function () {

    // computerPick and userPick bank place holders

    var targetPickBank = Math.floor (Math.random () *119)+1;
    console.log(targetPickBank);
    $('#target-pick').text(targetPickBank);
    var cardPickBank = Math.floor (Math.random () *11)+1;
    console.log(cardPickBank);

    //list of Global variables to the runtime of the application
    var wins = 0;
    var losses= 0;
    var targetPick = [];
    var userPick = [];
    var totalScore = 0;
    var isCardChosen = false;
    var isCalculated = false;

    //wins and loses declaration on the html
    $('#number-wins').text(wins);
    $('#number-losses').text(losses);

    //  This functio will initialize the game.
    function initializer() {
        targetPick = ''; // should this be in quotes
        userPick = 0;
        totalScore = 0;
        isCardChosen = false;
        isCalculated = false;

        $("#computer-pick, #total-score, .card").empty();
    }
        $(".card").on("click", function() {
            // ckeck if we've already run a calcultion
            if (isCalculated){
                return false;
            }
        })
});


