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

// draw map and assets once main map loads
image.onload = () => {
	c.drawImage(image, -256, -698);
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
};
