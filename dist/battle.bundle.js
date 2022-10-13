(self["webpackChunkpokemon_game"] = self["webpackChunkpokemon_game"] || []).push([["battle"],{

/***/ "./src/battleScene.js":
/*!****************************!*\
  !*** ./src/battleScene.js ***!
  \****************************/
/***/ (() => {

const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/game_assets/battleBackground.png";
const battleBackground = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
});

let draggle;
let emby;
let renderedSprites;
let battleAnimationId;
let queue;
const endBattle = () => {
	gsap.to("#overlapWrap", {
		opacity: 1,
		onComplete: () => {
			window.cancelAnimationFrame(battleAnimationId);
			animate();
			document.querySelector("#battleWrap").style.display = "none";

			gsap.to("#overlapWrap", {
				opacity: 0,
			});

			battle.initiated = false;
			audio.map.play();
		},
	});
};

function initBattle() {
	document.querySelector("#battleWrap").style.display = "block";
	document.querySelector("#battleContent").style.display = "none";
	document.querySelector("#currHealthEnemy").style.width = "100%";
	document.querySelector("#currHealthPlayer").style.width = "100%";
	document.querySelector("#attacks").replaceChildren();

	draggle = new Monster(monstersData.Draggle);
	emby = new Monster(monstersData.Emby);
	renderedSprites = [draggle, emby];
	queue = [];

	for (const attack of emby.attacks) {
		const button = document.createElement("button");
		button.innerHTML = attack.name;
		button.classList.add("attack");
		document.querySelector("#attacks").append(button);
	}

	document.querySelectorAll(".attack").forEach((button) => {
		button.addEventListener("click", (e) => {
			log(e.currentTarget.textContent);
			const targetAttack = attacks[e.currentTarget.innerHTML];

			emby.attack({
				attack: targetAttack,
				recipient: draggle,
				renderedSprites,
			});

			// enemy attacks
			if (draggle.health <= 0) {
				queue.push(() => {
					draggle.faint();
				});

				queue.push(endBattle);
				// return;
			}

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

				if (emby.health <= 0) {
					queue.push(() => {
						emby.faint();
					});

					queue.push(endBattle);
				}
			});
		});

		button.addEventListener("mouseenter", (e) => {
			const targetAttack = attacks[e.currentTarget.innerHTML];
			document.querySelector("#attackTypeText").textContent = targetAttack.type;
			document.querySelector("#attackTypeText").style.color =
				targetAttack.color;
		});

		button.addEventListener("mouseleave", () => {
			document.querySelector("#attackTypeText").textContent = "Attack Type";
			document.querySelector("#attackTypeText").style.color = "black";
		});
	});
}

function animateBattle() {
	battleAnimationId = window.requestAnimationFrame(animateBattle);
	battleBackground.draw();

	console.log(battleAnimationId);
	for (const sprite of renderedSprites) {
		sprite.draw();
	}
}

animate();
// initBattle();
// animateBattle();

document.querySelector("#battleContent").addEventListener("click", (e) => {
	if (queue.length > 0) {
		queue[0]();
		queue.shift();
	} else e.currentTarget.style.display = "none";
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/battleScene.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2JhdHRsZVNjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhdHRsZUJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcbmJhdHRsZUJhY2tncm91bmRJbWcuc3JjID0gXCIuL2ltZy9nYW1lX2Fzc2V0cy9iYXR0bGVCYWNrZ3JvdW5kLnBuZ1wiO1xuY29uc3QgYmF0dGxlQmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0fSxcblx0aW1hZ2U6IGJhdHRsZUJhY2tncm91bmRJbWcsXG59KTtcblxubGV0IGRyYWdnbGU7XG5sZXQgZW1ieTtcbmxldCByZW5kZXJlZFNwcml0ZXM7XG5sZXQgYmF0dGxlQW5pbWF0aW9uSWQ7XG5sZXQgcXVldWU7XG5jb25zdCBlbmRCYXR0bGUgPSAoKSA9PiB7XG5cdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0b25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGJhdHRsZUFuaW1hdGlvbklkKTtcblx0XHRcdGFuaW1hdGUoKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlV3JhcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0fSk7XG5cblx0XHRcdGJhdHRsZS5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0fSxcblx0fSk7XG59O1xuXG5mdW5jdGlvbiBpbml0QmF0dGxlKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZVdyYXBcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVDb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJySGVhbHRoRW5lbXlcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJySGVhbHRoUGxheWVyXCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrc1wiKS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuXHRkcmFnZ2xlID0gbmV3IE1vbnN0ZXIobW9uc3RlcnNEYXRhLkRyYWdnbGUpO1xuXHRlbWJ5ID0gbmV3IE1vbnN0ZXIobW9uc3RlcnNEYXRhLkVtYnkpO1xuXHRyZW5kZXJlZFNwcml0ZXMgPSBbZHJhZ2dsZSwgZW1ieV07XG5cdHF1ZXVlID0gW107XG5cblx0Zm9yIChjb25zdCBhdHRhY2sgb2YgZW1ieS5hdHRhY2tzKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRidXR0b24uaW5uZXJIVE1MID0gYXR0YWNrLm5hbWU7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tcIik7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tzXCIpLmFwcGVuZChidXR0b24pO1xuXHR9XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hdHRhY2tcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0bG9nKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XG5cdFx0XHRjb25zdCB0YXJnZXRBdHRhY2sgPSBhdHRhY2tzW2UuY3VycmVudFRhcmdldC5pbm5lckhUTUxdO1xuXG5cdFx0XHRlbWJ5LmF0dGFjayh7XG5cdFx0XHRcdGF0dGFjazogdGFyZ2V0QXR0YWNrLFxuXHRcdFx0XHRyZWNpcGllbnQ6IGRyYWdnbGUsXG5cdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBlbmVteSBhdHRhY2tzXG5cdFx0XHRpZiAoZHJhZ2dsZS5oZWFsdGggPD0gMCkge1xuXHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRkcmFnZ2xlLmZhaW50KCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByYW5kb21BdHRhY2tJbmRleCA9IE1hdGguZmxvb3IoXG5cdFx0XHRcdE1hdGgucmFuZG9tKCkgKiBkcmFnZ2xlLmF0dGFja3MubGVuZ3RoXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgcmFuZG9tQXR0YWNrID0gZHJhZ2dsZS5hdHRhY2tzW3JhbmRvbUF0dGFja0luZGV4XTtcblx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRkcmFnZ2xlLmF0dGFjayh7XG5cdFx0XHRcdFx0YXR0YWNrOiByYW5kb21BdHRhY2ssXG5cdFx0XHRcdFx0cmVjaXBpZW50OiBlbWJ5LFxuXHRcdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKGVtYnkuaGVhbHRoIDw9IDApIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRcdGVtYnkuZmFpbnQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEF0dGFjayA9IGF0dGFja3NbZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTF07XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnRleHRDb250ZW50ID0gdGFyZ2V0QXR0YWNrLnR5cGU7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID1cblx0XHRcdFx0dGFyZ2V0QXR0YWNrLmNvbG9yO1xuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikudGV4dENvbnRlbnQgPSBcIkF0dGFjayBUeXBlXCI7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUJhdHRsZSgpIHtcblx0YmF0dGxlQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVCYXR0bGUpO1xuXHRiYXR0bGVCYWNrZ3JvdW5kLmRyYXcoKTtcblxuXHRjb25zb2xlLmxvZyhiYXR0bGVBbmltYXRpb25JZCk7XG5cdGZvciAoY29uc3Qgc3ByaXRlIG9mIHJlbmRlcmVkU3ByaXRlcykge1xuXHRcdHNwcml0ZS5kcmF3KCk7XG5cdH1cbn1cblxuYW5pbWF0ZSgpO1xuLy8gaW5pdEJhdHRsZSgpO1xuLy8gYW5pbWF0ZUJhdHRsZSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0cXVldWVbMF0oKTtcblx0XHRxdWV1ZS5zaGlmdCgpO1xuXHR9IGVsc2UgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9