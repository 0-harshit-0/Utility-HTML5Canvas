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
s.rect({path:c});
s.fill({c:"blue"});

let t = s.rect({x:170, y:100, w:100, h:20});
s.stroke({path:t, c:"red", dash:[5,10], w:2});

s.ellipse({x:300, y:300, r:50});
s.fill({c:"red"});

s.eqTri({x:180, y:270, l:50});
s.fill();

s.polygon({x:170, y:270, l:50});
s.fill();

s.ellipse({x:320, y:300, r:50});
s.fill({c:"green"});
/*s.line({x:500, y:300, x1:550, y1:350});
s.stroke({c:"red", w:20});*/