const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/game_assets/battleBackground.png";
const battleBackground = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
});

const draggle = new Sprite(monstersData.Draggle);
const emby = new Sprite(monstersData.Emby);

const button = document.createElement("button");
button.textContent = document.querySelector("#attacks").append();

const renderedSprites = [draggle, emby];

function animateBattle() {
	window.requestAnimationFrame(animateBattle);
	battleBackground.draw();
	for (const sprite of renderedSprites) {
		sprite.draw();
	}
}
animateBattle();

const queue = [];

document.querySelectorAll(".attack").forEach((button) => {
	button.addEventListener("click", (e) => {
		log(e.currentTarget.textContent);
		const targetAttack = e.currentTarget.textContent;

		emby.attack({
			attack: attacks[targetAttack],
			recipient: draggle,
			renderedSprites,
		});

		queue.push(() => {
			draggle.attack({
				attack: attacks.Tackle,
				recipient: emby,
				renderedSprites,
			});
		});

		queue.push(() => {
			draggle.attack({
				attack: attacks.Fireball,
				recipient: emby,
				renderedSprites,
			});
		});
	});
});

document.querySelector("#battleContent").addEventListener("click", (e) => {
	if (queue.length > 0) {
		queue[0]();
		queue.shift();
	} else e.target.style.display = "none";
});
