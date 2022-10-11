function log(input) {
	console.log(input);
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

let collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
	collisionsMap.push(collisions.slice(i, i + 70));
}

class Boundary {
	// 48 px = 400% zoom on our original 12px x 12px grids
	static width = 48;
	static height = 48;
	constructor({ position }) {
		this.position = position;
		this.width = 48;
		this.height = 48;
	}

	draw() {
		c.fillStyle = "red";
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

const boundaries = [];
const offset = {
	x: -1408,
	y: -1130,
};

collisionsMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			boundaries.push(
				new Boundary({
					position: {
						x: j * Boundary.width + offset.x,
						y: i * Boundary.height + offset.y,
					},
				})
			);
		}
	});
});

const image = new Image(); // creates HTML img element
image.src = "./game_assets/pokemonGameMap400.png";

const playerImage = new Image();
playerImage.src = "./game_assets/playerDown.png";

class Sprite {
	constructor({ position, velocity, image }) {
		this.position = position;
		this.image = image;
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

const background = new Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: image,
});

const keys = {
	up: {
		pressed: false,
	},
	down: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
	right: {
		pressed: false,
	},
};

const testBoundary = new Boundary({
	position: {
		x: 400,
		y: 400,
	},
});

const movables = [background, testBoundary];
function animate() {
	window.requestAnimationFrame(animate);
	background.draw();
	// boundaries.forEach((boundary) => boundary.draw());
	testBoundary.draw();
	c.drawImage(
		playerImage,
		// image crop arguments
		0,
		0,
		playerImage.width / 4,
		playerImage.height,
		// onscreen position coordinates
		canvas.width / 2 - playerImage.width / 4 / 2,
		canvas.height / 2 - playerImage.height / 2,
		// onscreen render area
		playerImage.width / 4,
		playerImage.height
	);

	if (keys.down.pressed && lastKey === "down") {
		movables.forEach((movable) => {
			movable.position.y -= playerImage.height / 4 / 2;
		});
		// background.position.y -= playerImage.height / 4 / 2;
	} else if (keys.up.pressed && lastKey === "up") {
		movables.forEach((movable) => {
			movable.position.y += playerImage.height / 4 / 2;
		});
	} else if (keys.left.pressed && lastKey === "left") {
		movables.forEach((movable) => {
			movable.position.x += playerImage.height / 4 / 2;
		});
	} else if (keys.right.pressed && lastKey === "right") {
		movables.forEach((movable) => {
			movable.position.x -= playerImage.height / 4 / 2;
		});
	}
}
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = true;
		lastKey = "down";
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = true;
		lastKey = "right";
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = true;
		lastKey = "left";
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = true;
		lastKey = "up";
	}
});

window.addEventListener("keyup", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = false;
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = false;
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = false;
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = false;
	}
});
