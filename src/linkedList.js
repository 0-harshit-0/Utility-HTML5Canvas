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

let ll = new LinkedList();
