const Posts_API = "https://jsonplaceholder.typicode.com/posts";

const statusText = document.getElementById("status");
const postsList = document.getElementById("postsList");

fetch(Posts_API)
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then(function(posts) {
    statusText.textContent = "";

    posts.forEach(function(post) {
      const li = document.createElement("li");

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = post.title;

      const body = document.createElement("div");
      body.textContent = post.body;

      li.appendChild(title);
      li.appendChild(body);

      postsList.appendChild(li);
    });
  })
  .catch(function(error) {
    statusText.textContent = "Failed to load data";
    console.log(error);
  });