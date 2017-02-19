var computer;
var user;
var compPlay;
var myScore;
var compScore;


//Function to Generate Computer's Choice
function compPick() {
    computer = Math.round((Math.random()*9)+3);
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

function myPick() {
    compPick();
    user = $('img').attr('id');
    console.log(user);
  switch(user) {
      case "rock" :
        if (compPlay === "rock") {
          alert("Computer picked rock. It's a tie!");
          break;
        }
        if (compPlay === "paper") {
          alert("Computer picked paper. Paper covers rock. Computer wins!");
          break;
        }
        if (compPlay === "scissors") {
          alert("Computer picked scissors. Rock beats scissors. You win!");
          break;
        }
      case "paper" :
        if (compPlay === "rock") {
          alert("Computer chose rock. Paper covers rock. You win!");
          break;
          }
        else if (compPlay === "paper") {
          alert("Computer chose paper. It's a tie!");
          break;
          }
        else if (compPlay === "scissors") {
          alert("Computer chose scissors. Scissors cut papaer. Computer wins!");
          break;
          }
      case "scissors" :
        if (compPlay === "rock") {
          alert("Computer chose rock. Rock beats scissors. Computer wins!");
          break;
          }
        else if (compPlay === "paper") {
          alert("Computer chose paper. Scissors cut paper. You win!");
          break;
          }
        else if (compPlay === "scissors") {
          alert("Computer chose scissors. It's a tie!");
          break;
        };
    };
};