
//JavaScript funtion that wraps everything
$(document).ready(function () {

    // computerPick and userPick bank place holders

    var targetPick = Math.floor (Math.random () *119)+1;
    $('#target-pick').text(targetPick);

    // assigns random number to each image
    $(".card-1").attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    $(".card-2").attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    $(".card-3").attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    $(".card-4").attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);


    //list of Global variables to the runtime of the application
    var wins = 0;
    var losses= 0;
    var totalScore = 0;

    //wins and loses declaration on the html
    $('#number-wins').text(wins);
    $('#number-losses').text(losses);
    $('#total-score').text(totalScore);


    // random number assign to each card


//    // Here we created an on-click event that responds to button clicks of the crystal image.
        $(".card").on("click", function() {
        // var crystalValue = parseInt($(this).attr("data-crystalvalue"));
        var crystalValue = parseInt($(this).attr("data-crystalvalue"));

        // crystalValue = parseInt(crystalValue);
        totalScore = totalScore + crystalValue;
        $("#total-score").text(totalScore);
        });




    //  This functio will initialize the game.
    function initializer() {
        targetPick = ''; // should this be in quotes
        userPick = 0;
        console.log(userPick)
        totalScore = 0
        // $('#total-score').text(totalScore);
        
    }

    function youWin(){
        wins++;
        console.log(wins);
        $('#number-wins').text(wins);
        initializer();

    }

    function youLose(){
        losses++;
        console.log(losses);
        $('#number-losses').text(losses);
        initializer();
        

    }

    if(targetPick === totalScore){
        youWin;
        
    } else if (targetPick < totalScore){
       youLose;
       
    }

    

    // if(targetPick === userPick){
    //     youWin(),
    //     initializer(),
    // }


    // if (targetPick !== userPick){
    //     youLose();
    //     initializer()
    // }
            


     
            
    
});



