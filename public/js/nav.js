const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <span class ="welcome nope"id="welcome-user">Hi , User</span>
                <button class="n-button logout nope" id="logout-button">Logout</button>
                <button class="n-button login nope">login</button>
                <button class="n-button signup nope">signup</button>
                <a class="cart nope"><img src="img/cart.png" alt=""></a>
            </div>
            <div class="hamburger" id="hamburger">
                <i class="fa fa-bars"></i>
            </div>
        </div>
        
        <ul class="links-container">
            <li class="link-item"><a href="/" class="link">home</a></li>
            <li class="link-item"><a href="search.html" class="link">women</a></li>
            <li class="link-item"><a href="search.html" class="link">men</a></li>
            <li class="link-item"><a href="search.html" class="link">kids</a></li>
            <li class="link-item"><a href="search.html" class="link">accessories</a></li>
        </ul>
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-links">
                <span class ="welcome-mov nope"id="welcome-user">Hi , User</span>
                <button class="n-button logout-mov nope" id="logout-button">Logout</button>
                <button class="n-button login-mov nope">login</button>
                <button class="n-button signup-mov nope">signup</button>
                <a class="cart-mov nope">Cart</a>

                <li class="link-item"><a href="/" class="link">home</a></li>
                <li class="link-item"><a href="search.html" class="link">women</a></li>
                <li class="link-item"><a href="search.html" class="link">men</a></li>
                <li class="link-item"><a href="search.html" class="link">kids</a></li>
                <li class="link-item"><a href="search.html" class="link">accessories</a></li>
            </ul>
        </div>
    `;
}

createNav();
if(localStorage.getItem("currentUser")){
    document.querySelector('.welcome').classList.remove('nope');
    document.querySelector('.logout').classList.remove('nope');
    document.querySelector('.cart').classList.remove('nope');
    document.querySelector('.login').classList.add('nope');
    document.querySelector('.signup').classList.add('nope');

    document.querySelector('.welcome-mov').classList.remove('nope');
    document.querySelector('.logout-mov').classList.remove('nope');
    document.querySelector('.cart-mov').classList.remove('nope');
    document.querySelector('.login-mov').classList.add('nope');
    document.querySelector('.signup-mov').classList.add('nope');

    document.querySelector('.welcome').innerHTML = `Hi, ${localStorage.getItem("currentUser")}`;
    document.querySelector('.welcome-mov').innerHTML = `Hi, ${localStorage.getItem("currentUser")}`;
    document.querySelector('.logout').addEventListener('click',()=>{
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    })
    document.querySelector('.logout-mov').addEventListener('click',()=>{
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    })
}else{
    document.querySelector('.welcome').classList.add('nope');
    document.querySelector('.logout').classList.add('nope');
    document.querySelector('.login').classList.remove('nope');
    document.querySelector('.signup').classList.remove('nope');

    document.querySelector('.welcome-mov').classList.add('nope');
    document.querySelector('.logout-mov').classList.add('nope');
    document.querySelector('.login-mov').classList.remove('nope');
    document.querySelector('.signup-mov').classList.remove('nope');
}

document.querySelector('.login').addEventListener('click',()=>{
    window.location.href = "login.html";
})

document.querySelector('.signup').addEventListener('click',()=>{
    window.location.href = "signup.html";
})

document.querySelector('.cart').addEventListener('click',()=>{
    window.location.href = "cart.html";
})

document.querySelector('.login-mov').addEventListener('click',()=>{
    window.location.href = "login.html";
})

document.querySelector('.signup-mov').addEventListener('click',()=>{
    window.location.href = "signup.html";
})

document.querySelector('.cart-mov').addEventListener('click',()=>{
    window.location.href = "cart.html";
})

const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('nope');
}
document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);

window.addEventListener('click', (event) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');

    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.classList.add('nope');
    }
});

window.addEventListener('resize', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth > 800) {
        mobileMenu.classList.add('nope');
    }
});