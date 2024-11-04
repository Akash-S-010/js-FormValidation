const form = document.querySelector('#form')
let userName = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2");


form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Username checking
    if (userName.value === "") {
        showError(userName, "Username Cannot be Empty")

    } else if (userName.value.length < 4 || userName.value.length > 12) {
        showError(userName, "Username must be 4 - 12 characters.")

    } else {
        showSuccess(userName)
    }

    // Email Checking
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email.value == "") {
        showError(email, "Email Cannot be Empty")

    } else if (!email.value.match(emailPattern)) {
        showError(email, "Invalid Email")

    } else {
        showSuccess(email)
    }

    // Password Checking
    if (password.value === "") {
        showError(password, "Password Cannot be Empty")

    } else if (password.value.length < 6) {
        showError(password, "Minimum six characters required")

    } else {
        showSuccess(password)
    }

    // Password2 Checking
    if (password2.value === "") {
        showError(password2, "Password Cannot be Empty")

    } else if (password2.value !== password.value) {
        showError(password2, "Passwords do not match")

    } else {
        showSuccess(password2)
    }
})

// Function to show error 
function showError(input, errorMsg) {
    input.parentElement.classList.add("error")
    input.parentElement.classList.remove("success")
    input.parentElement.querySelector('.error-para').innerHTML = errorMsg;

}

// Function to show success 
function showSuccess(input) {
    input.parentElement.classList.add("success")
    input.parentElement.classList.remove("error")
    input.parentElement.querySelector('.error-para').innerHTML = ""
}
