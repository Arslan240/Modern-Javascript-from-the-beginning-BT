// every symbol is unique.

// we don't create it like new Symbol(), becz there is no constructor it is actually a primitive data type i guess.
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// // typeof gives us pure symbol not a symbol object which tells us that it's a primitive data type. 
// console.log(typeof sym2);

// // no two symbols are same
// console.log(Symbol() === Symbol());
// console.log(` `);

// Main Use of Symbols
// Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj1 = {}; // object
const myObj2 = []; // array

// console.log(myObj1);
// console.log(myObj2);

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

