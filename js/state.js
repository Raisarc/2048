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

game.state = {
	score: 140,
	lastMove: "up",
	grid: [
		[8, 0, 64, 32],
		[2, 0, 32, 0],
		[0, 0, 2, 0],
		[0, 0, 0, 0]
	]
}

function moveRight() {
	// ver se tem quadradinho do mesmo valor que possa ser fundido + fundir
	// ver se tem quadradinho pra mover + mover
	for (var i = 3; i >= 0; i--) {
		var row = game.state.grid[i];
		var newRow = [0, 0, 0, 0];

		//só vai até o penultimo tile, pq o ultimo tile (k=0) já foi comparado com todos
		for (var j = 3; j > 0; j--) {			//comparar com outros tiles da linha
			if(row[j] === 0)
				continue;
			for (k = j-1; k >= 0; k--) {
				
			}
		}
	}
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
				continue;
			}
			game.tiles[i][j].innerHTML = game.state.grid[i][j];		// atualizar a "lousa" com a "ideia do professor"
		}
	}
}

window.onload = function () {								//espera carregar tudo que precisa pra mandar ver
	init();
	updateTiles();
}