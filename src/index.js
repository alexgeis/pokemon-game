import "./style.css";
import backgroundImageUrl from "./img/game_assets/pokemonGameMap400.png";
import foregroundImageUrl from "./img/game_assets/pokemonGameMapFOREGROUND.png";
import playerDownImageUrl from "./img/game_assets/playerDown.png";
import playerUpImageUrl from "./img/game_assets/playerUp.png";
import playerLeftImageUrl from "./img/game_assets/playerLeft.png";
import playerRightImageUrl from "./img/game_assets/playerRight.png";
import { initBattle, animateBattle } from "./battleScene";
import { Sprite, Boundary } from "./classes";
import { audio } from "./data/audio/audio";
import { battleZonesData } from "./data/battleData";
import { collisions } from "./data/collisionData";

function log(input) {
	console.log(input);
}

const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

let collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
	collisionsMap.push(collisions.slice(i, i + 70));
}

let battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
	battleZonesMap.push(battleZonesData.slice(i, i + 70));
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

const battleZones = [];
battleZonesMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			battleZones.push(
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
image.src = backgroundImageUrl;

const foregroundImage = new Image();
foregroundImage.src = foregroundImageUrl;

const playerDownImage = new Image();
playerDownImage.src = playerDownImageUrl;
const playerUpImage = new Image();
playerUpImage.src = playerUpImageUrl;
const playerLeftImage = new Image();
playerLeftImage.src = playerLeftImageUrl;
const playerRightImage = new Image();
playerRightImage.src = playerRightImageUrl;

const playerWidth = 192;
const playerHeight = 68;
const mvmtDistance = playerDownImage.height / 4 / 2;

const player = new Sprite({
	position: {
		x: canvas.width / 2 - playerWidth / 4 / 2,
		y: canvas.height / 2 - playerHeight / 2,
	},
	image: playerDownImage,
	frames: {
		max: 4,
		hold: 10,
	},
	sprites: {
		up: playerUpImage,
		down: playerDownImage,
		left: playerLeftImage,
		right: playerRightImage,
	},
});

const background = new Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: image,
});

const foreground = new Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: foregroundImage,
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

const movables = [background, foreground, ...boundaries, ...battleZones];

function shapeCollision({ shape1, shape2 }) {
	return (
		shape1.position.x + shape1.width >= shape2.position.x &&
		shape1.position.x <= shape2.position.x + shape2.width &&
		shape1.position.y + shape1.height * 0.7 >= shape2.position.y &&
		shape1.position.y <= shape2.position.y + shape2.height * 0.2
	);
}

export const battle = {
	initiated: false,
};

export function animate() {
	const animationId = window.requestAnimationFrame(animate);
	background.draw();
	boundaries.forEach((boundary) => {
		boundary.draw();
	});
	battleZones.forEach((battleZone) => {
		battleZone.draw();
	});
	player.draw();
	foreground.draw();

	// MOVEMENT //
	let moving = true;
	player.animate = false;

	// Battle activation
	if (battle.initiated) return; // skip battle activation if in battle

	if (
		keys.up.pressed ||
		keys.down.pressed ||
		keys.left.pressed ||
		keys.right.pressed
	) {
		for (let i = 0; i < battleZones.length; i++) {
			const battleZone = battleZones[i];
			const overlapX =
				Math.min(
					player.position.x + player.width,
					battleZone.position.x + battleZone.width
				) - Math.max(player.position.x, battleZone.position.x);
			const overlapY =
				Math.min(
					player.position.y + player.height,
					battleZone.position.y + battleZone.height
				) - Math.max(player.position.y, battleZone.position.y);
			const overlappingArea = overlapX * overlapY;

			if (
				shapeCollision({
					shape1: player,
					shape2: battleZone,
				}) &&
				overlappingArea > (player.width * player.height) / 2 &&
				Math.random() < 0.02
			) {
				// deactive current animation loop
				window.cancelAnimationFrame(animationId);

				audio.map.stop();
				audio.initBattle.play();
				audio.battle.play();

				battle.initiated = true;
				gsap.to("#overlapWrap", {
					opacity: 1,
					repeat: 3,
					yoyo: true,
					duration: 0.4,
					onComplete() {
						gsap.to("#overlapWrap", {
							opacity: 1,
							duration: 0.4,
							onComplete() {
								// active new animation loop
								initBattle();
								animateBattle();
								gsap.to("#overlapWrap", {
									opacity: 0,
									duration: 0.4,
								});
							},
						});
					},
				});
				break;
			}
		}
	}

	if (keys.down.pressed && lastKey === "down") {
		player.animate = true;
		player.image = player.sprites.down;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y - playerDownImage.height / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y -= playerDownImage.height / 4 / 2;
			});
		}
		// background.position.y -= playerDownImage.height / 4 / 2;
	} else if (keys.up.pressed && lastKey === "up") {
		player.animate = true;
		player.image = player.sprites.up;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y + playerDownImage.height / 4 / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.left.pressed && lastKey === "left") {
		player.animate = true;
		player.image = player.sprites.left;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x + playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.right.pressed && lastKey === "right") {
		player.animate = true;
		player.image = player.sprites.right;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x - playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x -= playerDownImage.height / 4 / 2;
			});
		}
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

let clicked = false;
window.addEventListener("click", () => {
	if (!clicked) {
		audio.map.play();
		clicked = true;
	}
});
window.addEventListener("keydown", () => {
	if (!clicked) {
		audio.map.play();
		clicked = true;
	}
});
