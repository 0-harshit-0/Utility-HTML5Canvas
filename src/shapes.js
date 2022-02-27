
class Shapes {
	constructor(context) {
		this.c = context;
		this.path;
	}
	fill(data, callback) {
/*
	c :: color
	path :: the canvas path object
*/
		let {c, path} = data || {c:'black'};
		this.c.fillStyle = c || 'black';
		if(typeof(path) != "object") path = this.path;
		this.c.fill(path);
		this.c.restore();

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	stroke(data, callback) {
/*
	c :: color
	path :: the canvas path object
	w :: width of line
	dash :: dash-space length (array)
	dashOff :: sets the line dash offset, or "phase."
*/
		let {c, w, dash, dashOff, path} = data || {c:'black'};
		this.c.setLineDash(dash || []);
		this.c.lineDashOffset = dashOff ?? 0;
		this.c.lineWidth = w ?? 1;
		this.c.strokeStyle = c || 'black';
		if(typeof(path) != "object") path = this.path;
		this.c.stroke(path);

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	// ---storke and fill over--
	line(data, callback) {
		let {path,x,y,x1,y1,cap} = data || {path:''};
		this.path = new Path2D(path || '');
		this.c.lineCap = cap || 'butt';
		if(typeof(path) != "object") {
			this.path.moveTo(x ?? 1, y ?? 1);
			this.path.lineTo(x1 ?? 10, y1 ?? 1);
		}
		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
		//this.c.closePath();
	}
	rect(data, callback) {
		let {path,x,y,w,h,cap} = data || {path:''};
		this.path = new Path2D(path || '');
		this.c.lineJoin = cap || "miter";
		if(typeof(path) != "object") {
			if (w == null || w == undefined) {
				w = h;
			}
			if (h == null || h == undefined) {
				h = w;
			}
			this.path.rect(x ?? 1, y ?? 1, w ?? 10, h ?? 10);
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
	ellipse(data, callback) {
		let {path,x,y,r,rX,rY,startAngle,endAngle,rotate,anticlock} = data || {path:''};
		this.path = new Path2D(path || '');
		if(typeof(path) != "object") {
			if(r) {
				this.path.ellipse(x ?? 20, y ?? 20, r ?? 20, r ?? 20, rotate ?? 0, startAngle ?? 0, endAngle ?? Math.PI*2, anticlock ?? false);
			}else {
				this.path.ellipse(x ?? 20, y ?? 20, rX ?? 20, rY ?? 20, rotate ?? 0, startAngle ?? 0, endAngle ?? Math.PI*2, anticlock ?? false);
			}
			
		}
		
		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
	}
	polygon(data, callback) {
		let {path,x,y,l,sides,rotate} = data || {path:''};
		this.path = new Path2D(path || '');
		l = l ?? 20;
		sides = sides ?? 5;
		this.c.save();
		if(typeof(path) != "object") {
			let theta = 0;
			let thetainc = Math.floor(360/sides);
			this.c.translate(x ?? 20, y ?? 20);
			this.c.rotate(rotate ?? 0);

			this.path.moveTo(l * Math.cos(theta), l * Math.sin(theta));
			for (var i = 0; i < sides-1; i++) {
				theta += thetainc*Math.PI/180;
				this.path.lineTo(l * Math.cos(theta), l * Math.sin(theta));
			}
		}
		if (typeof(callback) == "function") {
			data.path = this.path;
			callback(data);
		}else{
			return this.path;
		}
	}
	eqTri(data, callback) {
		let {path,x,y,l,rotate} = data || {path:''};
		this.polygon({x:x ?? 20, y:y ?? 20, l:l ?? 20, rotate:rotate ?? 0, sides:3});

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
