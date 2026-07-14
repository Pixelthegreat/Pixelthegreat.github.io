const elem_canvas = document.getElementById('canvas');
const context = elem_canvas.getContext('2d');

var running = false;

var elements = [];
var copy_elements = [];

for (let i = 0; i < 16 * 16; i++) {
	elements.push(false);
	copy_elements.push(false);
}

/* get element */
function getElement(x, y) {

	if (x < 0 || x >= 16 || y < 0 || y >= 16)
		return false;
	return elements[y * 16 + x];
}

/* update game state */
function updateGame() {

	if (!running) return;

	for (let y = 0; y < 16; y++) {
		for (let x = 0; x < 16; x++) {

			let state = getElement(x, y);
			let neighbors = 0;

			neighbors += getElement(x-1, y);
			neighbors += getElement(x-1, y-1);
			neighbors += getElement(x, y-1);
			neighbors += getElement(x+1, y-1);
			neighbors += getElement(x+1, y);
			neighbors += getElement(x+1, y+1);
			neighbors += getElement(x, y+1);
			neighbors += getElement(x-1, y+1);

			if (state) {
				if (neighbors < 2 || neighbors >= 4)
					state = false;
			}
			else if (neighbors == 3) state = true;

			copy_elements[y * 16 + x] = state;
		}
	}
	for (let i = 0; i < 16 * 16; i++)
		elements[i] = copy_elements[i];
}

/* draw game screen */
function drawGame() {

	context.fillStyle = 'black';
	context.fillRect(0, 0, 512, 512);
	context.fillStyle = 'white';

	for (let y = 0; y < 16; y++) {
		for (let x = 0; x < 16; x++) {
			if (getElement(x, y))
				context.fillRect(x * 32, y * 32, 32, 32);
		}
	}
}
drawGame();

setInterval(updateGame, 500);
setInterval(drawGame, 500);

/* process click event */
elem_canvas.addEventListener('click', (e) => {

	let x = Math.floor(e.offsetX / 32);
	let y = Math.floor(e.offsetY / 32);

	let state = elements[y * 16 + x];
	elements[y * 16 + x] = !state;

	drawGame();
});

/* start and stop game */
function startGame() {
	running = true;
	console.log('Game started');
}
function stopGame() {
	running = false;
	console.log('Game stopped');
}
