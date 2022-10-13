import mapUrl from "./map.wav";
import initBattleUrl from "./initBattle.wav";
import battleUrl from "./battle.mp3";
import tackleHitUrl from "./tackleHit.wav";
import initFireballUrl from "./initFireball.wav";
import fireballHitUrl from "./fireballHit.wav";
import victoryUrl from "./victory.wav";

const audio = {
	map: new Howl({
		src: mapUrl,
		html5: true,
		volume: 0.1,
	}),
	initBattle: new Howl({
		src: initBattleUrl,
		html5: true,
		volume: 0.01,
	}),
	battle: new Howl({
		src: battleUrl,
		html5: true,
		volume: 0.05,
	}),
	tackleHit: new Howl({
		src: tackleHitUrl,
		html5: true,
		volume: 0.01,
	}),
	initFireball: new Howl({
		src: initFireballUrl,
		html5: true,
		volume: 0.05,
	}),
	fireballHit: new Howl({
		src: fireballHitUrl,
		html5: true,
		volume: 0.05,
	}),
	victory: new Howl({
		src: victoryUrl,
		html5: true,
		volume: 0.05,
	}),
};

// play audio once user interacts with page
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

export { audio };
