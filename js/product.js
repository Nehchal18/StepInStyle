document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
});

function loadProductDetails() {
    const currentProductId = localStorage.getItem('current_product');
    
    if (currentProductId && products[currentProductId]) {
        const product = products[currentProductId];
        
        document.querySelector('.product-brand').textContent = product.name;
        document.querySelector('.product-short-des').textContent = product.desc;
        document.querySelector('.product-price').textContent = `$${product.price}`;
        document.querySelector('.product-actual-price').textContent = `$${product.price * 2}`; 
        document.querySelector('.image-slider').style.backgroundImage = `url(${product.img[0]})`;

        const productImagesContainer = document.querySelector('.product-images');
        productImagesContainer.innerHTML = ''; 

        product.img.forEach((imageSrc, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `${product.name} image ${index + 1}`;
            if (index === 0) imgElement.classList.add('active'); 
            productImagesContainer.appendChild(imgElement);
        });

        addImageClickEvents();
    } else {
        console.error("Product not found or missing in localStorage.");
    }
}


function addImageClickEvents() {
    const productImages = document.querySelectorAll(".product-images img"); 
    const productImageSlide = document.querySelector(".image-slider"); 

    let activeImageSlide = 0; 

    productImages.forEach((item, i) => { 
        item.addEventListener('click', () => { 
            productImages[activeImageSlide].classList.remove('active'); 
            item.classList.add('active'); 
            productImageSlide.style.backgroundImage = `url('${item.src}')`; 
            activeImageSlide = i; 
        });
    });
}


const sizeBtns = document.querySelectorAll('.size-radio-btn'); 
let checkedBtn = 0; 

sizeBtns.forEach((item, i) => { 
    item.addEventListener('click', () => { 
        sizeBtns[checkedBtn].classList.remove('check'); 
        item.classList.add('check'); 
        checkedBtn = i; 
    });
});

window.onload = loadProductDetails;
document.querySelector('.cart-btn').addEventListener('click', function() {
    const productId = localStorage.getItem('current_product');
    addToCart(productId);
});

function addToCart(productId) {
    
    const currentUsername = localStorage.getItem('currentUser');
    if (!currentUsername) {
        alert('Please log in to add products to your cart.');
        window.location.href = 'login.html';
    }
    const users = JSON.parse(localStorage.getItem("Users")) ;

    const currentUser = users[currentUsername];
    
    let productInCart = currentUser.cart.find(item => item.productId === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        currentUser.cart.push({ productId: productId, quantity: 1 });
    }

    users[currentUsername] = currentUser;

    localStorage.setItem('Users', JSON.stringify(users));

    alert('Product added to cart successfully!');
}
