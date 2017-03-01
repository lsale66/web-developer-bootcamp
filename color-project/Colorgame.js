var numSquares = 6;
var colors = [];
var colorWinner;
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 


function init () {
	//mode button event listeners
	setupModebuttons();
	setupSquares ();
	reset();
}


function setupModebuttons () {
	for (var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.innerHTML === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }

			reset ();
		});
	}
}

function setupSquares () {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//WINNER
			if(clickedColor === colorWinner) {
				messageDisplay.textContent = "Correct";
				changeColors(colorWinner);
				h1.style.backgroundColor = colorWinner;
				resetButton.innerHTML = "Play Again?";
			//LOSER
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random winner
	colorWinner = pickColor();
	//change colorDisplay (top of the page)to match the color winner
	colorDisplay.textContent = colorWinner;
	//change the colors of the squares on the page 
	for (var i = 0; i < squares.length; i++) {
		//add colors to squares
		//if there's only 3 colors in the array, hide the other 3 (easy mode)
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelBlue";
	messageDisplay.textContent = "";
	resetButton.innerHTML = "New Colors";
} 


// //easy button
// easyButton.addEventListener("click", function() {
// 	easyButton.classList.toggle("selected");
// 	hardButton.classList.toggle("selected");
// 	numSquares = 3;
// 	//generate 3 new random colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new color winner
// 	colorWinner= pickColor();
// 	//display the new winner at the top of the page
// 	colorDisplay.textContent = colorWinner;
// 	messageDisplay.textContent = "";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display ="none";
// 		}

// 	}
// });

// //hard button
// hardButton.addEventListener("click", function() {
// 	easyButton.classList.toggle("selected");
// 	hardButton.classList.toggle("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	//pick a new color winner
// 	colorWinner= pickColor();
// 	//display the new winner at the top of the page
// 	colorDisplay.textContent = colorWinner;
// 	messageDisplay.textContent = "";
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display ="block";
// 		}
// });




function changeColors(color) {
	//loop through all the squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
	
}

//return the randomly generated winning color
function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

//runs a loop & returns an array of 3 or 6 random rgb colors
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//the random color generator
function randomColor () {
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

//Reset button
resetButton.addEventListener("click", function() {
	reset();

;})


