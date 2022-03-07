// Maps store values in form of key-value pairs.
// The key is used to access the value.
// In maps, key and value can be of any type.

const map1 = new Map();

// Setting maps
const key1 = 'A string';
      key2 = {};
      key3 = function() {};


// Set keys
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1));
// total count
// console.log(map1.size);

// Iterating maps

// Loop using for...of for keys and values
// for(let [key, value] of map1){
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only, using .keys() function.  
// for(let value of map1.values()){
//   console.log(value);
// }

// Using foreach loop
// map1.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });


// create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array of values
const valArr = Array.from(map1.values());
console.log(valArr);

// create an array of keys only
const keyArr = Array.from(map1.keys());
console.log(keyArr);