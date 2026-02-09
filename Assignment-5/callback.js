// Task 1: Understanding Callbacks

function getUser(id, callback) {
  setTimeout(() => {
    const user = { id: id, name: "Ram" };
    callback(user);
  }, 2000);
}

function runTask1() {
  console.clear();
  console.log("Task 1: Callback");

  getUser(1, (user) => {
    console.log("User name:", user.name);
  });
}