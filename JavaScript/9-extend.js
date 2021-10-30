'use strict';

const person = { name: 'Marcus Aurelius', born: 121 };

console.log({ isExtensible: Reflect.isExtensible(person) });
console.log({ success: Reflect.preventExtensions(person) });
// person.city = 'Roma'; //TypeError
console.log({ isExtensible: Reflect.isExtensible(person) });
