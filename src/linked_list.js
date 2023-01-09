class Node {
	constructor(data) {
		this.d = data;
		this.next = null;
		this.visited = false;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	view() {
		// let curr = this.head;
		// while(curr) {
		// 	console.log(curr.d);
		// 	curr = curr.next;
		// }
		return this;
	}
	get(n = 0) { //by index
		let curr = this.head;
		for (var i = 0; i < n; i++) {
			curr = curr.next;
		}
		return curr.d;
	}
	add(element) { // add a node at the end of the list
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
		this.length++;
		return element;
	}
	insert(element, index=0) { // insert a node between list
		if (index < 0 || index > this.length) return 0;

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
		this.length++;
		return element;
	}
	delete(element) {  // delete a node
		let deleted = false, curr = this.head, prev, i=0;
		if (element == this.head.d) {
			deleted = true;
			this.head = this.head.next;
		}else {
			while(curr.next !== null) {
				i++;
				prev = curr;
				curr = curr.next;
				if (curr.d == element) {
					deleted = true;
					prev.next = curr.next;
					break;
				}
			}
		}
		
		if (deleted) {
			this.length--;
			return i;
		}else {
			return deleted;
		}
	}
	remove(index=(this.length-1)) {  // remove a node from the end of the list
		let temp;
		if (index < 0 || index > this.length-1) {
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
			this.length--;
			return temp;
		}
	}
}
