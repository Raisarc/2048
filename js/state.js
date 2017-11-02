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
			game.tiles[i][j].innerHTML = game.state.grid[i][j];
		}
	}
}

window.onload = function () {								//espera carregar tudo que precisa pra mandar ver
	init();
	updateTiles();
}