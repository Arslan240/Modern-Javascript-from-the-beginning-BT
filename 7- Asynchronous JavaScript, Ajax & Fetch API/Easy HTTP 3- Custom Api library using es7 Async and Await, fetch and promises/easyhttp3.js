/**
 * EasyHTTP LIbrary
 * 
 * Library for making HTTP requests
 * we'll use es6 classes
 */

class EasyHTTP{
    // Make an HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData; //returning a promise
        
        
        
        
        // NOT USING ASYNC AND JUST PROMISES DIRECTLY
        // To cope with all the following problems we return new promise and to return the data we have to return the promise and pass the data to resolve function and pass error to reject funciton.
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => resolve(data)) //in this function we are logging the data to console directly from our library the user who made the request don't actually get the data. So to return the data we have to return the promise and pass the data to resolve function and pass error to reject funciton.
        //         .catch(error => reject(error)) ;
        // })



        // user don't get the data
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => console.log(data)) //in this function we are logging the data to console directly from our library the user who made the request don't actually get the data. So to return the data we have to return the promise and pass the data to resolve function and pass error to reject funciton.
        //     .catch(error => console.log(error));

        // ERROR   
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => data) // if we do this and log this whole function where it is called, undefined will be logged and not the actual data. IDK why really but it is what is for now.
        //     .catch(error => error);
    }

    // Make an HTTP POST Request
    async post(url, data){
       
       // USING ASYNC AND AWAIT
       const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(data)
            });
       
       const respData = await response.json();
       return respData;
       
       
       
       // WITHOUT USING ASYNC AND AWAIT
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'POST',
        //         headers: { 'Content-type': 'application/json'},
        //         body: JSON.stringify(data)
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(error => reject(error));
        // });
    }

    // Make an HTTP Put Request
    async put(url, data){
       
        const response = await fetch(url, {
                    method: 'PUT',
                    headers: { 'Content-type': 'application/json'},
                    body: JSON.stringify(data) //we send the data in form of JSON not in the form of js object
                });
        
        const resData = await response.json();
        return resData;
       
       // DIRECTLY USING PROMISES AND FETCH
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'PUT',
        //         headers: { 'Content-type': 'application/json'},
        //         body: JSON.stringify(data) //we send the data in form of JSON not in the form of js object
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(error => reject(error));
        // });
    }

    // Make an HTTP Delete request
    async delete(url){
        const response = await fetch(url, {
                    method: 'DELETE',
                    headers: { 'Content-type': 'application/json'},
                })
        
        const resData = await 'Successfully Deleted';
        return resData;


        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'DELETE',
        //         headers: { 'Content-type': 'application/json'},
        //     })
        //         .then(response => response.json())
        //         .then(() => resolve('Resource deleted successfully.'))
        //         .catch(() => reject('Something went wrong'));
        // });
    }

}

