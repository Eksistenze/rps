function getComputerChoice() {
	let choiceNum = Math.floor(Math.random() * 3);
	switch (choiceNum) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (typeof playerSelection != "string") {
		return "Please input 'Rock', 'Paper' or 'Scissors'";
	} else {
		let pChoice = playerSelection.toLowerCase();
		let pChoiceCap = pChoice.charAt(0).toUpperCase() + pChoice.slice(1);
		let cChoiceCap =
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
		let win = "You win!  " + pChoiceCap + " beats " + cChoiceCap + ".";
		let lose =
			"Loser!  " + cChoiceCap + " beats " + pChoiceCap + " every time.";
		if (pChoice === computerSelection) {
			return "It's a tie!  You both chose " + pChoice;
		}
		switch (pChoice) {
			case "rock": {
				if (computerSelection === "scissors") {
					return win;
				}
				return lose;
			}
			case "paper": {
				if (computerSelection === "rock") {
					return win;
				}
				return lose;
			}
			case "scissors": {
				if (computerSelection === "paper") {
					return win;
				}
				return lose;
			}
			default:
				return "Please input 'Rock', 'Paper' or 'Scissors'";
		}
	}
}

/*function playRound(playerSelection, computerSelection) {
	if (typeof playerSelection === "string") {
		let pChoice = playerSelection.toLowerCase();
		let pChoiceCap = pChoice.charAt(0).toUpperCase() + pChoice.slice(1);
		let cChoiceCap =
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
		let win = "You win!  " + pChoiceCap + " beats " + cChoiceCap + ".";
		let lose =
			"Loser!  " + cChoiceCap + " beats " + pChoiceCap + " every time.";
		if (pChoice === computerSelection) {
			return "It's a tie!  You both chose " + pChoice;
		}
	} else {
		return "Please input 'Rock', 'Paper' or 'Scissors'";
	}

	switch (pChoice) {
		case "rock": {
			if (computerSelection === "scissors") {
				return win;
			}
			return lose;
		}
		case "paper": {
			if (computerSelection === "rock") {
				return win;
			}
			return lose;
		}
		case "scissors": {
			if (computerSelection === "paper") {
				return win;
			}
			return lose;
		}
	}
}
*/

function game() {
	let count = {
		wins: 0,
		ties: 0,
		losses: 0,
	};
	for (i = 0; i < 5; i++) {
		let cChoice = getComputerChoice();
		let pChoice = prompt("Choose rock paper or scissors");
		let outcome = playRound(pChoice, cChoice);
		console.log(outcome);
		if (outcome.search("Please") != -1) {
			i--;
		} else if (outcome.search("win") != -1) {
			count["wins"] += 1;
		} else if (outcome.search("Lose") != -1) {
			count["losses"] += 1;
		} else if (outcome.search("tie") != -1) {
			count["ties"] += 1;
			i--;
		}
	}
	if (count["wins"] > count["losses"]) {
		console.log(
			`You won with a score of ${count["wins"]} to ${count["losses"]} and ${count["ties"]}`
		);
	} else {
		console.log(
			`You lost with a score of ${count["wins"]} to ${count["losses"]} and ${count["ties"]} ties`
		);
	}
	return;
}

game();
