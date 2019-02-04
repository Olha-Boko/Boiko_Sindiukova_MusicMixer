(() => {
	console.log('fired');

	//set up the puzzle and boards
	//need a reference to each piec that we want to create

	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces"); 
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//functions go in the middle 
	function createPuzzlePieces(pictureIndex) {
		//generate images here -> need to make 4 (top left, right, bottom left, bottom right)
		//debugger; 

		//loop throuth the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}




function resetPuzzlePieces () {
	//change the current puzzle, regenerate the pieces
	//debugger;
	//clean out the puzzle pieces div
	piecesBoard.innerHTML = "";
	

	createPuzzlePieces(this.dataset.puzzleref);
}

puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));


//call this function to set up / generate the pieces on load
createPuzzlePieces(0);


})();




