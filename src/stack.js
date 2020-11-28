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

let myStack = new Stack();

