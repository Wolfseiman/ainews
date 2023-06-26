const blogPosts = [
  {
    title: "Blog Post Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget justo ac neque ultricies auctor vitae sit amet nulla. Quisque tristique mauris sit amet dui dapibus, vel blandit lectus efficitur."
  },
  {
    title: "Blog Post Title 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget justo ac neque ultricies auctor vitae sit amet nulla. Quisque tristique mauris sit amet dui dapibus, vel blandit lectus efficitur."
  },
  {
    title: "Blog Post Title 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget justo ac neque ultricies auctor vitae sit amet nulla. Quisque tristique mauris sit amet dui dapibus, vel blandit lectus efficitur."
  }
];

const blogList = document.getElementById('blog-list');

// Generate blog posts dynamically
blogPosts.forEach((post) => {
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const content = document.createElement('p');

  title.textContent = post.title;
  content.textContent = post.content;

  article.appendChild(title);
  article.appendChild(content);

  blogList.appendChild(article);
});

// script.js
const postList = document.getElementById('post-list');

// Function to retrieve posts from the database
function getPosts() {
  // Additional code to retrieve posts from the database can be added here
  // For now, we'll use the `blogPosts` array from the posts.js file
  return blogPosts;
}

// Render the blog post list
function renderPostList() {
  const posts = getPosts();

  postList.innerHTML = '';

  posts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${post.title}</strong><br>${post.content}`;
    postList.appendChild(listItem);
  });
}

// Initial rendering of the post list
renderPostList();
