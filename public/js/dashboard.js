//Get elements
const blogTitles = document.querySelectorAll(".blogTitle");
blogTitles.forEach((title) => title.addEventListener("click", optionsModal));
const modal = document.getElementById("dash-modal");
const modalTitle = document.querySelector(".title-modal");
const modalBody = document.querySelector("#post-body");

//Modal pop-up with options
async function optionsModal() {
  modal.classList.add("is-active");

  let parent = this.parentNode;
  let textP = parent.querySelector(".dash-blogText");
  let blogId = parent.querySelector(".blogTitle").id;
  let titleP = parent.querySelector(".blogTitle");
  const title = titleP.innerHTML;
  let blogText = textP.innerHTML;

  modalTitle.id = blogId;
  modalTitle.innerHTML = title;
  modalBody.value = blogText;
}

//On cancel remove modal
async function cancelModal() {
  modal.classList.remove("is-active");
}

//Update blog post
async function saveChanges() {
  console.log(3);
  const blog_title = modalTitle.value.trim();
  const blog_text = modalBody.value.trim();
  const id = modalTitle.id;
  if (blog_title === "") {
    modalTitle.placeholder = "Please enter a blog title";
  } else if (blog_text === "") {
    modalBody.placeholder = "Please enter a blog text";
  }
  if (blog_title && blog_text) {
    const response = await fetch(`/api/blogs/${id}/options`, {
      method: "PUT",
      body: JSON.stringify({ blog_title, blog_text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Post did not update");
    }
  }
}

//Delete blog post
async function deletePost() {
  const id = modalTitle.id;
  if (id) {
    const response = await fetch(`/api/blogs/${id}/options`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Post did not delete");
    }
  }
}

//take out alerts
