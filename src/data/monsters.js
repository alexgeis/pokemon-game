import { attacks } from "./attacks";

import embyImgUrl from "../img/game_assets/embySprite.png";
import draggleImgUrl from "../img/game_assets/draggleSprite.png";

export const monstersData = {
	Emby: {
		position: {
			x: 280,
			y: 325,
		},
		image: {
			src: embyImgUrl,
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		name: "Emby",
		attacks: [attacks.Tackle, attacks.Fireball],
	},
	Draggle: {
		position: {
			x: 800,
			y: 100,
		},
		image: {
			src: draggleImgUrl,
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		isEnemy: true,
		name: "Draggle",
		attacks: [attacks.Tackle, attacks.Fireball],
	},
};
