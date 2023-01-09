let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let s = new Shapes({canvas, context: ctx});

let timeout = false;
function getDimensions() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	main()
}
addEventListener('resize', function(e) {  //debounce
	clearTimeout(timeout);
	timeout = setTimeout(getDimensions, 500);
});
let tempData = null;
function main() {
	s.polygon({x: 50, y: 50, length: 100, faces: 5, rotation: 45*Math.PI/180});
	s.fill({color: "red"});
	
	s.rect({x: 200, y: 200, size: 100});
	s.stroke({color: "blue"});

	s.ellipse({x: 300, y: 300, radius: 50});
	tempData = s.strokefill({scolor: "black", fcolor: "orange"});

	s.eqTri({x: 500, y: 500, length: 100, rotation: 0*Math.PI/180});
	s.fill({color: "green"});

	s.line({x: 1, y: 1, x1: 400, y1: 400});
	s.stroke();
	// in path of line
	console.log(s.inPath({x: 400, y: 400}));
	//console.log(s.inPath({x: 400, y: 400}));
}

addEventListener("keypress", e => {
	if (e.key == "a") {
		s.exportPath(tempData);
	}
});

let a = new UGraph(12);
a.add(0,1);
a.add(0,4);
a.add(1,2);
a.add(1,5);
a.add(2,3);
a.add(2,6);
a.add(3,7);
a.add(4,5);
a.add(4,8);
a.add(5,6);
a.add(5,9);
a.add(6,7);
a.add(6,10);
a.add(7,11);
a.add(8,9);
a.add(9,10);
a.add(10,11);

getDimensions();