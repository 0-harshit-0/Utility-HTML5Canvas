
class Vector2D {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	static add(v1, v2) {
		if (typeof(v2) == "number") {
			var a = v1.x+v2;
			var b = v1.y+v2;
		}else if (typeof(v2) == "object") {
			var a = v1.x+v2.x;
			var b = v1.y+v2.y;
		}

		return new Vector2D(a, b);
	}
	static sub(v1, v2) {
		if (typeof(v2) == "number") {
			var a = v1.x-v2;
			var b = v1.y-v2;
		}else if (typeof(v2) == "object") {
			var a = v1.x-v2.x;
			var b = v1.y-v2.y;
		}

		return new Vector2D(a, b);
	}
	static div(v1, v2) {
		if (typeof(v2) == "number") {
			var a = v1.x/v2;
			var b = v1.y/v2;
		}else if (typeof(v2) == "object") {
			var a = v1.x/v2.x;
			var b = v1.y/v2.y;
		}

		return new Vector2D(a, b);
	}
	static mul(v1, v2) {
		if (typeof(v2) == "number") {
			var a = v1.x*v2;
			var b = v1.y*v2;
		}else if (typeof(v2) == "object") {
			var a = v1.x*v2.x;
			var b = v1.y*v2.y;
		}

		return new Vector2D(a, b);
	}
	static dot(v1, v2) {
		let a = v1.x * v2.x;
		let b = v1.y * v2.y;

		return a + b;
	}
	static magnitude(v) {
		let a = v.x**2;
		let b = v.y**2;

		return Math.sqrt(a + b);
	}
	static angleBetween(v1, v2) {
		let d = Vector2D.dot(v1, v2);
		let mv1 = Vector2D.magnitude(v1);
		let mv2 = Vector2D.magnitude(v2);
		let theta = Math.acos(d/(mv1*mv2));

		return parseInt(theta/(Math.PI/180));
	}
	
	static normalize(v1) { // unit vector
		let mag = Vector2D.magnitude(v1);
		let a, b;
		if (mag) {
			return Vector2D.div(v1, mag);
		}else {
			return new Vector2D();
		}
	}
	static limit(l, v) {
		var mag1 = Vector2D.magnitude(v);
		var w, u = new Vector2D();
		if(mag1 > l) {
			w = Vector2D.normalize(v);
			u = Vector2D.mul(w, l);

			return u;
		}
		return v;
	}
	static setMag(n, v) {
		var normal = Vector2D.normalize(v);

		return Vector2D.mul(normal, n);
	}
	static constrain(n, low, high) { //limits between
		return Math.max(Math.min(n, high), low);
	}
	static map(n, start0, stop0, start1, stop1, within) { // ranges between
		const newval = (n - start0) / (stop0 - start0) * (stop1 - start1) + start1;
		
		if (!within) {
			return newval;
		}
		if (start1 < stop1) {
			return Vector2D.constrain(newval, start1, stop1);
		}else {
			return Vector2D.constrain(newval, stop1, start1);
		}
	}
	static distance(v0, v1) {
		let a = v1.x - v0.x;
		let b = v1.y - v0.y;
		return Math.sqrt((a**2)+(b**2));
	}
}


class Shapes {
	constructor(context) {
		this.c = context;
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	strokeLine(a, b, c, d, colour) {
		this.c.beginPath();
		this.c.strokeStyle = colour;
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		this.c.stroke();
		this.c.closePath();
	}
	fillLine(a, b, c, d, colour) {
		this.c.beginPath();
		this.c.fillStyle = colour;
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		this.c.fill();
		this.c.closePath();
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
	line(a, b, c, d, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		this.c.stroke();
		this.c.fill();
		this.c.closePath();
	}
	
	box(x, y, w, h, colourS, colourF) {
		this.c.beginPath();
		this.c.strokeStyle = colourS;
		this.c.fillStyle = colourF;
		this.c.fillRect(x, y, w, h);
		this.c.strokeRect(x, y, w, h);
		this.c.closePath();
	}
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
