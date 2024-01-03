const posts = [];
let lastUserActivityTime = null;


function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}


function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastUserActivityTime = new Date().toISOString();
      resolve(lastUserActivityTime);
    }, 1000);
  });
}


function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}


function logPostsAndLastActivityTime() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastUserActivityTime);
}


Promise.all([createPost({ title: "Post 1" }), updateLastUserActivityTime()])
  .then(() => {
    logPostsAndLastActivityTime();
  })
  .then((deletedPost) => {
    logPostsAndLastActivityTime();
  })
  .catch((error) => {
    console.error(error);
  });