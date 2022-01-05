class Graph {
	constructor(vertices) {
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

let g = new Graph(4);
