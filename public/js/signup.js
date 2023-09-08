const submitBtn = document.getElementById("submit-btn");

const signupFormSubmission = async (event) => {
  event.preventDefault();

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
        var uniqueError = document.createElement("p");
        uniqueError.textContent = "Username already exists";
        uniqueError.style.color = "red";
        document.body.appendChild(uniqueError);
        uniqueError.after(submitBtn);
      } else {
        alert("Failed to sign up.");
      }
    }
  } else {
    // need to append after submit button
    var passwordCorrect = document.createElement("p");
    passwordCorrect.textContent = "Passwords do not match!";
    passwordCorrect.style.color = "red";
    document.body.appendChild(passwordCorrect);
    passwordCorrect.after(submitBtn);
  }
};

submitBtn.addEventListener("click", signupFormSubmission);
