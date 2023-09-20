const blogTitles = document.querySelectorAll(".blogTitle");
blogTitles.forEach((title) => title.addEventListener("click", blogOptions));
//trail for modal pop up

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
