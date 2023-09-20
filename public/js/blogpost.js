const addLinks = document.querySelectorAll(".add-comment");
addLinks.forEach((comment) => comment.addEventListener("click", addComment));

async function addComment(event) {
  this.style.display = "none";
  event.preventDefault();

  const div = document.createElement("div");
  div.className = "field";

  const p = document.createElement("p");
  p.className = "control";

  const textarea = document.createElement("textarea");
  textarea.className = "textarea";
  textarea.placeholder = "Add a comment";

  const button = document.createElement("button");
  button.id = "post-comment";
  button.innerHTML = "Post Comment";

  p.appendChild(textarea);
  p.appendChild(button);
  div.appendChild(p);
  console.log(this);
  this.parentNode.parentNode.prepend(div);
}

// if (commentBtn) {
//   commentBtn.addEventListener("click", addComment);
// }
