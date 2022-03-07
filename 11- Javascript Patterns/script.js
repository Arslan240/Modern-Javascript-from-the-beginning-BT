// Basic Structure of Module Pattern

// We'll declare an IIFE i.e immediately invoked function. we wrap our whole function in parenthesis.
// parenthesis at the end invokes it as soon as it is declared.
// (
//   function () {
//     // declare private vars and functions inside this here.

//     return {
//       // declare public var and functions.
//     }
//   }
// )();

/* ==========================
    STANDARD MODULE PATTERN
   ========================== 
*/
// UICtrl is a module which is an IIFE which contains 
// const UICtrl = (
//   function (){
//     // anything outside return act as a private, because technically can't access anything of function from outside.
//     // The only thing we can access is what is returned, so it kind of act like it's public.

//     let text = 'Hello World';

//     const changeText = () => {
//       const element = document.querySelector('h1');
//       element.textContent = text;
//     }

//     return {
//       // Anything inside return is public, because we are returning it to whoever wants it.
//       callChangeText: () => {
//         changeText();
//       }
//     }
//   }
// )();

// console.log(UICtrl);
// UICtrl.callChangeText();


/* ==========================
    REVEALING MODULE PATTERN
   ========================== 
*/

// Revealing module pattern just returns the inner defined functions directly, instead of wrapping those functions in a new function to return, like it is done in module pattern.
const ItemCtrl = (
  function(){
    let data = [];

    function add(item){
      data.push(item);
      console.log('Item added');
    }

    function get(id) {
      return data.find((item) => {
        return item.id === id;
      });
    }

    return {
      add: add,
      get: get
    }
  }
)();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Jack'});
ItemCtrl.add({id: 3, name: 'Jill'});

console.log(ItemCtrl.get(1));
