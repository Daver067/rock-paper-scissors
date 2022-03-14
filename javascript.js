let compChoice = 0;
let choice = 0;
let yourScore = 0;
let compScore = 0;
let roundsPlayed = 0;
const array = ["Rock", "Paper", "Scissors"]

const youPicked = document.querySelector('.youPicked');
const yourScorePara = document.getElementById('yourScore');
const compScorePara = document.getElementById('compScore');
const result = document.getElementById('result');
const bottom = document.getElementById('bottom');

const yourScoreBoard = document.getElementById('yourScoreBoard');
const compScoreBoard = document.getElementById('compScoreBoard');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {vs(0)});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {vs(1)});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {vs(2)});

const erase2 = document.querySelector('.reset');
erase2.addEventListener('click', () => {erase()});


function compRandom(){ // generates random number from 0-2 for computers choice.
    let compChoice = Math.floor(Math.random() *10);
    if (compChoice >= 3) {
        return compRandom();
    }
    else { 
        return compChoice;}
}


function checkTie(){ //checks to see if both inputs were the same and lowers the round counter by 1
    if (compChoice == choice) {
        --roundsPlayed;
        bottom.appendChild(result).textContent = "It was a draw";
        return;
    }
    else return;
}


function checkWin(){ //checks for player win conditions and updates scoreboard
    if ((choice == 0 && compChoice ==2) || (choice == 1 && compChoice == 0) || (choice == 2 && compChoice == 1)) {
        ++yourScore;
        yourScoreBoard.appendChild(yourScorePara).textContent = `${yourScore}`;
        bottom.appendChild(result).textContent = "You Won!!";
        return;
    }
    else return;
}


function checkLoss(){ //checks for player loss conditions and updates scoreboard
    if ((choice == 0 && compChoice ==1) || (choice== 1 && compChoice == 2) || (choice == 2 && compChoice == 0)) {
        ++compScore;
        compScoreBoard.appendChild(compScorePara).textContent = `${compScore}`;
        bottom.appendChild(result).textContent = "You Lost :(";
        return;
    }
else return;
}

function endGame(){ //checks to see if the first to 5 has happened
    if (yourScore === 5) {
        alert("You were the first to 5 points! Congratulations!!! The score will be reset, please play again!");
        erase();
    }
    else if (compScore === 5) {
        alert("The computer was the first to 5 points! Sorry!!! The score will be reset, please play again!");
        erase();
    }
    else return;
}

function erase(){ // clears scoreboard after the game has ended
    compChoice = 0;
    choice = 0;
    yourScore = 0;
    compScore = 0;
    roundsPlayed = 0;
    compScoreBoard.appendChild(compScorePara).textContent = `${compScore}`;
    yourScoreBoard.appendChild(yourScorePara).textContent = `${yourScore}`;
    bottom.appendChild(youPicked).textContent = ''
    bottom.appendChild(result).textContent = ''
}



function vs(currentChoice){ // comparing player choice to computer choice and deciding winner.
    choice = currentChoice;
    compChoice = compRandom();
    checkTie();
    checkWin();
    checkLoss()
    bottom.appendChild(youPicked).textContent = `You picked ${array[choice]} and the computer picked ${array[compChoice]}`;
    endGame();
    }
    

