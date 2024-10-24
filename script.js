function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const validEmail = "training@jalaacademy.com";
    const validPassword = "jobprogram";

    if (email === validEmail && password === validPassword) {
        
        window.location.href = "https://jalaacademy.com/"; 
    } else {
        alert("Email or password is incorrect.");
    }

}
