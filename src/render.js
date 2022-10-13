// asset imports
import backgroundImageUrl from "./img/game_assets/pokemonGameMap400.png";
import foregroundImageUrl from "./img/game_assets/pokemonGameMapFOREGROUND.png";
import playerDownImageUrl from "./img/game_assets/playerDown.png";
import playerUpImageUrl from "./img/game_assets/playerUp.png";
import playerLeftImageUrl from "./img/game_assets/playerLeft.png";
import playerRightImageUrl from "./img/game_assets/playerRight.png";
import { audio } from "./data/audio/audio";
// map / collisions / battle areas
import { battleZonesData } from "./data/battleData";
import { collisions } from "./data/collisionData";
// battle logic
import { initBattle, animateBattle } from "./battleScene";
// classes
import { Sprite, Boundary } from "./classes";

const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

const offset = {
	x: -1408,
	y: -1130,
};

// collisions / boundaries
let collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
	collisionsMap.push(collisions.slice(i, i + 70));
}
const boundaries = [];
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

// battle areas
const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
	battleZonesMap.push(battleZonesData.slice(i, i + 70));
}

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
const mvmtDistance = playerDownImage.height / 8;

const player = new Sprite({
	position: {
		// place in center of canvas, center of player
		x: canvas.width / 2 - playerWidth / 8,
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

export {
	player,
	background,
	foreground,
	boundaries,
	battleZones,
	playerDownImage,
};
