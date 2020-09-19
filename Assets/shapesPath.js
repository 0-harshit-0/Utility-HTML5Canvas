class Shapes {
	constructor(context) {
		this.c = context;
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	line(a, b, c, d) {
		var l = new Path2D();
		l.moveTo(a, b);
		l.lineTo(c, d);

		return l;
	}
	strokeLine(a, b, c, d, colour) {
		this.c.strokeStyle = colour;
		this.c.stroke(this.line(a,b,c,d));
	}
	fillLine(a, b, c, d, colour) {
		this.c.fillStyle = colour;
		this.c.fill(this.line(a,b,c,d));
	}

	//4-sided...
	box(x, y, w, h) {
		var b = new Path2D();
		b.rect;
		b.lineTo(c, d);

		return b;
	}
	fillBox(x, y, w, h, colour) {
		this.c.beginPath();
		this.c.fillStyle = colour;
		this.c.fillRect(x, y, w, h);
		this.c.closePath();
	}
	strokeBox(x, y, w, h, colour) {
		this.c.beginPath();
		this.c.strokeStyle = colour;
		this.c.strokeRect(x, y, w, h);
		this.c.closePath();
	}
	strokeCir(x, y, r, colour) {
		this.c.beginPath();
		this.c.strokeStyle = colour;
		this.c.arc(x, y, r, 0, Math.PI*2, false);
		this.c.stroke();
		this.c.closePath();
	}
	fillCir(x, y, r, colour) {
		this.c.beginPath();
		this.c.strokeStyle = colour;
		this.c.arc(x, y, r, 0, Math.PI*2, false);
		this.c.fill();
		this.c.closePath();
	}

	//storke and fill
	
	
	
	circle(x, y, r, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.arc(x, y, r, 0, Math.PI*2, false);
		this.c.stroke();
		this.c.fill();
		this.c.closePath();
	}

	//still working
	fillEqTri(l, colour) {
		this.c.beginPath();
		this.c.fillStyle = colour;
		this.c.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.fill();
		this.c.closePath();
	}
	strokeEqTri(l, colour) {
		this.c.beginPath();
		this.c.strokeStyle = colour;
		this.c.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.stroke();
		this.c.closePath();
	} 
	EqTri(l, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		this.c.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		this.c.stroke();
		this.c.fill();
		this.c.closePath();
	} 
}