class Stack {
	constructor() {
		this.index = 0;
		this.stackarray = new Array();
	}
	push(value) {
		//if (this.index >= 10) throw 'Stack is full';
		this.stackarray.unshift(value);
		this.index++;
		return this.stackarray;
	}
	pop() {
		this.index--;
		if (this.index < 0) {
			this.index = 0;
			throw 'Stack is empty';
		}
		return this.stackarray.shift();
		//return this.stackarray;
	}
	static peek() {
		return this.stackarray;
	}
}

let myStack = new Stack();

