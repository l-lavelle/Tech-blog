const submitBtn = document.getElementById("submit-btn");

var errorMessage = document.createElement("p");
errorMessage.className = "error-login";
document.body.appendChild(errorMessage);
errorMessage.after(submitBtn);

const LoginFormSubmission = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      errorMessage.textContent = "Incorrect Login or Password";
      errorMessage.style.color = "red";
    }
  }
};

submitBtn.addEventListener("click", LoginFormSubmission);
