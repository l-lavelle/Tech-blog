//Get elements from page
const postBtn = document.getElementById("add-comment");
const commentText = document.getElementById("comment-text");
const error = document.getElementById("post-error");

// Create error message p
var errorMessage = document.createElement("p");
errorMessage.className = "error-comment";
error.appendChild(errorMessage);

// Create a comment with error checking
async function postComment(event) {
  event.preventDefault();
  errorMessage.textContent = "";

  const comment_text = commentText.value.trim();
  const blog_id = window.location.href.split("/")[4];

  if (comment_text) {
    const response = await fetch(`/blog/comment/${blog_id}`, {
      method: "POST",
      body: JSON.stringify({ comment_text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      errorMessage.textContent = "Post did not submit";
      errorMessage.style.color = "red";
    }
  } else {
    errorMessage.textContent = "Please enter comment text";
    errorMessage.style.color = "red";
  }
}

postBtn.addEventListener("click", postComment);
