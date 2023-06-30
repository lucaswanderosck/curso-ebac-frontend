document.addEventListener("DOMContentLoaded", () => {

  const profileName = document.querySelector(".profile-name");
  const profileUsername = document.querySelector(".profile-username");
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileLink = document.querySelector(".profile-link");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");

  fetch("https://api.github.com/users/lucaswanderosck")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      profileName.innerText = json.name;
      profileUsername.innerText = `@${json.login}`;
      profileAvatar.src = json.avatar_url;
      profileLink.href = json.html_url;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
    });
});
