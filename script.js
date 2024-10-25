const form = document.querySelector('#form')
let userName = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2");
let unameError = document.querySelector(".username-error-msg");
let emailError = document.querySelector(".email-error-msg");
let passwordError = document.querySelector(".password-error-msg");
let password2Error = document.querySelector(".password2-error-msg")

form.addEventListener('submit', (e) => {
    e.preventDefault() 

    // Username checking
    if (userName.value === "") {
        unameError.innerHTML = "Username Cannot be Empty"
        showError(userName)
    } else {
        unameError.innerHTML = ""
        showSuccess(userName)
    }

    // Email Checking
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email.value === "") {
        emailError.innerHTML = "invalid Email"
        showError(email)
        
    } else if (!email.value.match(emailPattern)) {
        emailError.innerHTML = "Invalid Email"
        showError(email)

    } else {
        emailError.innerHTML = "" 
        showSuccess(email)
    }

    // Password Checking
    if (password.value === "") {
        passwordError.innerHTML = "Password Cannot be Empty"
        showError(password)

    } else if (password.value.length < 6) { 
        passwordError.innerHTML = "Minimum six characters required"
        showError(password)

    } else {
        passwordError.innerHTML = ""
        showSuccess(password)
    }

    // Password2 Checking
    if (password2.value === "") {
        password2Error.innerHTML = "Password Cannot be Empty" 
        showError(password2)

    } else if (password2.value !== password.value) {
        password2Error.innerHTML = "Passwords do not match" 
        showError(password2)

    } else {
        password2Error.innerHTML = ""
        showSuccess(password2)
    }
})

// Function to show error (add 'error' class and remove 'success')
function showError(input) {
    input.parentElement.classList.add("error")
    input.parentElement.classList.remove("success")
}

// Function to show success (add 'success' class and remove 'error')
function showSuccess(input) {
    input.parentElement.classList.add("success")
    input.parentElement.classList.remove("error")
}
