console.log("Hello World");

function getComputerChoice() {
    let compNumb = Math.floor(Math.random() * 3);

    if (compNumb == 0) {
        console.log('Computer choice is Paper');
    }
        else if (compNumb == 1) {
            console.log('Computer choice is Rock');
        }
        else {
            console.log('Computer choice is Scissors');
        }

}
getComputerChoice();

function getHumanChoice () {
    let HumNumb = console.log(prompt('Choose Paper, Rock, or Scissors?'));

   // if (HumNumb === 'Paper') 
}
getHumanChoice();