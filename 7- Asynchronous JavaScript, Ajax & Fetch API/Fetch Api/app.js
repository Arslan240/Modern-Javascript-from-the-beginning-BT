//Fetch actually returns promises, so we have to use .then and .catch on fetch function.
const outputDiv = document.getElementById('output');
const githubAPIUsers = 'https://api.github.com/users';

// Get text from a file
document.getElementById('button1').addEventListener
('click', getText);

// Get json from a file
document.getElementById('button2').addEventListener
('click', getJSON);

// Get data from external API
document.getElementById('button3').addEventListener
('click', getAPIData);

function getText(){
  fetch('test.txt')
    .then((response) => {
        // console.log(response); //this response is actually an object and not the text in the file. So what we do is we do response.text(). This will return a new promise with the text passed as parameter which we can later console.log();
        // console.log(response.text()); //it's a promise
        return response.text(); //returns the promise with text
    })
    .then((data) => {  //to handle promise returned from response.text() we are using this 'then()' and if it returns another promise we'll use another then().
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch((error) => {
        console.log(error); //idk
    });
}

function getJSON(){
  fetch('post.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let output = [];
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        outputDiv.innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    })
}

function getAPIData(){
    fetch(githubAPIUsers)
      .then(function(response) {
          return response.json();
      })
      .then(function(data){
          console.log(data);
          let output = [];
          data.forEach(function(user){
              output += `<li>${user.login}</li>`;
          });
          outputDiv.innerHTML = output;
      })
      .catch(function(error){
          console.log(error);
      })
  }