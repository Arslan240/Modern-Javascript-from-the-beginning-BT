document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // open function, we specify the type of request we want to make and the file to which we want to make it to.
    xhr.open('GET','data.txt', true);  // ('request type', 'file', 'async or not'); 
    // console.log('READYSTATE', xhr.readyState);

    // Optional - onprogress used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onerror = function(){
        console.log('Request error...'); //or fetch error
    }

    // onload runs when the readyState is 4. It's newer function before it, we had to check the readyState and do stuff accordingly.
    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            console.log(this.responseText);
            const div = document.getElementById('output');
            div.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //Previous method
    // xhr.onreadystatechange = function (){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    



    // HTTP Statuses
    // 200: ok
    // 403: "Forbidded"
    // 404: "Not Found"
}

