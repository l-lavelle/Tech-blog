//Get elements from page
const submitBtn = document.getElementById("submit-btn");
const nameField = document.querySelector("#name-signup");
const usernameField = document.querySelector("#username-signup");
const passwordField = document.querySelector("#password-signup");
const confirmField = document.querySelector("#password-confirm");

// Create error message div
var errorMessage = document.createElement("p");
errorMessage.className = "error-signup";
document.body.appendChild(errorMessage);
errorMessage.after(submitBtn);

//Create new user with error checks
const signupFormSubmission = async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  passwordField.className = "input";
  confirmField.className = "input";
  usernameField.className = "input";

  const name = nameField.value.trim();
  const username = usernameField.value.trim();
  const password = passwordField.value.trim();
  const passwordConfirm = confirmField.value.trim();

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
        usernameField.classList = "input is-danger";
      } else {
        errorMessage.textContent = "Failed to sign up";
        errorMessage.style.color = "red";
      }
    }
  } else {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.style.color = "red";
    passwordField.className = "input is-danger";
    confirmField.className = "input is-danger";
  }
};

submitBtn.addEventListener("click", signupFormSubmission);

//Ideas for extra: toggle button to show password
//https://www.w3schools.com/howto/howto_js_toggle_password.asp
