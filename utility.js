class Stack {
	constructor() {
		this.index = 0;
		this.stackarray = new Array();
	}
	push(value) {

		this.stackarray.unshift(value);
		this.index++;

		return value;
	}
	pop() {
		
		if (this.index < 0) {
			this.index = 0;
			throw 'Stack is empty';
		}
		this.index--;
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


class Graph {
	constructor(vertices=10) {
		this.v = vertices;
		this.list = new Array();

		for (var i = 0; i < this.v; i++) {
			this.list.push(new LinkedList());
		}
	}
	addEdge(source, des) {
		if (source >= 0 && source <= this.v && source !== des) {
			this.list[source].add(des);
		}
	}
	view() {
		for (var i = 0; i < this.list.length; i++) {
			console.log("list: "+i);
			this.list[i].view();
		}
	}
	//travers
	dfs(root) {
		console.log(root);
		let l = this.list;
		l[root].visited = true;
		let curr = l[root];
		let connections = l[root].size;

		if (connections) {
			for (var i = 0; i < connections; i++) {
				let ele = l[root].remove(0);
				if (!l[ele].visited) {
					this.dfs(ele);
					//visited = ele;
				}
			}
		}
	}

	bfs(root) {
		let q = new Queues();
		let l = this.list;
		l[root].visited = true;
		q.push(root);

		while(q.size) {
			let v = q.pop();
			console.log(v);
			//if (v ) {}
			let connections = l[v].size;
			for (var i = 0; i < connections; i++) {
				let ele = l[v].remove(0);
				if (!l[ele].visited) {
					l[ele].visited = true;
					q.push(ele);
				}
			}
		}
	}
}

let g = new Graph();
let ll = new LinkedList();
var myQueue = new Queues();
let myStack = new Stack();




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
//combine vector and shapes
//stroke width
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
	//storke and fill
	line(a, b, c, d) {
		this.c.beginPath();
		this.c.moveTo(a, b);
		this.c.lineTo(c, d);
		//this.c.closePath();
	}
	box(x, y, w, h) {
		this.c.beginPath();
		this.c.rect(x, y, w, h);
		//this.c.closePath();
	}
	circle(x, y, r) {
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
