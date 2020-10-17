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

let myStack = new Stack();

