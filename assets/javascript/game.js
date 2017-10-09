// Var to generate a random number, to populate the "numToGuess" span
var targetNum = [];

// variable to hold the running total of player accumulated points
var score = 0;

// var to hold number of wins
var winCount = 0;

// var to hold number of losses
var lossCount = 0;

// function to reset each round
function reset() {
    score = 0;
    //empties the previous round's images from the containing div
    $('#photos').empty();

    //Generate the target number 
    targetNum = Math.floor((Math.random() * 98) + 13);
    $("#numToGuess").text(targetNum);
    $("#currentNum").text(score);

    // var to hold the possible values of images, between 1 and 12, creating an array of 4 integers
    var numOpts = [Math.floor(Math.random() * (12 - 1)) + 1,
        Math.floor(Math.random() * (12 - 1)) + 1,
        Math.floor(Math.random() * (12 - 1)) + 1,
        Math.floor(Math.random() * (12 - 1)) + 1
    ];

    // var to hold the possible images to which we assign values
    var imageOptions = ["assets/images/budda.png",
        "assets/images/virgin.png",
        "assets/images/goddess.png",
        "assets/images/ganesha.png"
    ]

    // for loop which assigns values to images, adds classes to the imgs, and puts the imgs into the empty div
    for (var i = 0; i < imageOptions.length; i++) {

        var imageGods = $("<img>");

        $("#photos").append(imageGods);

        imageGods.addClass("godsImage");

        imageGods.addClass("responsive-img");

        imageGods.attr("src", imageOptions[i]);

        imageGods.attr("data-godsValue", numOpts[i]);

    }

    // this function is responsible for the increasing current number score, and also handles wins and losses
    $(".responsive-img").on("click", function() {

        var godsValue = ($(this).attr("data-godsValue"));

        godsValue = parseInt(godsValue);

        score += godsValue;

        $("#currentNum").text(score);

        if (score >= targetNum) {

            if (score === targetNum) {
                var $toastContent = $('<span>You please me, child. My kingdom is yours.</span>').add($('<button class="btn-flat toast-action">Play Again</button>'));
                Materialize.toast($toastContent, 10000);
                console.log("win");
        
                // alert("You please me, child. My kingdom is yours.");
                winCount++;
                $("#wins").text(winCount)

            } else if (score > targetNum) {
                var $toastContent = $('<span>Come, my child. You have much to learn.</span>').add($('<button class="btn-flat toast-action">Play Again</button>'));
                Materialize.toast($toastContent, 10000);
                console.log("loss");

                // alert("Come, my child. You have much to learn.");
                lossCount = lossCount + 1;
                $("#losses").text(lossCount);
            }

            reset();

        }


    });
}

    

$(document).ready(function() {

    reset();

    $("#begin").on("click", function() {
        $("#intro-msg").addClass("hide");
        console.log("click");
    });



});