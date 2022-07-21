
class Shapes {
	constructor(context) {
		this.c = context;
		this.path = new Path2D();
	}
	fill(path='', c='black', callback) {
/*
	c :: color
	path :: the canvas path object
*/
		let data = {color: c, pathObj: path};
		this.c.fillStyle = c;
		if(path == null || typeof(path) != "object") path = this.path;
		this.c.fill(path);
		this.c.restore();

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	stroke(path='', c='black', w=1, dash=[], dashOff=0, callback) {
/*
	c :: color
	path :: the canvas path object
	w :: width of line
	dash :: dash-space length (array)
	dashOff :: sets the line dash offset, or "phase."
*/
		let data = {color:c, strokeWidth:w, dashArr: dash, dashOffset: dashOff, pathObj: path};
		this.c.setLineDash(dash);
		this.c.lineDashOffset = dashOff;
		this.c.lineWidth = w;
		this.c.strokeStyle = c;
		if(typeof(path) != "object") path = this.path;
		this.c.stroke(path);

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	// ---storke and fill over--
	line(path='', x=1, y=1, x1=10, y1=10, cap='butt', callback) {
		let data = {pathObj:path, xPos:x, yPos:y, x1Pos:x1, y1Pos:y1, linecap:cap};

		this.path = new Path2D(path);
		this.c.lineCap = cap;
		if(typeof(path) != "object") {
			this.path.moveTo(x, y);
			this.path.lineTo(x1, y1);
		}

		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
		//this.c.closePath();
	}
	rect(path='', x=1, y=1, w, h, cap='miter', callback) {
		let data = {pathObj:path, xPos:x, yPos:y, width:w, height:h, linecap:cap};

		this.path = new Path2D(path);
		this.c.lineJoin = cap;
		if(typeof(path) != "object") {
			w = w ?? h;
			h = h ?? w;

			this.path.rect(x, y, w, h);
		}

		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
		//this.c.closePath();
	}
	/*circle(data, callback) {
		let {path,x,y,r} = data || {path:''};
		this.path = new Path2D(path || '');
		if(typeof(path) != "object") this.path.arc(x ?? 10, y ?? 10, r ?? 10, 0, Math.PI*2, false);
		
		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
	}*/
	ellipse(path='', x=10, y=10, rX, rY, sa=0, ea=Math.PI*2, theta=0, clock=false, callback) {
		let data = {pathObj:path, xPos:x, yPos:y, radiiX:rX, radiiY:rY,
			startAngle:sa, endAngle:ea, rotate:theta, anticlock:clock};

		this.path = new Path2D(path);
		if(typeof(path) != "object") {
			rX = rX ?? rY;
			rY = rY ?? rX;
			this.path.ellipse(x, y, rX, rY, theta, sa, ea, clock);
		}
		
		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
	}
	polygon(path='', x=10, y=10, l=20, s=5, theta=0, callback) {
		let data = {pathObj:path, xPos:x, yPos:y, length:l, sides:s, rotate:theta};
		this.path = new Path2D(path);
		this.c.save();
		if(typeof(path) != "object") {
			let tempTheta = 0;
			let thetainc = Math.floor(360/s);
			this.c.translate(x, y);
			this.c.rotate(theta);

			this.path.moveTo(l * Math.cos(tempTheta), l * Math.sin(tempTheta));
			for (var i = 0; i < s-1; i++) {
				tempTheta += thetainc*Math.PI/180;
				this.path.lineTo(l * Math.cos(tempTheta), l * Math.sin(tempTheta));
			}
		}

		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
	}
	eqTri(path='', x=10, y=10, l=20, theta=0, callback) {
		let data = {pathObj:path, xPos:x, yPos:y, length:l, rotate:theta};
		this.path = new Path2D(path);
		this.polygon(path, x, y, l, 3, theta, callback);

		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
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
	stroke(clr, w=1) {
		this.c.lineWidth = w;
		this.c.strokeStyle = clr;
		this.c.stroke();
	}
	clear(v0, w=10, h=10) {
		this.c.clearRect(v0.x,v0.y,w,h);
	}
	//storke and fill
	line(v0, v1) {
		this.c.beginPath();
		this.c.moveTo(v0.x, v0.y);
		this.c.lineTo(v1.x, v1.y);
		//this.c.closePath();
	}
	box(v0, w=10, h=10) {
		this.c.beginPath();
		this.c.rect(v0.x, v0.y, w, h);
		//this.c.closePath();
	}
	circle(v0, r=10) {
		this.c.beginPath();
		this.c.arc(v0.x, v0.y, r, 0, Math.PI*2, false);
		//this.c.closePath();
	}
	ellipse(v0, rX=20, rY=20, startAngle=0, endAngle=0, rotate=0, anticlock=false) {
		this.c.beginPath();
		this.c.ellipse(v0.x, v0.y, rX, rY, rotate, startAngle, endAngle, anticlock);
	}
	complex(l=10, v0, sides=3, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/sides);
		this.c.save();
		this.c.translate(v0.x, v0.y);
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
	eqTri(l=10, v0, angle=0) {
		this.complex(l, v0, 3, angle);
	}
	
}
