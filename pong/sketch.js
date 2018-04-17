function Pallet(x, y, w, h, keyUp, keyDown) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h

	this.draw = function () {
		rectMode(CENTER)
		rect(this.x, this.y, this.w, this.h)
	}

	this.move = function () {
		if (keyIsDown(keyUp)) { this.y -= 3 }
		if (keyIsDown(keyDown)) { this.y += 3 }
		this.y = constrain(this.y, this.h / 2, height - this.h / 2)
	}
}

function Ball(x, y, r) {
	this.x = x
	this.y = y
	this.r = r
	this.vx = random([-2, 2])
	this.vy = random([-0.5, 0.5])

	this.draw = function () {
		ellipse(this.x, this.y, this.r, this.r)
	}

	this.move = function () {
		this.x += this.vx
		this.y += this.vy
	}

	this.intersectPallet = function (pallet) {
		if (this.y < pallet.y + pallet.h / 2 + this.r / 2 && this.y > pallet.y - pallet.h / 2 - this.r / 2 && this.r > abs(this.x - pallet.x)) {
			this.vx = -this.vx * 1.01
			this.vy = -this.vy * random([1.10, 0.9, -0.9, 1.04, 0.8, 1.2, 5, 0.2])
			serial.write("b'l'")
		}
	}

	this.restart = function () {

		if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
			this.x = width / 2
			this.y = height / 2
			this.vx = 2
			this.vy = random(-0.2, 0.2)
		}
	}
}

let serial
let ball
let pallets = []

function setup() {
	createCanvas(400, 400)

	serial = new p5.SerialPort(document.location.hostname)
	serial.open('/dev/ttyACM0')

	ball = new Ball(200, 200, 25)
	pallets[0] = new Pallet(20, 200, 20, 100, 87, 83)
	pallets[1] = new Pallet(380, 200, 20, 100, 104, 101)
}

function draw() {
	background(0)

	ball.draw()
	ball.move()
	ball.restart()

	for (let i = 0; i < 2; i++) {
		pallets[i].draw()
		pallets[i].move()
		ball.intersectPallet(pallets[i])
	}

	fill(255)
	textSize(16)
	textAlign(LEFT)
	text("S W", 12, height - 12)
	textAlign(RIGHT)
	text("5 8", width - 12, height - 12)
}





