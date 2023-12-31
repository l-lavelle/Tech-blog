const submitBtn = document.getElementById("submit-btn");

// Create error p
var addError = document.createElement("p");
addError.className = "error-message";
document.body.appendChild(addError);
addError.after(submitBtn);

// Create a post with error checking
const addPost = async (event) => {
  event.preventDefault();
  addError.textContent = "";

  const blog_title = document.querySelector("#blog_title").value.trim();
  const blog_text = document.querySelector("#blog_post").value.trim();
  const id = window.location.href.split("/")[5];

  if (blog_title === "" || blog_text === "") {
    addError.textContent = "Please enter a blog title and text";
    addError.style.color = "red";
  }
  if (blog_title && blog_text) {
    const response = await fetch("/api/blogs/addpost", {
      method: "POST",
      body: JSON.stringify({ blog_title, blog_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/api/blogs/${id}`);
    } else {
      addError.textContent = "Post did not submit";
      addError.style.color = "red";
    }
  }
};

if (submitBtn) {
  submitBtn.addEventListener("click", addPost);
}
