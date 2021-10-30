'use strict';

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

const obj = new Point(10, 20);

console.log({
	has: {
		x: Reflect.has(obj, 'x'),
		y: Reflect.has(obj, 'y'),
		z: Reflect.has(obj, 'z'),
	}
});

console.log({
	in: {
		x: 'x' in obj,
		y: 'y' in obj,
		z: 'z' in obj,
	}
});
