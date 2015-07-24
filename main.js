
winCombo = [7,56,448,73,146,292,273,84];
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOne = "X";
var playerTwo = "O";
var turns = 0;
var currentPlayer;

var getCurrentPlayer = function() {
    
  if(turns % 2 === 0) {
     currentPlayer = playerOne;
    console.log(currentPlayer);
  } else{ 
    currentPlayer = playerTwo;
     console.log(currentPlayer);
  }
}

function checkSelected(choice) {
 
   if(choice.hasClass('selected')) {
       alert("Already Selected!");
   }
}

function checkAppend(choice) {
   if(choice.hasClass('selected')) {
   return; 
   }else
   {
       choice.addClass('selected').append(currentPlayer);
   }
}

function checkScored(choice) {
    if(!choice.hasClass('scored')) {
    addScore(currentPlayer,choice) }
    else {
        return; }
}


var addScore = function(currentPlayer,choice) {
    var tdValue = Number(choice.attr('id'));
    console.log(currentPlayer);
    if(currentPlayer == playerOne) {
        playerOneScore += tdValue;
        choice.addClass('scored');
        console.log(playerOneScore); 
        turns++;
    
    }
    else {
        playerTwoScore += tdValue;
        choice.addClass('scored');
        console.log(playerTwoScore);
        turns++;
    }
   checkWin(); 
} 


$('td').click(function(){     
    getCurrentPlayer();
    var choice = $(this);
    checkSelected(choice);
    checkAppend(choice);  
    checkScored(choice);
   

    });




function checkWin() {

    for (var i = 0;i < winCombo.length; i += 1) {
    
        if ((winCombo[i] & playerOneScore) === winCombo[i]) {
            alert("X Wins!");
        } 
        else if ((winCombo[i] & playerTwoScore) === winCombo[i]) {
            alert("O Wins!");
    }


  }
}


