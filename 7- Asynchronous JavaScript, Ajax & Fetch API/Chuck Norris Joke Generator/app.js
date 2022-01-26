const getJokesBtn = document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    // const number = document.querySelector('input[type=number]').value;
   const number = document.getElementById('number').value;
    
   const xhr = new XMLHttpRequest();
   xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
   
   xhr.onload = function(){
       if(xhr.status === 200) {
           const response = JSON.parse(this.responseText);
           
           let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke) {
                    output += `
                     <li>${joke.joke}</li>
                    `;
                });
                
                const jokesDisplay = document.querySelector('.jokes');
                jokesDisplay.innerHTML = output;
            } else{
                output += '<li>Something went wrong</li>';
            }
           
           
           console.log(response);
       }
   }

   xhr.send();

   console.log(number);
    e.preventDefault();
}