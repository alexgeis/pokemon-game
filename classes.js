class Sprite {
	constructor({
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		isEnemy = false,
		rotation = 0,
		name,
		velocity,
	}) {
		this.position = position;
		this.image = image;
		this.frames = { ...frames, val: 0, elapsed: 0 };

		this.image.onload = () => {
			this.width = this.image.width / this.frames.max;
			this.height = this.image.height;
		};
		this.animate = animate;
		this.sprites = sprites;
		this.opacity = 1;
		this.health = 100;
		this.isEnemy = isEnemy;
		this.rotation = rotation;
		this.name = name;
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

	attack({ attack, recipient, renderedSprites }) {
		document.querySelector("#battleContent").style.display = "block";
		document.querySelector(
			"#battleContent"
		).textContent = `${this.name} used ${attack.name}`;

		let healthBar = "#currHealthEnemy";
		if (this.isEnemy) healthBar = "#currHealthPlayer";

		this.health -= attack.damage;

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
							gsap.to(healthBar, {
								width: this.health + "%",
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
						gsap.to(healthBar, {
							width: this.health + "%",
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
						renderedSprites.splice(1, 1);
					},
				});

				break;
			default:
				break;
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
		c.fillStyle = "rgba(255,0,0, 0.3)";
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class Monster {
	constructor({
		name,
		type,
		attacks,
		healthPoints = 50,
		defense,
		attackPower,
	}) {
		this.name = name;
		this.type = type;
		this.attacks = attacks;
		this.healthPoints = healthPoints;
		this.defense = defense;
		this.attackPower = attackPower;
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
