
class Queues {
	constructor() {
		this.queueArray = new Array();
		this.length = this.queueArray.length;
	}
	push(value) {
		this.queueArray.push(value);
		this.length = this.queueArray.length;

		return value;
	}
	pop() {
		if (!this.length) throw 'Queue is empty';
		
		const poped = this.queueArray.shift();
		this.length = this.queueArray.length;
		return poped;
	}
	view()  {
		return this.queueArray;
	}
}


