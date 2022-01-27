
//simple promises in action
function makeRequest(location){
  return new Promise((resolve, reject) => {
      console.log(`Making Request to ${location}`);
      if(location === 'Google'){
          resolve('Google says hi');
      } else {
          reject('We can only talk to Google');
      }
  });
}

function processRequest(response){
  return new Promise((resolve, reject) => {
      console.log('Processing Response');
      resolve(`Extra Information + ${response}`);
  });
}

// Not using async but using simple promises
makeRequest('Google')
    .then(response => {
        console.log('Response received');
        return processRequest(response);
    })
    .then(processedResponse => {
        console.log(processedResponse);
    })
    .catch(err => console.log(err));


// Doing in Async way, Async keyword is used with a function which tells javascript it's async code and we use await keyword which will takeout statement after await in asynchronous way.
// Also async is just syntactical sugar for using promises, It makes it easier

async function doWork(){
    try{
        const response = await makeRequest('Google'); // the function makeRequest returns a promise that's why we save it in a variable. Once the await keyword is hit that statement is carried out as well as the control moves outside the function and start carrying out from there also. Once the await is completed, the control comes back and executes next statement and keep doing it unless we again hit await keyword.
        console.log('Response received'); //this statement is carried out once the above await is completed.
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (err){
        console.log(err);
    }
}

// Now we call that async function
doWork();