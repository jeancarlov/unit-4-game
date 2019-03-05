
//JavaScript funtion that wraps everything
$(document).ready(function () {

    //list of Global variables to the runtime of the application
    var wins = 0;
    var losses= 0;
    var targetPick = [];
    var userPick = [];
    var totalScore = 0;
    var isCardChosen = false;
    var isCalculated = false;
    var playerValue = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;

    //wins and loses declaration on the html
    $('#number-wins').text(wins);
    $('#number-losses').text(losses);

    //  This function will initialize the game.
    function initializer() {
        targetPick = ''; // should this be in quotes
        userPick = 0;
        totalScore = 0;
        isCardChosen = false;
        isCalculated = false;
        playerValue = 0;
        //Set a value for the target
        var targetPickBank = Math.floor (Math.random () *119)+1;
        //Update the page with the target number
        console.log(targetPickBank);
        $('#target-pick').text(targetPickBank);
        //Set a value for each card
        crystalOne = Math.floor (Math.random () *11)+1;
        
        crystalTwo = Math.floor (Math.random () *11)+1;
       
        crystalThree = Math.floor (Math.random () *11)+1;
        
        crystalFour = Math.floor (Math.random () *11)+1;
       
       // $("#computer-pick, #total-score, .card").empty();
    }

    initializer();

        $(".card-1").on("click", function() {
           console.log("Card One");
           //over all number get added onto with this value
           playerValue += crystalOne;
           console.log("Value of this crystal " + crystalOne);
           
           console.log("players value " + playerValue);
             
        })
        $(".card-2").on("click", function() {
            console.log("Card Two"); 
            playerValue += crystalTwo;   
        })
        $(".card-3").on("click", function() {
            console.log("Card Three");
            playerValue += crystalThree;
        })
        $(".card-4").on("click", function() {
            console.log("Card Four");
            playerValue += crystalFour;   
        })

//end of doc.ready
});
