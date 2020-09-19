class Shapes {
	constructor(context) {
		this.c = context;
	}
	//storke and fill
	line(a, b, c, d, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		this.c.closePath();
	}
	
	box(x, y, w, h, colourS='black', colourF='black') {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.rect(x, y, w, h);
		this.c.closePath();
	}
	circle(x, y, r, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.arc(x, y, r, 0, Math.PI*2, false);
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
