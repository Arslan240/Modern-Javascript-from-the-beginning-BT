// Init
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  
  if(userText !== ''){
     // Make HTTP call
    github.getUser(userText)
      .then((data) => {
        if(data.profile.message === 'Not Found'){
          // Show Alert, -> UI class
          ui.showAlert('User not found', 'alert alert-danger'); //bootstrap classes
        }
        else{
          // Show Profile, -> UI class
          ui.showProfile(data.profile);
          ui.showRepos(data.repos); //we return profile and repos in the data object.
        }
      })
  }
  else {
    // Clear the Profile -> UI class
    ui.clearProfile();
  }
})
