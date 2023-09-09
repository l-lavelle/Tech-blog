const updateBtn = document.getElementById("update-btn");

const updatePost = async (event) => {
  event.preventDefault();
  const blog_title = document.querySelector("#blog_title").value.trim();
  const blog_text = document.querySelector("#blog_post").value.trim();

  const id = window.location.href.split("/")[5];

  if (blog_title && blog_text) {
    const response = await fetch(`/api/blogs/${id}/options`, {
      method: "PUT",
      body: JSON.stringify({ blog_title, blog_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Post did not update");
    }
  }
};

if (updateBtn) {
  updateBtn.addEventListener("click", updatePost);
}

const delteBtn = document.getElementById("delete-btn");

const deletePost = async (event) => {
  event.preventDefault();

  const id = window.location.href.split("/")[5];

  if (id) {
    const response = await fetch(`/api/blogs/${id}/options`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Post did not delete");
    }
  }
};

if (delteBtn) {
  delteBtn.addEventListener("click", deletePost);
}
