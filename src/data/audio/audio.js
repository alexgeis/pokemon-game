const audio = {
	map: new Howl({
		src: "./data/audio/map.wav",
		html5: true,
		volume: 0.1,
	}),
	initBattle: new Howl({
		src: "./data/audio/initBattle.wav",
		html5: true,
		volume: 0.01,
	}),
	battle: new Howl({
		src: "./data/audio/battle.mp3",
		html5: true,
		volume: 0.05,
	}),
	tackleHit: new Howl({
		src: "./data/audio/tackleHit.wav",
		html5: true,
		volume: 0.01,
	}),
	initFireball: new Howl({
		src: "./data/audio/initFireball.wav",
		html5: true,
		volume: 0.05,
	}),
	fireballHit: new Howl({
		src: "./data/audio/fireballHit.wav",
		html5: true,
		volume: 0.05,
	}),
	victory: new Howl({
		src: "./data/audio/victory.wav",
		html5: true,
		volume: 0.05,
	}),
};
