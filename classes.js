class Sprite {
	constructor({ position, velocity, image, frames = { max: 1 } }) {
		this.position = position;
		this.image = image;
		this.frames = frames;

		this.image.onload = () => {
			this.width = this.image.width / this.frames.max;
			this.height = this.image.height;
		};
	}

	draw() {
		c.drawImage(
			this.image,
			// image crop arguments
			0,
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
		c.fillStyle = "rgba(255,0,0, 0.2)";
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}
