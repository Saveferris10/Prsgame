let compNumb = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if (compNumb == 0) {
        console.log('Computer choice is Paper');
        return compNumb = 'Paper'
    }
        else if (compNumb == 1) {
            console.log('Computer choice is Rock');
        return compNumb = 'Rock'
        }
        else {
            console.log('Computer choice is Scissors');
        return compNumb = 'Scissors'
        }
}
getComputerChoice();

//function getHumanChoice () {
    let HumNumb = prompt('Choose Paper, Rock, or Scissors?');
    console.log(HumNumb);
//}
//getHumanChoice();


let humanScore = 0;
let computerScore = 0;

function playRound(HumNumb, compNumb) {
    if (compNumb == 'Paper' && HumNumb == 'Rock') {
        alert('You Lose! Paper beats Rock');
        computerScore++;
        return computerScore;
    }
    else if (compNumb == 'Paper' && HumNumb == 'Scissors') {
        alert('You Win! Scissors beats Paper');
        humanScore++;
        return humanScore;
    }
    else if (compNumb == 'Rock' && HumNumb == 'Scissors') {
        alert('You Lose! Rock beats Scissors');
        computerScore++
        return computerScore;
    }
    else if (compNumb == 'Rock' && HumNumb == 'Paper') {
        alert('You Win! Paper beats Rock');
        humanScore++;
        return humanScore;
    }
    else if (compNumb == 'Scissors' && HumNumb == 'Rock') {
        alert('You Win! Rock beats Scissors');
        humanScore++;
        return humanScore;
    }
    else if (compNumb == 'Scissors' && HumNumb == 'Paper') {
        alert('You Lose! Scissors beats Paper');
        computerScore++;
        return computerScore;
    }
    else {
        alert('Tie game! Try again');
    }
    }
playRound(HumNumb, compNumb);

function playGame() {
    humanScore;
    computerScore;
    for (i = 0; i <= 5; i++);
    return playRound;
};
playGame(playRound);
console.log('Your score is ' + humanScore);
console.log('The computer score is ' + computerScore);
