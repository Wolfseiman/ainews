const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('title-input');
const contentInput = document.getElementById('content-input');

// Function to save a post to the database
function savePost(title, content) {
  blogPosts.push({ title, content });
  // Additional code to save the post to the database can be added here
}

// Event listener for adding a post
addForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = titleInput.value;
  const content = contentInput.value;

  if (title && content) {
    savePost(title, content);
    clearForm();
    renderPostList(); // Added this line to render the updated post list
  }
});

// Clear the form inputs
function clearForm() {
  titleInput.value = '';
  contentInput.value = '';
}
