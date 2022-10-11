function log(input) {
	console.log(input);
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

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
		x: -1408,
		y: -1130,
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

function animate() {
	window.requestAnimationFrame(animate);
	// c.drawImage(image, -256, -698);
	background.draw();
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

	if (keys.down.pressed) background.position.y -= playerImage.height;
	else if (keys.up.pressed) background.position.y += playerImage.height;
	else if (keys.left.pressed) background.position.x += playerImage.height;
	else if (keys.right.pressed) background.position.x -= playerImage.height;
}
animate();

window.addEventListener("keydown", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = true;
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = true;
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = true;
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = true;
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
