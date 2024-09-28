const loader = document.querySelector('.loader');

const currentUsername = localStorage.getItem("currentUser");

if (currentUsername) {
    window.location.href = 'index.html';
}

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');


submitBtn.addEventListener('click', () => {
    if(username.value.length < 3){
        showAlert('name must be 3 letters long');
    } else if(!validateEmail(email.value)){
        showAlert('enter your email');
    } else if(password.value.length < 8){
        showAlert('password should be 8 letters long');
    } else if(!number.value.length){
        showAlert('enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('invalid number, please enter valid one');
    } else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        // submit form
        loader.style.display = 'block';
        // console.log(username.value, password.value, email.value, number.value);

        const newUser = new User(username.value, password.value, email.value, number.value);
        // Hide loader after saving
        if (User.saveUser(newUser)) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
            User.setCurrentUser(username.value);
            console.log(`Logged in as: ${username.value}`);
            window.location.href = "index.html";
        } else {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
            showAlert("User already exists. Please choose a different username or Signin.");
        }
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

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}