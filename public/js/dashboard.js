const submitBtn = document.getElementById("submit-btn");

const addPost = async (event) => {
  event.preventDefault();
  const blog_title = document.querySelector("#blog_title").value.trim();
  const blog_text = document.querySelector("#blog_post").value.trim();

  if (blog_title && blog_text) {
    const response = await fetch("/api/blogs/addpost", {
      method: "POST",
      body: JSON.stringify({ blog_title, blog_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Post did not submit");
    }
  }
};

if (submitBtn) {
  submitBtn.addEventListener("click", addPost);
}

const blogTitle = document.querySelectorAll(".blogTitle");
const postOptions = async (event) => {
  console.log(event);
};
if (blogTitle) {
  blogTitle.addEventListener("click", postOptions);
}
console.log(3);
