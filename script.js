let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let s = new Shapes(ctx);
let timeout = false;
function getDimensions() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
}
getDimensions();
addEventListener('resize', function(e) {  //debounce
	clearTimeout(timeout);
	timeout = setTimeout(getDimensions, 500);
});


/*
s.line({x:1,y:1,x1:20,y1:20});
s.stroke({c:'red',w:5});
*/

let c = new Path2D();
c.rect(200,100,100, 100);
let temp = s.rect(c);
s.fill(temp, "blue");

s.ellipse('',300, 300, 50, 30);
s.fill("", "red");

s.eqTri('',380, 270, 50);
s.fill("", "green");

s.polygon('',0, 70, 50, 6, 180*Math.PI/180);
s.fill("", "red");


/*s.line({x:500, y:300, x1:550, y1:350});
s.stroke({c:"red", w:20});*/