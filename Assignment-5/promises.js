// Task 3: Convert to Promises (.then .catch)

function getUserP() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Ram" });
    }, 2000);
  });
}

function getPostsP(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      if (!userId) reject("User id not found");
      else resolve(["post1", "post2"]);
    }, 2000);
  });
}

function getCommentsP(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Comments fetched");
      if (!post) reject("Post not found");
      else resolve(["nice", "good"]);
    }, 2000);
  });
}

function runTask3() {
  console.clear();
  console.log("Task 3: Promises");

  let savedUser;
  let savedPosts;

  getUserP()
    .then((user) => {
      savedUser = user;
      return getPostsP(user.id);
    })
    .then((posts) => {
      savedPosts = posts;
      return getCommentsP(posts[0]);
    })
    .then((comments) => {
      // Output format similar to Task 2
      console.log("User:", savedUser);
      console.log("Posts:", savedPosts);
      console.log("Comments:", comments);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}
