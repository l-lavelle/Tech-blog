const logoutBtn = document.getElementById('logout-btn')

const logout = async ()=>{
    const response = await fetch('/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log out.');
      }
}
logoutBtn.addEventListener("click",logout)