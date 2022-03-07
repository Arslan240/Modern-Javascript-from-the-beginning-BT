// Iterators are advanced loops that can be paused.

function nameIterator(names){
  let nextIndex = 0;

  return {
    next: function () {
      if(nextIndex < names.length) {
        return { value: names[nextIndex++], done: false }
      }
      else {
        return {done: true};
      }
    }
  }
}

// create array of names
const names = ['Jack', 'Jill', 'John', 'James'];
// initialize iterator and pass the names array.
const namesIterator = nameIterator(names);
console.log(namesIterator.next());








// // Iterator Example
// function nameIterator(names){
//   let nextIndex = 0;

//   return {
//     next: function(){
//       return nextIndex < names.length ? {value: names[nextIndex++], done:false} : {done: true}
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['Jack','Jill','John'];
// const names = nameIterator(namesArr);

// console.log(names);

 












