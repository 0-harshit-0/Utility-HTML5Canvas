class Stack {
	constructor() {
		this.stackArray = new Array();
		this.length = this.stackArray.length;
	}
	push(value) {
		this.stackArray.unshift(value);
		this.length = this.stackArray.length;
		return value;
	}
	pop() {
		if (this.length <= 0) {
			throw 'Stack is empty';
		}
		const poped = this.stackArray.shift();
		this.length = this.stackArray.length;
		return poped;
	}
	view() {
		return this.stackArray;
	}
}

