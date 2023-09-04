const submitBtn = document.getElementById("submit-btn");

const LoginFormSubmission= async(event)=>{
    event.preventDefault();
    
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username){
        const response = await fetch('/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });

        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to log in.');
          }
    }
};

submitBtn.addEventListener("click", LoginFormSubmission);