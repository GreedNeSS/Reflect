'use strict';

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

const obj = new Point(10, 20);

Reflect.deleteProperty(obj, 'x');
delete obj.y;

console.dir({ obj });
