class Github {
  constructor(){
    this.client_id = 'add your client id here ';
    this.client_sceret = 'add your client sceret here';
    this.repos_count = 10;
    this.repos_sort = 'created : asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_sceret}`);


    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?&per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_sceret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}