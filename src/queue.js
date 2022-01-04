
class Queues {
	constructor() {
		this.length = 0;
		this.queuearray = new Array();
	}
	push(value) {
		
		this.queuearray.push(value);
		this.length++;

		return value;
	}
	pop() {
		if (!this.length) throw 'Queue is empty';
		this.length--;
		
		return this.queuearray.shift();
	}
	view()  {
		return this.queuearray;
	}
}

var myQueue = new Queues();


