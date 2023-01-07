
class Queues {
	constructor() {
		this.queuearray = new Array();
		this.length = this.queuearray.length;
	}
	push(value) {
		this.queuearray.push(value);
		this.length = this.queuearray.length;

		return value;
	}
	pop() {
		if (!this.length) throw 'Queue is empty';
		
		const poped = this.queuearray.shift();
		this.length = this.queuearray.length;
		return poped;
	}
	view()  {
		return this.queuearray;
	}
}


