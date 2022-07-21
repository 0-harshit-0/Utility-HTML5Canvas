class Stack {
	constructor() {
		this.stackarray = new Array();
		this.length = this.stackarray.length;
	}
	push(value) {
		this.stackarray.unshift(value);
		this.length = this.stackarray.length;
		return value;
	}
	pop() {
		if (this.length <= 0) {
			throw 'Stack is empty';
		}
		const poped = this.stackarray.shift();
		this.length = this.stackarray.length;
		return poped;
	}
	view() {
		return this.stackarray;
	}
}

