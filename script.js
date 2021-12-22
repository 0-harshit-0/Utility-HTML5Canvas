let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let s = new VecShapes(ctx);
let timeout = false;
function getDimensions() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
}
getDimensions();
addEventListener('resize', function(e) {//debounce
	clearTimeout(timeout);
	timeout = setTimeout(getDimensions, 500);
});
s.eqTri(10, new Vector2D(20, 20), 45);
s.stroke('red', 2)