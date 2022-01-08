class Stack {
	constructor() {
		this.size = 0;
		this.stackarray = new Array();
	}
	push(value) {

		this.stackarray.unshift(value);
		this.size++;

		return value;
	}
	pop() {
		if (this.size < 0) {
			this.size = 0;
			throw 'Stack is empty';
		}
		this.size--;
		return this.stackarray.shift();
		//return this.stackarray;
	}
	view() {
		return this.stackarray;
	}
}

class Queues {
	constructor() {
		this.s = 0;
		this.queuearray = new Array();
	}
	push(value) {
		
		this.queuearray.push(value);
		this.s++;

		return value;
	}
	pop() {
		if (!this.s) throw 'Queue is empty';
		this.s--;
		
		return this.queuearray.shift();
	}
	view()  {
		return this.queuearray;
	}
}


class Node {
	constructor(data) {
		this.d = data;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
		this.visited = false;
	}
	view() {
		let curr = this.head;
		while(curr) {
			console.log(curr.d);
			curr = curr.next;
		}
	}
	iterate(n = 0) {
		let curr = this.head;
		for (var i = 0; i < n; i++) {
			curr = curr.next;
		}
		return curr.d;
	}
	add(element) {
		let current;
		let node  = new Node(element);
		if (this.head == null) {
			this.head = node;
		}else {
			current = this.head;
			while(current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
		return element;
	}
	insert(element, index=0) {
		if (index < 0 || index > this.size) {
			return false;
		}else {
			let node = new Node(element);
			let curr = this.head, prev;
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			}else {
				let i = 0;
				while(i !== index) {
					prev = curr;
					curr = curr.next;
					i++;
				}
				node.next = curr;
				prev.next = node;
			}
			this.size++;
			return element;
		}
	}
	delete(element) {
		let temp = false, curr = this.head, prev, i=0;
		if (element == this.head.d) {
			temp = true;
			this.head = this.head.next;
		}else {
			while(curr.next !== null) {
				i++;
				prev = curr;
				curr = curr.next;
				if (curr.d == element) {
					temp = true;
					prev.next = curr.next;
					break;
				}
			}
		}
		
		if (temp) {
			this.size--;
			return i;
		}else {
			return temp;
		}
	}
	remove(index=(this.size-1)) {
		let temp;
		if (index < 0 || index > this.size) {
			return false;
		}else {
			let curr = this.head, prev;
			if (index == 0) {
				temp = this.head.d;
				this.head = this.head.next;
			}else {
				let i = 0;
				while(i !== index) {
					prev = curr;
					curr = curr.next;
					i++;
				}
				temp = curr.d;
				prev.next = curr.next;
			}
			this.size--;
			return temp;
		}
	}
}

class GNode {
	constructor(data) {
		this.d = new Set().add(data);
		this.visited = false;
	}
}
class UGraph {
	constructor(vertices) {
		this.v = vertices;
		this.AdjList = new Map();
		this.length = 0;
	}
	add(v, dv) { //sv | source vertices
		if(v == dv) return 0;
		if(this.AdjList.has(v)) {
			this.AdjList.get(v).d.add(dv);
		}else{
			if(this.length >= this.v) return 0;
			this.AdjList.set(v, new GNode(dv));
			this.length++;
		}
		if(this.AdjList.has(dv)) {
			this.AdjList.get(dv).d.add(v);
		}else{
			if(this.length >= this.v) return 0;
			this.AdjList.set(dv, new GNode(v));
			this.length++;
		}
	}
	adjacent(v1, v2) {
		return this.AdjList.get(v1).d.has(v2);
	}
	neighbors(v1) {
		return this.AdjList.get(v1).d;
	}
	remove(v, dv=false) {
		if(!dv) {
			this.AdjList.delete(v);
		}else{
			this.AdjList.get(v).d.delete(dv);
		}
	}
	view() {
		const iterator1 = this.AdjList[Symbol.iterator]();

		for (const item of iterator1) {
			console.log(item);
			console.log(item[1].d);
		}
	}
	//travers
	dfs(root) {
		console.log(root)
		//console.log(this.AdjList.get(root))
		this.AdjList.get(root).visited = true;
		[...this.neighbors(root)].forEach(z=> {
			if(!this.AdjList.get(z).visited){
				this.dfs(z);
			}
		});
	}
	dfsS(root) {
		let s = new Stack();
		s.push(root);
		while(s.length) {
			root = s.pop();
			if(!this.AdjList.get(root).visited) {
				console.log(root)
				this.AdjList.get(root).visited = true;
				[...this.neighbors(root)].forEach(z=> {
					s.push(z);
				});
			}
		}
	}

	bfs(root) {
		let q = new Queues();
		this.AdjList.get(root).visited = true;
		q.push(root);

		while(q.length) {
			let v = q.pop();
			console.log(v);
			//if (v == root) {}
			[...this.neighbors(v)].forEach(z=> {
				if(!this.AdjList.get(z).visited){
					
					this.AdjList.get(z).visited = true;
					q.push(z);
				}
			});
		}
	}
}


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
	fill(clr) {
		this.c.fillStyle = clr;
		this.c.fill();
	}
	stroke(clr, w=1) {
		this.c.lineWidth = w;
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
	complex(l=10, x=10, y=10, sides=3, angle=0) {
		let theta = 0;
		let thetainc = Math.floor(360/sides);
		this.c.save();
		this.c.translate(x, y);
		this.c.rotate(angle*Math.PI/180);
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
		this.c.rotate(angle*Math.PI/180);
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


//noises=================================================
class Gradient{
	constructor() {
		this.vector2 = new Vector2D();
	}
	
	randomGradient(a, b) {
		let random = 2920 * Math.sin(a * 21942.0 + b * 171324.0 + 8912.0) * Math.cos(a * 23157.0 + b * 217832.0 + 9758.0);
		return this.vector2 = new Vector2D(Math.cos(random), Math.sin(random));
	}
	dotGridGradient(ia, ib, a, b) {
		let gradient = this.randomGradient(ia, ib);

		// Compute the distance vector
		let dx = a - ia;
		let dy = b - ib;
		
		// Compute the dot-product
		return (dx*gradient.x + dy*gradient.y);
	}
	static fade(t) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	static lerp(a0, a1, w) {
		return Gradient.fade(1.0 - w)*a0 + Gradient.fade(w)*a1;
	}
}

function perlin(a, b) {
	let gr = new Gradient();
    // Determine grid cell coordinates
    let x0 = Math.floor(a);
    let x1 = x0 + 1;
    let y0 = Math.floor(b);
    let y1 = y0 + 1;

    // Determine interpolation weights
    // Could also use higher order polynomial/s-curve here
    let sx = a - x0;
    let sy = b - y0;

    // Interpolate between grid point gradients
    let n0, n1, ia0, ia1, value;

    n0 = gr.dotGridGradient(x0, y0, a, b);
    n1 = gr.dotGridGradient(x1, y0, a, b);
    ia0 = Gradient.lerp(n0, n1, sx);

    n0 = gr.dotGridGradient(x0, y1, a, b);
    n1 = gr.dotGridGradient(x1, y1, a, b);
    ia1 = Gradient.lerp(n0, n1, sx);

    value = Gradient.lerp(ia0, ia1, sy);
    return value;
}
