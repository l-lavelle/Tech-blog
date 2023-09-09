const submitBtn = document.getElementById("submit-btn");
var errorMessage = document.createElement("p");
errorMessage.className = "error-SignUp";
document.body.appendChild(errorMessage);
errorMessage.after(submitBtn);

const signupFormSubmission = async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const passwordConfirm = document
    .querySelector("#password-confirm")
    .value.trim();
  if (passwordConfirm === password) {
    if (name && username && password) {
      const response = await fetch("/users/signup", {
        method: "POST",
        body: JSON.stringify({ name, username, password }),
        headers: { "Content-Type": "application/json" },
      });

      const trial = await response.json();

      if (response.ok) {
        document.location.replace("/");
      } else if (trial.name === "SequelizeUniqueConstraintError") {
        errorMessage.textContent = "Username already exists";
        errorMessage.style.color = "red";
      } else {
        alert("Failed to sign up.");
      }
    }
  } else {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.style.color = "red";
  }
};

submitBtn.addEventListener("click", signupFormSubmission);
