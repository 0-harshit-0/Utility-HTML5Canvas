
class Shapes {
	constructor(context) {
		this.c = context;
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	fill(clr) {
		this.c.fillStyle = clr;
		this.c.fill();
	}
	stroke(clr) {
		this.c.strokeStyle = clr;
		this.c.stroke();
	}
	clear(x=0, y=0, w=10, h=10) {
		this.c.clearRect(x,y,w,h);
	}
	//storke and fill
	line(a=0, b=0, c=10, d=10) {
		this.c.beginPath();
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		//this.c.closePath();
	}
	box(x=0, y=0, w=10, h=10) {
		this.c.beginPath();
		this.c.rect(x, y, w, h);
		//this.c.closePath();
	}
	circle(x=0, y=0, r=10) {
		this.c.beginPath();
		this.c.arc(x, y, r, 0, Math.PI*2, false);
		//this.c.closePath();
	}
	ellipse(x=20, y=20, rX=20, rY=20, startAngle=0, endAngle=0, rotate=0, anticlock=false) {
		this.c.beginPath();
		this.c.ellipse(x, y, rX, rY, rotate, startAngle, endAngle, anticlock);
	}
	eqTri(l, x, y, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/3);
		this.c.save();
		this.c.translate(x, y);
		this.c.rotate(angle);
		this.c.beginPath();

		this.c.moveTo(l * Math.cos(theta), l * Math.sin(theta));

		for (var i = 0; i < 3; i++) {
			theta += thetainc*Math.PI/180;
			this.c.lineTo(l* Math.cos(theta), l * Math.sin(theta));

		}
		this.c.closePath();
		this.c.restore();
	}
	complex(l, x, y, sides=3, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/sides);
		this.c.save();
		this.c.translate(x, y);
		this.c.rotate(angle);
		this.c.beginPath();

		this.c.moveTo(l * Math.cos(theta), l * Math.sin(theta));

		for (var i = 0; i < sides; i++) {
			theta += thetainc*Math.PI/180;
			this.c.lineTo(l* Math.cos(theta), l * Math.sin(theta));

		}
		this.c.closePath();
		this.c.restore();
	}
}

//combine vector and shapes
class VecShapes {
	constructor(context) {
		this.c = context;
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	fill(clr) {
		this.c.fillStyle = clr;
		this.c.fill();
	}
	stroke(clr) {
		this.c.strokeStyle = clr;
		this.c.stroke();
	}
	//storke and fill
	line(v0, v1) {
		this.c.beginPath();
		this.c.moveTo(v0.x, v0.y);
		this.c.lineTo(v1.x, v1.y);
		//this.c.closePath();
	}
	box(x=0, y=0, w=10, h=10) {
		this.c.beginPath();
		this.c.rect(x, y, w, h);
		//this.c.closePath();
	}
	circle(x=0, y=0, r=10) {
		this.c.beginPath();
		this.c.arc(x, y, r, 0, Math.PI*2, false);
		//this.c.closePath();
	}
	ellipse(x=20, y=20, rX=20, rY=20, startAngle=0, endAngle=0, rotate=0, anticlock=false) {
		this.c.beginPath();
		this.c.ellipse(x, y, rX, rY, rotate, startAngle, endAngle, anticlock);
	}
	eqTri(l, x, y, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/3);
		this.c.save();
		this.c.translate(x, y);
		this.c.rotate(angle);
		this.c.beginPath();

		this.c.moveTo(l * Math.cos(theta), l * Math.sin(theta));

		for (var i = 0; i < 3; i++) {
			theta += thetainc*Math.PI/180;
			this.c.lineTo(l* Math.cos(theta), l * Math.sin(theta));

		}
		this.c.closePath();
		this.c.restore();
	}
	complex(l, x, y, sides=3, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/sides);
		this.c.save();
		this.c.translate(x, y);
		this.c.rotate(angle);
		this.c.beginPath();

		this.c.moveTo(l * Math.cos(theta), l * Math.sin(theta));

		for (var i = 0; i < sides; i++) {
			theta += thetainc*Math.PI/180;
			this.c.lineTo(l* Math.cos(theta), l * Math.sin(theta));

		}
		this.c.closePath();
		this.c.restore();
	}
}
