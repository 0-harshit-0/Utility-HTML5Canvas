class Node {
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
	add(v, dv) { //dv | destination vertices
		if(v == dv) return 0;
		if(this.AdjList.has(v)) {
			this.AdjList.get(v).d.add(dv);
		}else{
			if(this.length >= this.v) return 0;
			this.AdjList.set(v, new Node(dv));
			this.length++;
		}
		if(this.AdjList.has(dv)) {
			this.AdjList.get(dv).d.add(v);
		}else{
			if(this.length >= this.v) return 0;
			this.AdjList.set(dv, new Node(v));
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
			console.log(item[0]);
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
/*
let g = new UGraph(10);
g.add('fr','ma');
g.add('fr','wu');
g.add('fr','ka');
g.add('ma','kar');
g.add('kar','au');
g.add('au','mu');
g.add('wu','nu');
g.add('nu','su');
g.add('nu','mu');
g.add('wu','er');
g.add('ka','mu');
*/
class DGraph { //incomplete
	constructor(vertices) {
		this.v = vertices;
		this.AdjList = new Map();
		this.length = 0;
	}
	add(v, dv) { //sv | source vertices
		if(v == dv) return 0;
		if(this.AdjList.has(v)) {
			if(this.AdjList.has(dv) && this.AdjList.get(dv).d.has(v)) return 0;

			this.AdjList.get(v).d.add(dv);
		}else{
			if(this.length >= this.v) return 0;
			if(this.AdjList.has(dv) && this.AdjList.get(dv).d.has(v)) return 0;

			this.AdjList.set(v, new Node(dv));
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
		this.AdjList.get(root).visited = true;
		let ite = [...this.neighbors(root)];
		ite.forEach(z=> {
			if(this.AdjList.get(z).visited){
				dfs(z);
			}
		});
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
//let g = new DGraph(6);