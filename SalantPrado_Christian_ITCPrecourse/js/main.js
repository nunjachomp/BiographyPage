//replace with your user:
const GITHUB_URL = "https://api.github.com/users/nunjachomp";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("https://avatars.githubusercontent.com/u/132450942?v=4");
    const profileName = document.getElementById("nunjachomp");
    // update the profileImage and profileName with the information retrieved.
    
  });

  console.log(GITHUB_URL);