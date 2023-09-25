const submitBtn = document.getElementById("submit-btn");
const userField = document.querySelector("#username-login");
const passwordField = document.querySelector("#password-login");

var errorMessage = document.createElement("p");
errorMessage.className = "error-login";
document.body.appendChild(errorMessage);
errorMessage.after(submitBtn);

const LoginFormSubmission = async (event) => {
  event.preventDefault();

  errorMessage.textContent = "";
  userField.className = "input";
  passwordField.className = "input";
  const username = userField.value.trim();
  const password = passwordField.value.trim();

  if (username && password) {
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      errorMessage.textContent = "Incorrect Login or Password";
      errorMessage.style.color = "red";
      userField.className = "input is-danger";
      passwordField.className = "input is-danger";
    }
  }
};

submitBtn.addEventListener("click", LoginFormSubmission);
