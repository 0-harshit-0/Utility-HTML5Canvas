class ExtraUtiliy {
	constructor() {}
	static downloadFile(name, url) {
		let download = document.createElement('a');

		download.setAttribute("href", url);
		download.setAttribute("download", name);
		download.click();
		download.remove();
	}
}
class CanvasOptions {
	constructor({canvas, context}) {
		this.canvas = canvas;
		this.ctx = context;
		this.path = null;
	}
	
	/* ----------- interactive start ------------ */
	inPath({path, x, y}) {
		path = this.checkPath(path);
		return this.ctx.isPointInPath(path, x ?? y, y ?? x);
	}
	/* ----------- interactive over ------------ */

	checkCanvas(canvas) {
		if(!canvas) {
			return this.canvas;
		}else {
			return canvas;
		}
	}
	checkPath(path) {
		if(path == null || typeof(path) != "object") {
			return this.path;
		}else {
			return path;
		}
	}
	makePath(path) {
		this.path = new Path2D(path);
		return this.path;
	}
	captureStream(framerate = 60) {
		return this.canvas.captureStream(framerate);
	}
	getCanvasData() {
		return this.canvas.toDataURL('image/png', 1.0);
	}
	exportCanvas(canvas) {
		canvas = this.checkCanvas(canvas);
		canvas.toBlob((blob) => {
		  let url = URL.createObjectURL(blob);
		  ExtraUtiliy.downloadFile("export.png", url);
			URL.revokeObjectURL(url);
		}, "image/png", 1.0);
	}
	exportCanvasPart({x, y, width, height}) {
		if (!x || !y || !width || !height) throw "invalid data";

		let tempCanvas = document.createElement("canvas");
		tempCanvas.width = this.canvas.width;
		tempCanvas.height = this.canvas.height;
		let tempCtx = tempCanvas.getContext("2d");

		tempCtx.drawImage(
			this.canvas,
			x, y, width, height,
			x, y, width, height
		);

		this.exportCanvas(tempCanvas);
		tempCanvas.remove();
	}
	exportPath({path, color, scolor, fcolor, width, dash, dashOff, fill, stroke}={}) {
		let tempCanvas = document.createElement("canvas");
		tempCanvas.width = this.canvas.width;
		tempCanvas.height = this.canvas.height;
		let tempShapes = new Shapes({canvas: tempCanvas, context: tempCanvas.getContext("2d")});

		path = this.checkPath(path);
		if(fill & stroke) {
			tempShapes.strokefill({path, scolor, fcolor, width, dash, dashOff});
		}else if (fill) {
			tempShapes.fill({path, color});
		}else if (stroke) {
			tempShapes.stroke({path, color, width, dash, dashOff});
		}

		this.exportCanvas(tempCanvas);
		tempCanvas.remove();
	}
}

class Shapes extends CanvasOptions {
	constructor({canvas, context}={}) {
		super({canvas, context});
	}
	
	fill({path, color}={}, callback) {
		/*
			color :: color to fill with
			path :: the canvas path object
		*/
		path = this.checkPath(path);

		this.ctx.fillStyle = color ?? "black";

		this.ctx.fill(path);
		this.ctx.restore();

		if (typeof(callback) == "function") {
			callback({path, color, fill: true});
		}else{
			return {path, color, fill: true};
		}
	}
	stroke({path, color, width, dash, dashOff}={}, callback) {
		/*
			color :: color to stroke with
			path :: the canvas path object
			width :: width of line
			dash :: dash-space length (array)
			dashOff :: sets the line dash offset, or "phase."
		*/
		path = this.checkPath(path);

		this.ctx.strokeStyle = color ?? "black";
		this.ctx.lineWidth = width ?? 1;
		this.ctx.setLineDash(dash ?? []);
		this.ctx.lineDashOffset = dashOff ?? 0;

		this.ctx.stroke(path);
		this.ctx.restore();

		if (typeof(callback) == "function") {
			callback({path, color, width, dash, dashOff, stroke: true});
		}else{
			return {path, color, width, dash, dashOff, stroke: true};
		}
	}
	strokefill({path, scolor, fcolor, width, dash, dashOff}={}, callback) {
		path = this.checkPath(path);

		this.ctx.strokeStyle = scolor ?? "black";
		this.ctx.fillStyle = fcolor ?? "black";
		this.ctx.lineWidth = width ?? 1;
		this.ctx.setLineDash(dash ?? []);
		this.ctx.lineDashOffset = dashOff ?? 0;

		this.ctx.stroke(path);
		this.ctx.fill(path);
		this.ctx.restore();

		if (typeof(callback) == "function") {
			callback({path, scolor, fcolor, width, dash, dashOff, stroke: true, fill: true});
		}else{
			return {path, scolor, fcolor, width, dash, dashOff, stroke: true, fill: true};
		}
	}
	// --- storke and fill over ---
	line({path, x, y, x1, y1, cap}={}, callback) {
		path = this.makePath(path);

		this.ctx.save();
		this.ctx.lineCap = cap ?? 'butt';

		this.path.moveTo(x ?? 1, y ?? 1);
		this.path.lineTo(x1 ?? 10, y1 ?? 10);

		if (typeof(callback) == "function") {
			callback({path, x, y, x1, y1, cap});
		}else{
			return {path, x, y, x1, y1, cap};
		}
	}
	rect({path, x, y, size, width, height, join}={}, callback) {
		path = this.makePath(path);

		this.ctx.save();
		this.ctx.lineJoin = join ?? 'miter';
		width = width ?? size;
		height = height ?? size;

		this.path.rect(x ?? 1, y ?? 1, width ?? 10, height ?? 10);

		if (typeof(callback) == "function") {
			callback({path, x, y, width, height, join});
		}else{
			return {path, x, y, width, height, join};
		}
	}
	ellipse({path, x, y, radius, xRadius, yRadius, startAngle, endAngle, rotation, clock}={}, callback) {
		path = this.makePath(path);

		this.ctx.save();
		xRadius = xRadius ?? radius;
		yRadius = yRadius ?? radius;

		this.path.ellipse(x ?? 10, y ?? 10, xRadius ?? 1, yRadius ?? 1, rotation ?? 0, startAngle ?? 0, endAngle ?? Math.PI*2, clock ?? false);
		
		if (typeof(callback) == "function") {
			callback({path, x, y, radius, xRadius, yRadius, startAngle, endAngle, rotation, clock});
		}else{
			return {path, x, y, radius, xRadius, yRadius, startAngle, endAngle, rotation, clock};
		}
	}
	polygon({path, x, y, length, faces, rotation, join}={}, callback) {
		path = this.makePath(path);

		this.ctx.save();
		this.ctx.lineJoin = join ?? 'butt';

		// dividing 360 by no. of faces in a shape
		let tempTheta = (Math.floor(360/(faces ?? 5)))*Math.PI/180;
		// calculating the other sides
		let tempLength = length*Math.sin(((180-Math.floor(360/(faces ?? 5)))/2)*Math.PI/180)/Math.sin(tempTheta);
		/*
		move to x, y + length / 2 because the shape created from the center.
		Using tempLength calculated above as distance from center(line of symmetry) as distance from center to vertices.
		https://www.calculator.net/triangle-calculator.html?vc=90&vx=&vy=&va=45&vz=100&vb=45&angleunits=d&x=93&y=18
		*/
		this.path.moveTo((x+length/2) + ((tempLength ?? 20) * Math.cos(tempTheta)), (y+length/2) + ((tempLength ?? 20) * Math.sin(tempTheta)) );
		for (var i = 0; i < (faces ?? 5)+1; i++) {
			// adding rotation here, to rotate shape using angluar velocity
			let theta = tempTheta*(i+1)+rotation;
			this.path.lineTo((x+length/2) + ((tempLength ?? 20) * Math.cos(theta)), (y+length/2) + ((tempLength ?? 20) * Math.sin(theta)) );
		}

		if (typeof(callback) == "function") {
			callback({path, x, y, length, faces, rotation, join});
		}else{
			return {path, x, y, length, faces, rotation, join};
		}
	}
	eqTri({path, x, y, length, rotation}, callback) {
		if (typeof(callback) == "function") {
			this.polygon({path, x: x ?? 10, y: y ?? 10, length: length ?? 10, faces: 3, rotation: rotation ?? 0}, callback);
		}else{
			return this.polygon({path, x: x ?? 10, y: y ?? 10, length: length ?? 10, faces: 3, rotation: rotation ?? 0});
		}
	}
}