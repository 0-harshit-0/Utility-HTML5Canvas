
class Queues {
	constructor() {
		this.s = 0;
		this.queuearray = new Array();
	}
	push(value) {
		
		this.queuearray.push(value);
		this.s++;

		return value;
	}
	pop() {
		if (!this.s) throw 'Queue is empty';
		this.s--;
		
		return this.queuearray.shift();
	}
	view()  {
		return this.queuearray;
	}
}

var myQueue = new Queues();


