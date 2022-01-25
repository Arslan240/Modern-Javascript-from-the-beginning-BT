// listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show loader
  //as I don't have loader gif, so i won't do anything with it.

  calculateResults();
  e.preventDefault();
});


// Calculate Results
function calculateResults(){
  console.log('Calculating...');

  // UI variables
  const amountInput = document.getElementById('amount');
  const interestInput = document.getElementById('interest');
  const yearsInput = document.getElementById('years');
  const monthlyPaymentUI = document.getElementById('monthly-payment');
  const totalPaymentUI = document.getElementById('total-payment');
  const totalInterestUI = document.getElementById('total-interest');

  const principal = parseFloat(amountInput.value); //principal will store the loan amount input value. Now amountInput is element not the actual value.
  const calculatedInterest = parseFloat(interestInput.value) / 100 / 12;
  const calculatePayments = parseFloat(yearsInput.value) * 12;
  
  // Calculate Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  // Validating if the calculating monthly is finite or not.
  if(isFinite(monthly)){
    monthlyPaymentUI.value = monthly.toFixed(2); //toFixed set number to specidied decimals.
    totalPaymentUI.value = (monthly * calculatePayments).toFixed(2);
    totalInterestUI.value = ((monthly * calculatePayments) - principal).toFixed(2);
   
    //Show results
    document.getElementById('results').style.display = 'block';
    //Hide loading gif if it was here
  }
  else {
    showErrorMessage('Please check your numbers');
  }

}

function showErrorMessage(error){
  // Hide results if already shown 
  document.getElementById('results').style.display = 'none';
  // Create a div 
  const errorDiv = document.createElement('div');

  // Get Elements
  // Because we want to insert in the card i.e UI element
  const cardUI = document.querySelector('.card');
  const headingUI = document.querySelector('.heading');

  // Add bootstrap classes
  errorDiv.className = 'alert alert-danger';

  // Create Text node and append to div
  const textNode = document.createTextNode(error);
  errorDiv.appendChild(textNode); //appending

  // Insert error above heading, insertBefore method will insert before an element
  cardUI.insertBefore(errorDiv, headingUI);

  // Clear error after 3 seconds, using window object method setTimeout() it will call a function after specified time
  // setTimeout(clearError(errorDiv), 3000);
  setTimeout(clearError, 3000);

}

function clearError(errorDiv){
  
  document.querySelector('.alert').remove();
  // errorDiv.remove(); //didn't work by passing the whole div to the function from the setTimeout
}




