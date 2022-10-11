const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image(""); // creates HTML img element
image.src = "./game_assets/pokemonGameMap.png";

image.onload = () => {
	c.drawImage(image, 0, 0); // draw image once it loads
};

log(c);
function log(input) {
	console.log(input);
}
