const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/game_assets/battleBackground.png";
const battleBackground = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
});

const draggle = new Monster(monstersData.Draggle);
const emby = new Monster(monstersData.Emby);
console.log(emby);

for (const attack of emby.attacks) {
	const button = document.createElement("button");
	button.innerHTML = attack.name;
	button.classList.add("attack");
	document.querySelector("#attacks").append(button);
}

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
		const targetAttack = attacks[e.currentTarget.innerHTML];

		emby.attack({
			attack: targetAttack,
			recipient: draggle,
			renderedSprites,
		});

		const randomAttackIndex = Math.floor(
			Math.random() * draggle.attacks.length
		);
		const randomAttack = draggle.attacks[randomAttackIndex];
		queue.push(() => {
			draggle.attack({
				attack: randomAttack,
				recipient: emby,
				renderedSprites,
			});
		});
	});

	button.addEventListener("mouseenter", (e) => {
		const targetAttack = attacks[e.currentTarget.innerHTML];
		document.querySelector("#attackTypeText").textContent = targetAttack.type;
		document.querySelector("#attackTypeText").style.color = targetAttack.color;
	});

	button.addEventListener("mouseleave", () => {
		document.querySelector("#attackTypeText").textContent = "Attack Type";
		document.querySelector("#attackTypeText").style.color = "black";
	});
});

document.querySelector("#battleContent").addEventListener("click", (e) => {
	if (queue.length > 0) {
		queue[0]();
		queue.shift();
	} else e.target.style.display = "none";
});
