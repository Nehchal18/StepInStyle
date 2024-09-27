const loader = document.querySelector('.loader');

const currentUsername = localStorage.getItem("currentUser");

if (currentUsername) {
    window.location.href = 'index.html';
}

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const username = document.querySelector('#name');
const password = document.querySelector('#password');

submitBtn.addEventListener('click', () => {
    if (User.validateLogin(username.value, password.value)) {
        User.setCurrentUser(username.value);
        console.log(`Logged in as: ${username.value}`);
        window.location.href = "index.html";
    } else {
        showAlert("Invalid username or password.");
    }
});

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
