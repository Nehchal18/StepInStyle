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
                <button href="login.html" class=" n-button login nope">login</button>
                <button href="signup.html" class=" n-button signup nope">signup</button>
                <a class="cart nope" href="cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/" class="link">home</a></li>
            <li class="link-item"><a href="search.html" class="link">women</a></li>
            <li class="link-item"><a href="search.html" class="link">men</a></li>
            <li class="link-item"><a href="search.html" class="link">kids</a></li>
            <li class="link-item"><a href="search.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();
if(localStorage.getItem("currentUser")){
    document.querySelector('.welcome').classList.remove('nope');
    document.querySelector('.logout').classList.remove('nope');
    document.querySelector('.cart').classList.remove('nope');
    document.querySelector('.login').classList.add('nope');
    document.querySelector('.signup').classList.add('nope');
    document.querySelector('.welcome').innerHTML = `Hi, ${localStorage.getItem("currentUser")}`;
    document.querySelector('.logout').addEventListener('click',()=>{
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    })
}else{
    document.querySelector('.welcome').classList.add('nope');
    document.querySelector('.logout').classList.add('nope');
    document.querySelector('.login').classList.remove('nope');
    document.querySelector('.signup').classList.remove('nope');
}
