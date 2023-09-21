const postBtn = document.getElementById("add-comment");
const commentText = document.getElementById("comment-text");
postBtn.addEventListener("click", postComment);

async function postComment(event) {
  event.preventDefault();

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
      alert("Post did not submit");
    }
  }
}
