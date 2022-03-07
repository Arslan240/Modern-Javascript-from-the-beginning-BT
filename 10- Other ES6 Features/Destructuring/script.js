// Mostly used Object Destructuring.

const person = {
  name: 'John Doe',
  age: 43,
  city: 'Miami',
  gender: 'male',
  sayHello : () => {
    console.log('Hello');
  }
};

// Old ES5 way
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;


// New ES6 way
const { name, age, city } = person;
console.log(name, age, city );




// this doesn't work, we need to use the same names that we've used in the object.
// const {name1,age1,city1} = person;
// console.log(name1,age1,city1);