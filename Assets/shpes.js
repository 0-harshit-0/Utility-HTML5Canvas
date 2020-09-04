class Shapes {
	constructor() {
		//console.log('working');

		//c/tx.lineCap = 'round';
	}
	static strokeLine(a, b, c, d, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.moveTo(a, b);
		ctx.lineTo(c, d);
		ctx.stroke();
		ctx.closePath();
	}
	static fillLine(a, b, c, d, colour) {
		ctx.beginPath();
		ctx.strokeStyle = colour;
		ctx.moveTo(a, b);
		ctx.lineTo(c, d);
		ctx.fill();
		ctx.closePath();
	}
}