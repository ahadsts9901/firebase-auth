// show Password
function showPassword(event) {
    event.target.className = "bi bi-eye";
    event.target.previousElementSibling.type = "text";
    event.target.removeEventListener('click', showPassword);
    event.target.addEventListener('click', hidePassword);
}

// hide password
function hidePassword(event) {
    event.target.className = "bi bi-eye-slash";
    event.target.previousElementSibling.type = "password";
    event.target.removeEventListener('click', hidePassword);
    event.target.addEventListener('click', showPassword);
}


function signup(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email-signup").value;
    let password = document.getElementById("password-signup").value;
    let confirmPassword = document.getElementById("password-signup-repeat").value;
    let message = document.querySelector(".validationMessage");

    if (!email.endsWith("@gmail.com")) {
        message.innerText = `Invalid email address`;
        message.style.display = "block";
        message.style.color = "#e55865";
        return;
    }

    if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        confirmPassword.trim() === ''
        // || firstName.length > 8 ||
        // lastName.length > 8 ||
        // password.length > 8 ||
        // confirmPassword.length > 8 ||
        // firstName.length < 4 || lastName.length < 4 ||
        // password.length < 4 || confirmPassword.length < 4
    ) {
        message.innerText = `Please fill required fields`;
        message.style.display = "block";
        message.style.color = "#e55865";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = `Password doesn't match`;
        message.style.display = "block";
        message.style.color = "#e55865";
        return;
    }

    // firebase
    
    // Reset the input fields after successful signup
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email-signup").value = "";
    document.getElementById("password-signup").value = "";
    document.getElementById("password-signup-repeat").value = "";
}