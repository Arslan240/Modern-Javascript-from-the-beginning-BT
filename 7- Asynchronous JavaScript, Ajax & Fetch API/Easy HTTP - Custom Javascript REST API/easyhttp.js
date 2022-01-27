// This one is our actual library, which will use es5 prototypes and ajax xhr

function easyHTTP(){
    this.http = new XMLHttpRequest();  //single property
}

// Different Prototype methods
//Make an HTTP GET Request

easyHTTP.prototype.get = function(url, callback){
    
    this.http.open('GET',url, true);
    
    // If we use this inside a function it would pertain to that function, In our case this.http.status is undefined because it is not pointing to the http outside the function which is defined, but it's scope in inside the function. (I don't really understand what is happening here)
    // So we store the outer instance of this in a variable, let's say self and use it inside the function.
    let self = this;
    
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


//Make an HTTP POST Request, my version . IDK why my version is causing some problems even though it's similar
// easyHTTP.prototype.post = function(url, data, callback){
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Cotent-type', 'application/json');

//     let self = this;
//     this.http.onload = function(){
//         callback(null, self.http.responseText); //when added it will return new post and it's id will be incremented by 1 from the last photo id.
//     }

//     this.http.send(JSON.stringify(data));
// }

//Brad Traversy version, this one is running fine
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText);
    }
  
    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText); //responseText in this case will contain the post that was updated.
    }
  
    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    
    this.http.open('DELETE',url, true);
    
       let self = this;
    
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,'Post Deleted'); //responseText is goinna be an empty object, it'll not return the post deleted.
        }else{
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}
