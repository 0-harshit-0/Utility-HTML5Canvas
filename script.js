let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let s = new Shapes(ctx);
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


/*s.line({x:1,y:1,x1:20,y1:20});
s.stroke({c:'red',w:5});*/
let c = new Path2D();
c.rect(100,100,100,100);
let r = s.box({path:c}, (data)=> {
	s.stroke({path:data.path});
});

