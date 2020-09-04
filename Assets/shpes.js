class Shapes {
	constructor() {
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	static strokeLine(a, b, c, d, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.moveTo(a, b);
		ctx.lineTo(c, d);
		ctx.stroke();
		ctx.closePath();
	}
	static fillLine(a, b, c, d, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.moveTo(a, b);
		ctx.lineTo(c, d);
		ctx.fill();
		ctx.closePath();
	}
	static fillBox(x, y, w, h, colour) {
		ctx.beginPath();
		ctx.fillStyle = colour;
		ctx.fillRect(x, y, w, h);
		ctx.closePath();
	}
	static strokeBox(x, y, w, h, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.strokeRect(x, y, w, h);
		ctx.closePath();
	}
	static strokeCir(x, y, r, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.arc(x, y, r, 0, Math.PI*2, false);
		ctx.stroke();
		ctx.closePath();
	}
	static fillCir(x, y, r, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.arc(x, y, r, 0, Math.PI*2, false);
		ctx.fill();
		ctx.closePath();
	}

	//storke and fill
	static line(a, b, c, d, colourS, colourF) {
		ctx.beginPath();
		ctx.strokeStyle = colourS;
		ctx.fillStyle = colourF;
		ctx.moveTo(a, b);
		ctx.lineTo(c, d);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	}
	
	static box(x, y, w, h, colourS, colourF) {
		ctx.beginPath();
		ctx.strokeStyle = colourS;
		ctx.fillStyle = colourF;
		ctx.fillRect(x, y, w, h);
		ctx.strokeRect(x, y, w, h);
		ctx.closePath();
	}
	static circle(x, y, r, colourS, colourF) {
		ctx.beginPath();
		ctx.strokeStyle = colourS;
		ctx.fillStyle = colourF;
		ctx.arc(x, y, r, 0, Math.PI*2, false);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	}

	//still working
	static fillEqTri(l, colour) {
		ctx.beginPath();
		ctx.fillStyle = colour;
		ctx.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.fill();
		ctx.closePath();
	}
	static strokeEqTri(l, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.stroke();
		ctx.closePath();
	} 
	static EqTri(l, colourS, colourF) {
		ctx.beginPath();
		ctx.strokeStyle = colourS;
		ctx.fillStyle = colourF;
		ctx.moveTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*120), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*120));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*240), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*240));
		ctx.lineTo(l*(Math.sqrt(3)/3) * Math.cos(Math.PI/180*0), l*(Math.sqrt(3)/3) * Math.sin(Math.PI/180*0));
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	} 
}
