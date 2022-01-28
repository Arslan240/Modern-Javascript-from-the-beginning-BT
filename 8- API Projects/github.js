class Github{
  constructor(){
    this.client_id = '00d2142a5d4735e37853';
    this.client_secret = 'bb49e56d17716b8b968456df0e74ba34bd74f052';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'; // a string for sorting the repos while passing in url
  }

  async getUser(user){ //
    // We'll be making two requests in this function. One for user info other for repos. Both have different repos.
    let profileurl = 'https://api.github.com/users/';
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); //this will make the correct url.
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`); //this will make the correct url.

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    console.log(reposData);
    return {
      profile : profileData,
      repos: reposData 
    }
  }
  
}