// const addLinks = document.querySelectorAll(".add-comment");
// addLinks.forEach((comment) => comment.addEventListener("click", addCommentBox));

// async function addCommentBox(event) {
//   this.style.display = "none";
//   event.preventDefault();
//   const div = document.createElement("div");
//   div.className = "field";
//   const p = document.createElement("p");
//   p.className = "control";
//   const textarea = document.createElement("textarea");
//   textarea.className = "textarea";
//   textarea.placeholder = "Add a comment";
//   const button = document.createElement("button");
//   button.className = "post-comment";
//   button.addEventListener("click", postComment);
//   button.innerHTML = "Post Comment";
//   p.appendChild(textarea);
//   p.appendChild(button);
//   div.appendChild(p);
//   console.log(this);
//   this.parentNode.parentNode.prepend(div);
// }

// async function postComment() {
//   console.log(3);
//   this.parentNode.style.display = "none";

//   const div = document.createElement("div");
//   div.className = "field";

//   const p = document.createElement("p");
//   p.className = "control";

//   const a = document.createElement("a");
//   a.className = "add-comment";
//   a.innerHTML = "Comment";
//   a.addEventListener("click", addCommentBox);

//   p.appendChild(a);
//   div.appendChild(p);
//   this.parentNode.parentNode.prepend(div);
// }

// Change window location when click on blog post
async function addHref(id) {
  document.location.replace(`/blog/${id}`);
}
