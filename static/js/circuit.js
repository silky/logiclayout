// /* ----------------------------------------------------------------------------
//  * circuit.js
//  * Created by Ingrid Avendano on 11/20/13. 
//  * ----------------------------------------------------------------------------
//  * Contains the JS Canvas functions to draw logic gates. 
//  * ------------------------------------------------------------------------- */
// var results = JSON.parse( '{{json | safe}}' );

// function drawAndGate(x, y, size, inputs) {
// 	// determine height and length based on inputs
// 	var h = size*inputs;
// 	var l = h;
// 	var midPoint = size/2; 

// 	var gate = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 	});

// 	// creating the body of an AND gate
// 	gate.moveTo(new Point(x - l/2, y - h/2));
// 	gate.lineTo(new Point(x - l/2, y + h/2));
// 	gate.lineTo(new Point(x, y + h/2));
// 	gate.arcTo(new Point(x + l/2, y), new Point(x, y - h/2));
// 	gate.closePath();
	
// 	// input pins
// 	for (var i=0; i<inputs; i++) {
// 		var from = new Point(x - l, y - h/2 + midPoint + i*size);
// 		var to = new Point(x - l/2, y - h/2 + midPoint + i*size);
// 		var pinLine = new Path.Line(from, to);
// 		pinLine.strokeColor = 'black';
// 		pinLine.strokeWidth = 2;
// 	}

// 	// output pin
// 	var gateOutput = new Point(x + l/2, y);
// 	var outputPoint = new Point(x + l, y);
// 	var pinLine = new Path.Line(gateOutput, outputPoint);
// 	pinLine.strokeColor = 'black';
// 	pinLine.strokeWidth = 2;

// 	return outputPoint;
// }

// function drawOrGate(x, y, size, inputs) {

// 	// determine height and length based on inputs
// 	var h = size*inputs;
// 	var l = h;
// 	var midPoint = size/2; 


// 	// input pins
// 	for (var i=0; i<inputs; i++) {
// 		var from = new Point(x - l, y - h/2 + midPoint + i*size);
// 		var to = new Point(x - l/4, y - h/2 + midPoint + i*size);
// 		var pinLine = new Path.Line(from, to);
// 		pinLine.strokeColor = 'black';
// 		pinLine.strokeWidth = 2;
// 	}

// 	// creating the body of an AND gate
// 	var gate = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 		fillColor: 'white'
// 	});
// 	gate.moveTo(new Point(x - l/2, y - h/2));
// 	gate.curveTo(new Point(x - l/4,y), new Point(x - l/2, y + h/2));
// 	gate.quadraticCurveTo(new Point(x + l/4, y + h/2), new Point(x + l/2, y));
// 	gate.quadraticCurveTo(new Point(x + l/4, y - h/2), new Point(x - l/2, y - h/2));

// 	gate.closePath();

// 	// // center of gate
// 	// var dot = new Path.Circle(new Point(x,y), 3);
// 	// dot.fillColor = 'red';

// 	// output pin
// 	var gateOutput = new Point(x + l/2, y);
// 	var outputPoint = new Point(x + l, y);
// 	var pinLine = new Path.Line(gateOutput, outputPoint);
// 	pinLine.strokeColor = 'black';
// 	pinLine.strokeWidth = 2;

// 	return outputPoint;
// }

// function drawXorGate(x, y, size, inputs) {

// 	// determine height and length based on inputs
// 	var h = size*inputs;
// 	var l = h;
// 	var offset = h/5;
// 	var midPoint = size/2; 


// 	// input pins
// 	for (var i=0; i<inputs; i++) {
// 		var from = new Point(x - l, y - h/2 + midPoint + i*size);
// 		var to = new Point(x - l/4, y - h/2 + midPoint + i*size);
// 		var pinLine = new Path.Line(from, to);
// 		pinLine.strokeColor = 'black';
// 		pinLine.strokeWidth = 2;
// 	}

// 	// creating the body of an AND gate
// 	var gate = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 		fillColor: 'white'
// 	});
// 	gate.moveTo(new Point(x - l/2, y - h/2));
// 	gate.curveTo(new Point(x - l/4,y), new Point(x - l/2, y + h/2));
// 	gate.quadraticCurveTo(new Point(x + l/4, y + h/2), new Point(x + l/2, y));
// 	gate.quadraticCurveTo(new Point(x + l/4, y - h/2), new Point(x - l/2, y - h/2));

// 	gate.closePath();

// 	// xor line
// 	var xorLine = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2
// 	});
// 	xorLine.moveTo(new Point(x - l/2 - offset, y - h/2));
// 	xorLine.curveTo(new Point(x - l/4 - offset,y), new Point(x - l/2 - offset, y + h/2));


// 	// output pin
// 	var gateOutput = new Point(x + l/2, y);
// 	var outputPoint = new Point(x + l*1.25, y);
// 	var pinLine = new Path.Line(gateOutput, outputPoint);
// 	pinLine.strokeColor = 'black';
// 	pinLine.strokeWidth = 2;

// 	return outputPoint;
// }

// function drawNotGate(x, y, size) {
// 	// determine height and length based on inputs
// 	var h = size;
// 	var l = h;
// 	var midPoint = size/2; 


// 	var inputPoint = new Point(x - l*1.5, y);
// 	var gateInput = new Point(x - l/2, y);
// 	var inputLine = new Path.Line(gateInput, inputPoint);
// 	inputLine.strokeColor = 'black';
// 	inputLine.strokeWidth = 2;

// 	// creating the body of an AND gate
// 	var gate = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 		fillColor: 'white'
// 	});
// 	gate.moveTo(new Point(x - l/2, y - h/2));
// 	gate.lineTo(new Point(x - l/2, y + h/2));
// 	gate.lineTo(new Point(x + l/2, y));
// 	gate.closePath();

// 	// output pin
// 	var gateOutput = new Point(x + l/2, y);
// 	var outputPoint = new Point(x + l*1.5, y);
// 	var outputLine = new Path.Line(gateOutput, outputPoint);
// 	outputLine.strokeColor = 'black';
// 	outputLine.strokeWidth = 2;

// 	// not circile of gate
// 	var notCircle = new Path.Circle(new Point(x + l/2 + (size/6)/2,y), size/6);
// 	notCircle.fillColor = 'white';	
// 	notCircle.strokeColor = 'black';
// 	notCircle.strokeWidth = 2;

// 	return outputPoint;
// }


// function drawInput(x, y, size, name) {
// 	// determine height and length based on inputs
// 	var h = size/2;
// 	var l = size;

// 	var pin = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 	});

// 	// creating the body of input
// 	pin.moveTo(new Point(x - l/2, y + h/2));
// 	pin.lineTo(new Point(x + l*0.75, y + h/2));
// 	pin.lineTo(new Point(x + l, y));
// 	pin.lineTo(new Point(x + l*0.75, y - h/2));
// 	pin.lineTo(new Point(x - l/2, y - h/2));
// 	pin.closePath();

// 	// name of input
// 	var text = new PointText(new Point(x - l*1.5, y + 4));
// 	text.fillColor = 'black';
// 	text.content = name;

// 	// output pin
// 	var inputOutput = new Point(x + l, y);
// 	var outputPoint = new Point(x + l*1.5, y);
// 	var pinLine = new Path.Line(inputOutput, outputPoint);
// 	pinLine.strokeColor = 'black';
// 	pinLine.strokeWidth = 2;

// 	// // center of input
// 	// var dot = new Path.Circle(new  Point(x, y), 3);
// 	// dot.fillColor = 'red';

// 	return outputPoint;
// }

// function drawOutput(x, y, size, name) {
// 	// determine height and length based on inputs
// 	var h = size/2;
// 	var l = size;

// 	var pin = new Path({
// 		strokeColor: 'black', 
// 		strokeWidth: 2,
// 	});

// 	// creating the body of input
// 	pin.moveTo(new Point(x + l/2, y + h/2));
// 	pin.lineTo(new Point(x - l*0.75, y + h/2));
// 	pin.lineTo(new Point(x - l, y));
// 	pin.lineTo(new Point(x - l*0.75, y - h/2));
// 	pin.lineTo(new Point(x + l/2, y - h/2));
// 	pin.closePath();

// 	// name of input
// 	var text = new PointText(new Point(x + l, y + 4));
// 	text.fillColor = 'black';
// 	text.content = name;

// 	// output pin
// 	var inputOutput = new Point(x - l, y);
// 	var outputPoint = new Point(x - l*1.5, y);
// 	var pinLine = new Path.Line(inputOutput, outputPoint);
// 	pinLine.strokeColor = 'black';
// 	pinLine.strokeWidth = 2;

// 	return outputPoint;
// }

// function drawNodes(node, x, y) {
// 	var inputs = node.inputs;
// 	var kind = node.kind;
// 	var size = 20;

// 	if (kind == 'and') {
// 		drawAndGate(x, y, size, inputs);
// 	} else if (kind == 'or') {
// 		drawOrGate(x, y, size, inputs);
// 	} else if (kind == 'xor') {
// 		drawXorGate(x, y, size, inputs);
// 	} else if (kind == 'input') {
// 		drawInput(x, y, size, node.name);
// 	} else if (kind == 'output') {
// 		drawOutput(x, y, size, node.name);
// 	} else if (kind == 'not') {
// 		drawNotGate(x, y, size);
// 	}
// }  



// function drawCircuit(circuit, xWin, yWin) {
// 	// drawAndGate(500, 100, 20, 2);
// 	// drawInput(400, 100, 20, 'A');
// 	// drawOrGate(500, 200, 20, 2);
// 	// drawXorGate(400, 200, 20, 2);
// 	// drawNotGate(300, 200, 20);
// 	// drawOutput(100,100,20, 'F');


// 	var xTicks = circuit.depth; 
// 	var yTicks = circuit.weight;


// 	var xIncrement = (xWin/xTicks);
// 	var yIncrement = (yWin/yTicks);


// 	for (var i=0; i<circuit.nodes.length; i++) {
// 		var x = xIncrement/2 + (circuit.nodes[i].x * xIncrement);
// 		var y = circuit.nodes[i].y * yWin;
// 		var kind = circuit.nodes[i].kind;

// 		drawNodes(circuit.nodes[i], x, y);
// 	}

// }

// function onResize(event) {
// 	var xWin = view.bounds.width;
// 	// var xWin = 1140;
// 	console.log(xWin);
// 	var yWin = view.bounds.height;
// 	// var yWin = 600;
// 	console.log(yWin);

// 	drawCircuit(results, xWin, yWin);
// }
