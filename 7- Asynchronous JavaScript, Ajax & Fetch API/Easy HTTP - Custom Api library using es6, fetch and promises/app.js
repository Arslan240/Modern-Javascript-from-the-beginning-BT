const http = new EasyHTTP();
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

// Get users
// http.get(usersUrl)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// http.get(usersUrl); // when promise is not returned this is right

// POST Request
// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}
//create post
// http.post(usersUrl,data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// UPDATE Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data)) //this will log the updated user
//     .catch(error => console.log(error)); 

// DELETE Post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then((response) => console.log(response)) //this will log the updated user
    .catch((error) => console.log(error)); 