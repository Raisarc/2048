var game = {
	tiles: [
		[],
		[],
		[],
		[]
	],
	state: {
		score: 0,
		lastMove: null,
		grid: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}
}


function moveRight() {
	// ver se tem quadradinho do mesmo valor que possa ser fundido + fundir
	// ver se tem quadradinho pra mover + mover
	for (var i = 3; i >= 0; i--) {
		var row = game.state.grid[i];
		var newRow = [0, 0, 0, 0];
		newRow[0] = row[0];

		//só vai até o penultimo tile, pq o ultimo tile (k=0) já foi comparado com todos
		for (var j = 3; j > 0; j--) {			//comparar com outros tiles da linha
			// console.log("=========")
			// console.log("j:", j);
			// console.log("row[j]", row[j]);
			if(row[j] === 0)
				continue;
			for (k = j-1; k >= 0; k--) {
				// console.log("k:", k);
				// console.log("row[k]", row[k]);
				if (row[k] === 0) {
					continue;
				}
				if (row[j] !== row[k]) {
					// caso em que temos que parar
					newRow[j] = row[j];
					break;
				}
				if (row[j] === row[k]) {
					// caso em que temos que fundir
					newRow[j] = row[j] + row[k]; // mesma coisa que newRow[j] = 2*row[j]
					j = k;
					if (k === 0) {
						newRow[0] = 0;
					}
					break;

					// Por que j = k ? Resposta abaixo, só que não, mais ou menos, enfim...
					//                              k       j
					//                              j
					//                      j
					//  row        [4]     [4]     [4]     [4]
					//  newrow     [0]     [8]     [0]     [8]

					//  row        [4]     [4]     [4]     [2]
					//  newrow     [0]     [0]     [0]     [0]

					//  row        [2]     [2]     [0]     [4]
				}
			}
			// console.log(newRow);
		}

		var rightestAvailablePosition = 3;
		for (var j = 3; j >= 0; j--) {
			if (newRow[j] === 0) {
				continue;
			}

			if (j === rightestAvailablePosition) {
				rightestAvailablePosition--;
				continue;
			}

			newRow[rightestAvailablePosition] = newRow[j];
			rightestAvailablePosition--;
			newRow[j] = 0;
		}

		// 4 0 2 0
		//       ^
		// 4 0 0 2
		//     ^
		// 0 0 4 2
		//   ^

		game.state.grid[i] = newRow;
	}

	updateTiles();
}

function listenKeyboard() {
	window.addEventListener("keydown", function (event) {

	switch (event.key) {
		case "ArrowRight":
			console.log("Alguem apertou a seta da direita!");
			moveRight();
		break;
		default:
		return; // Quit when this doesn't handle the key event.
	}

	// Cancel the default action to avoid it being handled twice
	event.preventDefault();
	}, true);
}

function init() {
	var htmlTiles = document.getElementsByClassName("tile"); //agrupar os elementos html vivos numa matriz chamada tiles
															 //mais facil de acessar os tiles
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			game.tiles[i].push(htmlTiles[4*i+j]);
		}
	}
}

function updateTiles() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (game.state.grid[i][j] === 0) {
				game.tiles[i][j].innerHTML = "";		            // atualizar a "lousa" com a "ideia do professor"
				continue;
			}
			game.tiles[i][j].innerHTML = game.state.grid[i][j];		// atualizar a "lousa" com a "ideia do professor"
		}
	}
}

window.onload = function () {								//espera carregar tudo que precisa pra mandar ver
	init();
	listenKeyboard();

	game.state = {
		score: 140,
		lastMove: "up",
		grid: [
			[8, 0, 64, 32],
			[2, 2, 32, 32],
			[4, 0, 0, 2],
			[2, 2, 0, 0]
		]
	}
	updateTiles();
}
