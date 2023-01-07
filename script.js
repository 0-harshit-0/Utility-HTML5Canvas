let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let s = new Shapes(ctx);
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


/*
s.line({x:1,y:1,x1:20,y1:20});
s.stroke({c:'red',w:5});
*/

function main() {
	let c = new Path2D();
	s.polygon('', 350, 100, 100, 4, 45*Math.PI/180);
	s.fill("", "red");
	
	s.rect("", 200,100,100);
	s.fill("", "blue");

	s.ellipse('', 300, 300, 50);
	s.fill('', "red");

	s.eqTri('', 380, 270, 50);
	s.stroke('', "green");

	s.polygon('', 80, 70, 50, 4, -(45*Math.PI/180));
	s.stroke('', "red");

	s.line('', (1*Math.cos(0))+400, (1*Math.sin(0))+400, 400 800);
	s.stroke('', "red");
}

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

/*s.line({x:500, y:300, x1:550, y1:350});
s.stroke({c:"red", w:20});*/
