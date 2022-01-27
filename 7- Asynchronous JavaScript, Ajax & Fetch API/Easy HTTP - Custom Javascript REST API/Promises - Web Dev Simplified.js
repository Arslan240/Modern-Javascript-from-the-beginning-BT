// Inside promise, we call resolve function if the some task is completed successfully, if the task fails then we call reject method. This is the syntax of the promise function while declaring.
// After declaring the promise we then add .then(callback).catch(callback). Then works when the resolve is called from promise whereas catch works when reject is called from the promise.

// // ************************ BASIC PROMISE CONCEPT **************************
// let prom = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a == 2){ // let's say we check here if the task is completed successfully in if.
//         resolve('Success');
//     }
//     else { // When failed
//         reject('Failed');
//     }
// });


// // Adding then and catch
// prom
// .then((message) => {
//     console.log('Then called : ' + message);
// })
// .catch((message) => {
//     console.log('Catch called : ' + message);
// });

// ************************ A LITTLE COMPLEX **************************

let userLeft = false;
let userWatchingCatMeme = false;

    //Not using promises but simple callbacks
// function watchTutorial(successCallback, errorCallback){
//   if(userLeft === true){
//     errorCallback({name: 'User Left', message: ':('});
//   }
//   if(userWatchingCatMeme === true){
//       errorCallback({name: 'User watching cat meme', message: ':(:('});
//   }
//   if(!userLeft && !userWatchingCatMeme){
//       successCallback('Thumbs up! and Subscribe');
//   }
// }

// watchTutorial(
//     (message) => { //first callback declared and passed using arrow functions
//         console.log(message);
//     },
//     (message) => { //second callback
//         console.log(message);
//     } 
// );

    // Using promises and some complexity

function watchTutorialPromise(){ //this function will just return new Promise
    return new Promise((resolve, reject) => {
        if(userLeft === true){
            reject({name: 'User Left', message: ':('});
        }
        if(userWatchingCatMeme === true){
            reject({name: 'User watching cat meme', message: ':(:('});
        }
        if(!userLeft && !userWatchingCatMeme){
            resolve('Thumbs up! and Subscribe');
        }
    });
};

watchTutorialPromise() //this returns a promise so we can use .then.catch stuff directly on this function
.then((message) => console.log(message))
.catch((message) => console.log(message));

// Or we can check mutliple promises also
watchTutorialPromise().All


