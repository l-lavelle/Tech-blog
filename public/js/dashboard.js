const blogTitles = document.querySelectorAll(".blogTitle");
blogTitles.forEach((title) => title.addEventListener("click", optionsModal));
const modal = document.getElementById("dash-modal");
//trail for modal pop up
async function optionsModal() {
  modal.classList.add("is-active");

  let parent = this.parentNode;
  let textP = parent.querySelector(".blogText");
  let titleP = parent.querySelector(".blogTitle");
  const title = titleP.innerHTML;
  let blogText = textP.innerHTML;

  const modalBody = document.querySelector("#post-body");
  modalBody.value = blogText;

  const modalTitle = document.querySelector(".modal-card-title");
  modalTitle.innerHTML = title;
}

async function cancelModal() {
  console.log(3);
  modal.classList.remove("is-active");
}
//will change to text area
// async function blogOptions() {
//   let parent = this.parentNode;
//   let textP = parent.querySelector(".blogText");
//   let blogText = textP.innerHTML;

//   const textarea = document.createElement("textarea");
//   textarea.innerHTML = blogText;

//   textP.replaceWith(textarea);
//   console.log(blogText);
// }
//Need the update and delete button to show up
