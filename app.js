let gameMode = 0;
let currR = 0;
let currG = 0;
let currB = 0;
let currLocation = 0;

let blocks = document.getElementsByClassName('color');
for (let i = 0; i < blocks.length; i++) {
	blocks[i].addEventListener('click', checkWin);
	console.log(blocks[i]);
}
document.getElementById('easyBtn').addEventListener('click', setEasyMode);
document.getElementById('hardBtn').addEventListener('click', setHardMode);
document.getElementById('newColors').addEventListener('click', newGame);
setEasyMode();
newGame();

function newGame() {
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].classList.remove('fadeOut');
	}
	document.getElementById('title').style.background = '#3498db';

	currR = Math.floor(Math.random() * 255);
	currG = Math.floor(Math.random() * 255);
	currB = Math.floor(Math.random() * 255);

	document.getElementById('r').textContent = currR;
	document.getElementById('g').textContent = currG;
	document.getElementById('b').textContent = currB;

	let colors = 0;
	if (gameMode == 0) {
		colors = 3;
		currLocation = Math.floor(Math.random() * 3 + 1);
	} else {
		colors = 6;
		currLocation = Math.floor(Math.random() * 6 + 1);
	}
	for (let i = 1; i <= colors; i++) {
		if (i == currLocation) {
			document.getElementById(`color${i}`).style.background = `rgb(${currR}, ${currG}, ${currB})`;
		} else {
			document.getElementById(`color${i}`).style.background = `rgb(${Math.floor(
				Math.random() * 255
			)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
		}
	}
}

function checkWin() {
	let clickedColor = this.style.background;
	var vals = clickedColor.substring(clickedColor.indexOf('(') + 1, clickedColor.length - 1).split(', ');

	if (vals[0] == currR && vals[1] == currG && vals[2] == currB) {
		document.getElementById('message').textContent = 'Correct!';
		for (let i = 0; i < blocks.length; i++) {
			blocks[i].style.background = `rgb(${currR}, ${currG}, ${currB})`;
		}
		document.getElementById('title').style.background = `rgb(${currR}, ${currG}, ${currB})`;
		document.getElementById('newColors').textContent = 'TRY AGAIN?';
	} else {
		document.getElementById('message').textContent = 'Try Again';
		this.classList.add('fadeOut');
	}
}

function setEasyMode() {
	gameMode = 0;
	document.getElementById('color4').classList.add('hide');
	document.getElementById('color5').classList.add('hide');
	document.getElementById('color6').classList.add('hide');
	newGame();
}

function setHardMode() {
	gameMode = 1;
	document.getElementById('color4').classList.remove('hide');
	document.getElementById('color5').classList.remove('hide');
	document.getElementById('color6').classList.remove('hide');
	newGame();
}
