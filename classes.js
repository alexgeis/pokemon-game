class Sprite {
	constructor({
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
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
	}

	draw() {
		c.save();
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

	attack({ attack, recipient }) {
		const tl = gsap.timeline();
		tl.to(this.position, {
			x: this.position.x - 20,
		})
			.to(this.position, {
				x: this.position.x + 40,
				y: this.position.y - 10,
				duration: 0.1,
				onComplete: () => {
					// enemy gets hit
					gsap.to("#currHealthEnemy", {
						width: this.health - attack.damage + "%",
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
