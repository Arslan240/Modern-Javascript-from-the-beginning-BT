/* ---------------------------- DOM MANIPULATION ------------------- */

let val;

val = document;
val = document.all; //this property stores all the elements of the document in an array form and we can access it using indexes like 0,1,2.
val = document.all[0]; //here we are accessing the first element of the array which is <html></html>
val = document.all.length; //tells total elements inside our document
val = document.head; //gives us just head
val = document.body; //gives body


val = document.scripts; //this returns an HTML Collection not an array.
val = document.scripts[2].getAttribute('src');

//converting HTML Collection to array.
scripts = document.scripts;

scriptsArray = Array.from(scripts); //this from method from Array class converts non array lists to arrays.

//now we can apply for each loop on scriptsArray. Before converting it to array it was not possible.
scriptsArray.forEach( function(script) {
    console.log(script);
});


console.log(val);









/* ---------------------------- DATE AND TIME ------------- */

// let val;
// const today = new Date();
// const birthday = new Date('9/10/1981');
// // val = birthday;
// val = today;
// val = birthday;
// val = birthday.getMonth()+1;
// console.log(val);



/* ---------------------------- OBJECT LITERALS ------------- */

// const person = {
//     firstName : 'Steve',
//     lastName : 'Smith',
//     age : 22,
//     email : 'stevesmith@aol.com',
//     address
// }

// let val = person;

// val = person.firstName; //OR
// val = person['firstName']; //we can access object literals in this way too, but it's not recommended.

// console.log(val);




/* ---------------------------- TEMPLATE STRINGS AND LITERALS ------------- */

//by using template strings we can omit the huge hassle of concatenating the strings, we can just place variables in between the strings easily.

//template string. for template string we use `` ticks

// let name = 'Arslan';
// let age = 23;
// let job = 'crypto trader';
// let city = 'Faisalabad';
// let html;

// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>City: ${city}</li>
//         <li>Job: ${job}</li>
//     </ul>
// `;
// document.body.innerHTML = html;


/* ---------------------------- NUMBERS AND MATH OBJECT ------------- */

// //Math object

// val = Math.PI;
// val = Math.round(2.44425);
// val = Math.ceil(4.3);
// val = Math.floor(4.3);

// console.log(val);







/* ---------------------------- VARIABLE STUFF ------------- */

//Const variables can't be changed once initialized if primitive types. e.g.

    // const num = 1;
    // // num = 3; //this is an error

    //  //however if we are setting a reference type as const, then we can't redeclare under the same variable name or we can't point it to the whole new block of memory. But we still can mutate the original entity. e.g in case of arrays, objects etc.

    //  const person = {
    //      name : "Arslan",
    //      age : 22
    //  }
    //  console.log(person);

    //  person.age = 33;  //here we have mutated the variables inside an object
    //  console.log(person); 

    // //  person = { //now this is an invalid assignment becase person is a const variable.
    // //      name : "Arslan",
    // //      age : 22
    // //  }

    // //Similarly const arrays
    // const arr = [1,2,3,4,5];
    // console.log(arr);
    // arr.push(6); //this is valid because we are mutating the array. This is not possible in other languages I studied e.g. C, java etc. But here it's possible.
    // console.log(arr); 

    // //invalid
    // // arr = [1,2,3,4,5,6];
















/* ---------------------------- CONSOLE STUFF ------------------- */
// console.log("LALA")
// console.log(123)
// console.log(true)
// var greeting = "Laaa"
// console.log(greeting)
// console.log([1,2,3,4,5])
// console.log({a:1}) //{} using curly brackets is for objects
// console.table({a:1,b:2}) //we can also use objects for printing out tables in the console.
// console.error("This is a fucking error")

// console.time() //this .time and timeEnd function allows us to calculate the time took by the code in between these lines.
//     var num = 0;
//     console.log(++num)
//     console.log(++num)
//     console.log(++num)
//     console.log(++num)
//     console.log(++num)
//     console.log(++num)
// console.timeEnd() //timer ends here