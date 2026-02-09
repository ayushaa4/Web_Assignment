// Task 2: Callback Hell

function getUser2(id, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: id, name: "Ram" });
  }, 2000);
}

function getPosts2(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 2000);
}

function getComments2(post, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 2000);
}

function runTask2() {
  console.clear();
  console.log("Task 2: Callback Hell");

  getUser2(1, (user) => {
    getPosts2(user.id, (posts) => {
      getComments2(posts[0], (comments) => {
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
      });
    });
  });
}