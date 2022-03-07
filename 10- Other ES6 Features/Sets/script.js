// Sets - Store unique values of any type

const set1 = new Set();
// OR
const set2 = new Set(['John', {Name: 'John'}, function() {}]);

// add values to set
set1.add(100);
set1.add(100);
set1.add({Name: 'John'});
set1.add(true);

console.log(set1);

console.log(set2);

// Check for values
// We can also do calculations
console.log(set1.has(50+50));
// it returns false, cz it is reference type. It checks memory, it's not a primitive type.
console.log(set1.has({Name: 'John'}));