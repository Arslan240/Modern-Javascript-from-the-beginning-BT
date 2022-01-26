//Here we are creating initial array of post

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function createPost(post){
  setTimeout(function(){ //we are using setTimeout as a server time mimic. The function passed in to the setTimeout is actually a callback function
      posts.push(post)
  }, 2000);
}

function getPosts(){
  setTimeout(function(){
      let output = '';
      posts.forEach(function(post){
          output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();