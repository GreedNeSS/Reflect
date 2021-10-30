'use strict';

const person1 = { name: 'Marcus Aurelius', born: 121 };
const person2 = { name: 'Marcus Aurelius', born: 121 };

class Person { }

const success1 = Reflect.setPrototypeOf(person1, Person.prototype);
const success2 = Object.setPrototypeOf(person2, Person.prototype);

console.dir({ person1, success1 });
console.dir({ person2, success2 });

const protoObj = Object.getPrototypeOf(person2);

const proto1 = Reflect.getPrototypeOf(person1);
const proto2 = Reflect.getPrototypeOf(proto1);
const proto3 = Reflect.getPrototypeOf(proto2);

console.dir({ proto1, proto2, proto3, protoObj });
