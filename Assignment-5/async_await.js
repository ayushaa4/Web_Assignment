// Task 4: Async / Await Version

function getUserA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Ram" });
    }, 2000);
  });
}

function getPostsA(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      if (!userId) reject("User id not found");
      else resolve(["post1", "post2"]);
    }, 2000);
  });
}

function getCommentsA(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Comments fetched");
      if (!post) reject("Post not found");
      else resolve(["nice", "good"]);
    }, 2000);
  });
}

async function runTask4() {
  console.clear();
  console.log("Task 4: Async / Await");

  try {
    const user = await getUserA();
    const posts = await getPostsA(user.id);
    const comments = await getCommentsA(posts[0]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (err) {
    console.log("Error:", err);
  }
}
