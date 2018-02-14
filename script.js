

var newGameButton = document.getElementById('js-newGameButton');
newGameButton.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',
	player = {
		name: 'Robert',
		score: 0	
	},
	computer = {
		score: 0
	};

var newGameElement = document.getElementById('js-newGameElement'),
	pickElement = document.getElementById('js-playerPickElement'),
	resultsElement = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElement.style.display = 'none';
        pickElement.style.display = 'block';
        resultsElement.style.display = 'block';
      break;
    case 'ended':
        newGameButton.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElement.style.display = 'block';
        pickElement.style.display = 'none';
        resultsElement.style.display = 'none';
  }
}

setGameElements();

var playerPointsElement = document.getElementById('js-playerPoints'),
	playerNameElement = document.getElementById('js-playerName'),
	computerPointsElement = document.getElementById('js-computerPoints');



function newGame() {
	player.name = prompt('Enter your name');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		
		playerNameElement.innerHTML = player.name;
		setGamePoints();
	}
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElement = document.getElementById('js-playerPick'),
	computerPickElement = document.getElementById('js-computerPick'),
	playerResultElement = document.getElementById('js-playerResult'),
	computerResultElement = document.getElementById('js-computerResult');

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElement.innerHTML = playerPick;
	computerPickElement.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElement.innerHTML = computerResultElement.innerHTML = '';

	var winnerIs = 'player';

		if (playerPick == computerPick) {
			winnerIs = 'none';

		} else if  (
			(computerPick == 'rock' && playerPick == 'scissors') ||
			(computerPick == 'scissors' && playerPick == 'paper') ||
			(computerPick == 'paper' && playerPick == 'rock')) {

			winnerIs = 'computer';
			}
		
		if (winnerIs == 'player') {
			playerResultElement.innerHTML = "Win!";
			player.score++;
		} else if (winnerIs == 'computer') {
			computerResultElement.innerHTML = "Win!";
			computer.score++;
		}
		
		setGamePoints();
}


function setGamePoints() {
	playerPointsElement.innerHTML = player.score;
	computerPointsElement.innerHTML = computer.score;
console.log(player.score);
}
