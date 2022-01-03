class Stack {
	constructor() {
		this.length = 0;
		this.stackarray = new Array();
	}
	push(value) {

		this.stackarray.unshift(value);
		this.length++;

		return value;
	}
	pop() {
		if (this.length < 0) {
			this.length = 0;
			throw 'Stack is empty';
		}
		this.length--;
		return this.stackarray.shift();
		//return this.stackarray;
	}
	view() {
		return this.stackarray;
	}
}

//let myStack = new Stack();

