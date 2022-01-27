// Async function actually returns a promise
async function myFunc(){
    // return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 10);
    });

    //Fabricating an error
    const error = true;
    if(!error){
        const res = await promise;
        return res;
    }else {
        await Promise.reject(new Error('Something went wrong'));
    }

    let res ; //this part awaits until the promise is completed. which will be completed after 1 second.
    console.log(res = await promise); //
    // for(i = 0; i <= 100000; i++){ // this calculation takes a lot of time, When the previous await completes executing the above console  works in between this loop because we are awaiting on the promise inside the log.
    //     console.log(i);
    // }
    
    return 'res';
}

// console.log(myFunc()); // prints a promise

// myFunc()
//     .then(res => console.log('res')) //'Hello' is returned for resolve which is then logged.
//     .catch(err => console.log(err));

// ******************** BETTER EXAMPLE WITH FETCH ********************

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only procedd once its resolved
    const data = await response.json(); //returns promise

    // only proceed once second promise is resolved
    return data; //we're returning promise
}

getUsers().then(users => console.log(users));