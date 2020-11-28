
class Gradient{
	constructor() {
		this.vector2 = new Vector2D();
	}
	
	randomGradient(a, b) {
		let random = 2920 * Math.sin(a * 21942.0 + b * 171324.0 + 8912.0) * Math.cos(a * 23157.0 + b * 217832.0 + 9758.0);
		return this.vector2 = new Vector2D(Math.cos(random), Math.sin(random));
	}
	dotGridGradient(ia, ib, a, b) {
		let gradient = this.randomGradient(ia, ib);

		// Compute the distance vector
		let dx = a - ia;
		let dy = b - ib;
		
		// Compute the dot-product
		return (dx*gradient.x + dy*gradient.y);
	}
	static fade(t) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	static lerp(a0, a1, w) {
		return Gradient.fade(1.0 - w)*a0 + Gradient.fade(w)*a1;
	}
}

function perlin(a, b) {
	let gr = new Gradient();
    // Determine grid cell coordinates
    let x0 = Math.floor(a);
    let x1 = x0 + 1;
    let y0 = Math.floor(b);
    let y1 = y0 + 1;

    // Determine interpolation weights
    // Could also use higher order polynomial/s-curve here
    let sx = a - x0;
    let sy = b - y0;

    // Interpolate between grid point gradients
    let n0, n1, ia0, ia1, value;

    n0 = gr.dotGridGradient(x0, y0, a, b);
    n1 = gr.dotGridGradient(x1, y0, a, b);
    ia0 = Gradient.lerp(n0, n1, sx);

    n0 = gr.dotGridGradient(x0, y1, a, b);
    n1 = gr.dotGridGradient(x1, y1, a, b);
    ia1 = Gradient.lerp(n0, n1, sx);

    value = Gradient.lerp(ia0, ia1, sy);
    return value;
}
