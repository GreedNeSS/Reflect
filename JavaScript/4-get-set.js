'use strict';

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

const obj = new Point(10, 20);

const x = Reflect.get(obj, 'x');
Reflect.set(obj, 'y', 30);

// const x = obj['x'];
// obj['y'] = 30;

// const x = obj.x;
// obj.y = 30;

console.dir({ x, obj });
