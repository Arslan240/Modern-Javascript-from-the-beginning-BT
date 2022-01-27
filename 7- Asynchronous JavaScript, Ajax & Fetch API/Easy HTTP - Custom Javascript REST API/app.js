// We'll use this file to test our library


const http = new easyHTTP();
const url = 'https://jsonplaceholder.typicode.com/posts';

// http.get(url, function(error,response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(JSON.parse(response));
//     }
// });


const data = {
    title: 'Custom Post',
    body: 'This is a custome post'
};

// POST Request

// http.post(url,data, function(error, post){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// UPDATE Post
const urlPUT = 'https://jsonplaceholder.typicode.com/posts/5';
http.put(urlPUT, data, function(error, post){ 
    console.log(post);
})

// DELETE Post
http.delete(urlPUT,function(error, response){
    if(error){
        console.log(error);
    }
    else{
        console.log(response);
    }
})
