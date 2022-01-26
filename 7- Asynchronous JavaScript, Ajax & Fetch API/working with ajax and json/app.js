document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json',true);
  
  xhr.onload = function(){
      if(xhr.status === 200){
        //   console.log(this.responseText);
        const customer = JSON.parse(this.responseText);

        const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
        `;
        document.getElementById('customer').innerHTML = output;
      }
  }

  xhr.send();

}

function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    
    xhr.onload = function(){
        if(xhr.status === 200){
          //   console.log(this.responseText);
          const customer = JSON.parse(this.responseText); //this converts string to object literals
          const customersArray = Array.from(customer);
   
          let output = []; 
            // we can also use array form of object or use it directly. customersArray i.e above
            customer.forEach(function(customer, index) {
                output +=  `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                    `;
            });
            
          document.getElementById('customers').innerHTML = output;
        }
    }
  
    xhr.send();
  
  }
