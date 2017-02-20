var computer;
var user;
var compPlay;
var scoreMe=0;
var scoreComp=0;



//Function to Generate Computer's Choice
function compPick() {
    computer = Math.round((Math.random()*3)+1);
      if (computer == 1) {
          compPlay = "rock";
      }
      else if (computer == 2) {
          compPlay = "paper";
      }
      else {
          compPlay = "scissors";
    } 
}

//Functions for updating the Scores
function compWin() {
    ++scoreComp;
    $('#compScore').html(scoreComp);
}
function myWin() {
    ++scoreMe;
    $('#myScore').html(scoreMe);
}

//Function calls compPick() to decide winner, alerts results and runs compWin() or myWin() to update score.

function myPick(user) {
    compPick();
  switch(user) {
      case "rock" :
        if (compPlay === "rock") {
          alert("Computer picked rock. It's a tie!");
          break;
        }
        if (compPlay === "paper") {
          alert("Computer picked paper. Paper covers rock. Computer wins!");
          compWin();
          break;
        }
        if (compPlay === "scissors") {
          alert("Computer picked scissors. Rock beats scissors. You win!");
          myWin();
          break;
        }
      case "paper" :
        if (compPlay === "rock") {
          alert("Computer chose rock. Paper covers rock. You win!");
          myWin();
          break;
          }
        else if (compPlay === "paper") {
          alert("Computer chose paper. It's a tie!");
          break;
          }
        else if (compPlay === "scissors") {
          alert("Computer chose scissors. Scissors cut paper. Computer wins!");
          compWin();
          break;
          }
      case "scissors" :
        if (compPlay === "rock") {
          alert("Computer chose rock. Rock beats scissors. Computer wins!");
          compWin();
          break;
          }
        else if (compPlay === "paper") {
          alert("Computer chose paper. Scissors cut paper. You win!");
          myWin();
          break;
          }
        else if (compPlay === "scissors") {
          alert("Computer chose scissors. It's a tie!");
          break;
        };
    };
};

//RESET BUTTON
$("#clearOut").click( function() {
    $("#myScore").html(0);
    $("#compScore").html(0);
});