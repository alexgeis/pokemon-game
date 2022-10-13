import { c } from "./index";

class Sprite {
	constructor({
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		this.position = position;
		this.image = new Image();
		this.frames = { ...frames, val: 0, elapsed: 0 };
		this.image.onload = () => {
			this.width = this.image.width / this.frames.max;
			this.height = this.image.height;
		};
		this.image.src = image.src;
		this.animate = animate;
		this.sprites = sprites;
		this.opacity = 1;
		this.rotation = rotation;
	}

	draw() {
		c.save();
		c.translate(
			this.position.x + this.width / 2,
			this.position.y + this.height / 2
		);
		c.rotate(this.rotation);
		c.translate(
			-this.position.x - this.width / 2,
			-this.position.y - this.height / 2
		);
		c.globalAlpha = this.opacity;
		c.drawImage(
			this.image,
			// image crop arguments
			this.frames.val * this.width,
			0,
			this.image.width / this.frames.max,
			this.image.height,
			// onscreen position
			this.position.x,
			this.position.y,
			// onscreen render frame
			this.image.width / this.frames.max,
			this.image.height
		);
		c.restore();

		if (!this.animate) return;

		if (this.frames.max > 1) {
			this.frames.elapsed++;
		}

		if (this.frames.elapsed % this.frames.hold === 0) {
			if (this.frames.val < this.frames.max - 1) this.frames.val++;
			else this.frames.val = 0;
		}
	}
}

class Boundary {
	// 48 px = 400% zoom on our original 12px x 12px grids
	static width = 48;
	static height = 48;
	constructor({ position }) {
		this.position = position;
		this.width = 48;
		this.height = 48;
	}

	draw() {
		c.fillStyle = "rgba(255,0,0, 0)";
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class Monster extends Sprite {
	constructor({
		name,
		isEnemy = false,
		attacks,
		// future params
		type,
		defense,
		attackPower,
		// sprite parameters
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		super({
			position,
			image,
			frames,
			sprites,
			animate,
			rotation,
			velocity,
		});
		this.name = name;
		this.health = 100;
		this.attacks = attacks;
		this.isEnemy = isEnemy;
		// future props to implements
		this.type = type;
		this.defense = defense;
		this.attackPower = attackPower;
		// Sprite props
	}

	attack({ attack, recipient, renderedSprites }) {
		document.querySelector("#battleContent").style.display = "block";
		document.querySelector(
			"#battleContent"
		).textContent = `${this.name} used ${attack.name}`;

		let healthBar = "#currHealthEnemy";
		if (this.isEnemy) healthBar = "#currHealthPlayer";

		recipient.health -= attack.damage;
		if (recipient.health < 1) recipient.health = 0;

		let rotation = 1;
		if (this.isEnemy) rotation = -2.2;

		switch (attack.name) {
			case "Tackle":
				const tl = gsap.timeline();

				let movementDistance = 10;
				if (this.isEnemy) movementDistance = -10;

				tl.to(this.position, {
					x: this.position.x - movementDistance * 2,
				})
					.to(this.position, {
						x: this.position.x + movementDistance * 4,
						y: this.position.y - movementDistance,
						duration: 0.1,
						onComplete: () => {
							// enemy gets hit
							audio.tackleHit.play();
							gsap.to(healthBar, {
								width: recipient.health + "%",
							});

							gsap.to(recipient.position, {
								x: recipient.position.x + 10,
								yoyo: true,
								repeat: 5,
								duration: 0.08,
							});

							gsap.to(recipient, {
								opacity: 0,
								repeat: 5,
								yoyo: true,
								duration: 0.08,
							});
						},
					})
					.to(this.position, {
						x: this.position.x,
						y: this.position.y,
					});

				break;
			case "Fireball":
				audio.initFireball.play();
				const fireballImg = new Image();
				fireballImg.src = "./img/game_assets/fireball.png";
				const fireball = new Sprite({
					position: {
						x: this.position.x,
						y: this.position.y,
					},
					image: fireballImg,
					frames: {
						max: 4,
						hold: 10,
					},
					animate: true,
					rotation,
				});
				renderedSprites.splice(1, 0, fireball);

				gsap.to(fireball.position, {
					x: recipient.position.x,
					y: recipient.position.y,
					onComplete: () => {
						// enemy gets hit
						audio.fireballHit.play();

						gsap.to(healthBar, {
							width: recipient.health + "%",
						});

						console.log(recipient.health);
						gsap.to(recipient.position, {
							x: recipient.position.x + 10,
							yoyo: true,
							repeat: 5,
							duration: 0.08,
						});

						gsap.to(recipient, {
							opacity: 0,
							repeat: 5,
							yoyo: true,
							duration: 0.08,
						});
						renderedSprites.splice(1, 1);
					},
				});

				break;
		}
	}

	faint() {
		document.querySelector(
			"#battleContent"
		).innerHTML = `${this.name} fainted!`;
		gsap.to(this.position, {
			y: this.position.y + 20,
		});
		gsap.to(this, {
			opacity: 0,
		});
		audio.battle.stop();
		audio.victory.play();
	}
}

class Attack {
	constructor({ name, type, damage, amount = 10 }) {
		this.name = name;
		this.type = type;
		this.damage = damage;
		this.amount = amount;
	}
}

export { Sprite, Boundary, Monster };
