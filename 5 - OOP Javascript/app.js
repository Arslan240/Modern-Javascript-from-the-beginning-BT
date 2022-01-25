/* ------------ PROTOYPAL INHERITANCE -------------- */
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${ths.lastName}`;
}

// Customer constructor, it looks like Customer is child of Person
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person protoype
Customer.prototype = Object.create(Person.prototype);

// Create Customer
const customer1 = new Customer('Tom', 'SMith', '555-555-555', 'Standard');

console.log(customer1);






/* ------------ OBJECT.PROTOTYPE */
/* ------------ PERSON.PROTOTYPE */


// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // Person.prototype is like upper level of an object Person but is stored inside the person object as a pseudo object shown as __prototype__. Prototype has it's own properties and methods.
// // E.g we'll place static functions in the prototype of Person.
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// const john = new Person('john','Doe', 'August 10, 2019');
// const jane = new Person('jane','monroe', 'October 10, 2020');

// console.log(john);

// console.log(john.calculateAge());
// console.log(john.getFullName());




// // Person constructor
// function Person(name,dob){
//   this.name = name;
//   // this.age = age
//   this.birthday = new Date(dob);
//   //methods
//   this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
// }

// // 'this' in global scope it will pertain to window object it'll not be an error
// // this.alert('Alert Baby');

// // const brad = new Person('Brad',20);
// // const john = new Person('John',45);

// const brad = new Person('Brad', 'October 9, 1981');

// console.log(brad);
// console.log(brad.calculateAge());