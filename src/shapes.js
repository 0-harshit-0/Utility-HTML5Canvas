
class Shapes {
	constructor(context) {
		this.c = context;
	}
	fill(data, callback) {
		let {c, w, dash, path} = data || {c:'black'};
		this.c.fillStyle = c||'black';
		this.c.fill(path);

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	stroke(data, callback) {
		let {c, w, dash, dashOff, path} = data || {c:'black'};
		this.c.setLineDash(dash||[]);
		this.c.lineDashOffset = dashOff||0;
		this.c.lineWidth = w||1;
		this.c.strokeStyle = c||'black';
		this.c.stroke(path);

		if (typeof(callback) == "function") {
			callback(data);
		}else{
			return data;
		}
	}
	clear(x=0, y=0, w=10, h=10) {
		this.c.clearRect(x,y,w,h);
	}
	//storke and fill
	line(data) {
		let {path,x,y,x1,y1,cap} = data || {path:''};
		let l = new Path2D(path||'');
		this.c.lineCap = cap||'butt';
		if(path=='') {
			l.moveTo(x, y);
			l.lineTo(x1, y1);
		}
		return l;
		//this.c.closePath();
	}
	box(data, callback) {
		let {path,x,y,w,h,cap} = data || {path:''};
		let b = new Path2D(path||'');
		this.c.lineJoin = cap||"miter";
		if(!path || path=='') b.rect(x||1, y||1, w||10, h||10);

		if (typeof(callback) == "function") {
			data.path = b;
			callback(data);
		}else{
			return b;
		}
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
	complex(l=10, x=10, y=10, sides=3, angle=0) {
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
	eqTri(l=10, x=10, y=10, angle=0) {
		this.complex(l, x, y, 3, angle)
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
