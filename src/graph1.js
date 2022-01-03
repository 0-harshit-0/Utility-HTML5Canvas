class Node {
	constructor(data, nxt) {
		this.d = data;
		this.next = new Array();
		this.visited = false;
	}
}
class DGraph {
	constructor(vertices) {
		this.v = vertices;
		this.AdjList = new Map();
		this.length = 0;
		/*for (var i = 0; i < this.v; i++) {
			this.list.push(new Node(null));
		}*/
	}
	add(v, dv) { //sv | source vertices
		if(v == dv) return 0;
		if(this.AdjList.has(v)) {
			if(this.AdjList.has(dv) && this.AdjList.get(dv).has(v)) return 0;

			this.AdjList.get(v).add(dv);
		}else{
			if(this.length >= this.v) return 0;
			if(this.AdjList.has(dv) && this.AdjList.get(dv).has(v)) return 0;

			this.AdjList.set(v, new Set().add(dv));
		}
		this.length++;
	}
	view() {
		const iterator1 = this.AdjList[Symbol.iterator]();

		for (const item of iterator1) {
			console.log(item);
		}
	}
}
//let g = new DGraph(6);
class UGraph {
	constructor(vertices) {
		this.v = vertices;
		this.AdjList = new Map();
		this.length = 0;
	}
	add(v, dv) { //sv | source vertices
		if(v == dv) return (0);
		if(this.AdjList.has(v)) {
			this.AdjList.get(v).add(dv);
		}else{
			if(this.length >= this.v) return (0);
			this.AdjList.set(v, new Set().add(dv));
		}
		if(this.AdjList.has(dv)){
			this.AdjList.get(dv).add(v);
		}else{
			this.AdjList.set(dv, new Set().add(v));
		}
		this.length++;
	}
	view() {
		const iterator1 = this.AdjList[Symbol.iterator]();

		for (const item of iterator1) {
			console.log(item);
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

let g = new UGraph(6);
