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
        console.log('You Lose! Paper beats Rock');
    }
    else if (compNumb == 'Paper' && HumNumb == 'Scissors') {
        console.log('You Win! Scissors beats Paper');
    }
    else if (compNumb == 'Rock' && HumNumb == 'Scissors') {
        console.log('You Lose! Rock beats Scissors');
    }
    else if (compNumb == 'Rock' && HumNumb == 'Paper') {
        console.log('You Win! Paper beats Rock');
    }
    else if (compNumb == 'Scissors' && HumNumb == 'Rock') {
        console.log('You Win! Rock beats Scissors');
    }
    else if (compNumb == 'Scissors' && HumNumb == 'Paper') {
        console.log('You Lose! Scissors beats Paper');}
    else {
        console.log('Tie game! Try again');
    }
    }
playRound(HumNumb, compNumb);
