const currentUsername = localStorage.getItem("currentUser");

if (!currentUsername) {
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const currentUser = User.getCurrentUser();

    if (!currentUser || currentUser.cart.length === 0) {
        document.querySelector('.cart-container').innerHTML = '<p>Your cart is empty.</p>';
        document.querySelector('.total-price').textContent = '$0';
        return;
    }

    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = ''; // Clear any existing items

    let totalPrice = 0;

    currentUser.cart.forEach(item => {
        const product = products[item.productId]; // Assuming `products` is an object with all product data
        const productTotal = product.price * item.quantity;
        totalPrice += productTotal;

        const cartItem = `
            <div class="cart-item">
                <img src="${product.img[0]}" alt="${product.name}">
                <div class="cart-item-info">
                    <p class="cart-item-name">${product.name}</p>
                    <p class="cart-item-price">Price: $${productTotal.toFixed(2)}</p>
                </div>
                <p class="cart-item-quantity">
                        <div class="quantity-controls">
                            <button class="quantity-btn decrement" data-id="${item.productId}">-</button>
                            ${item.quantity}
                            <button class="quantity-btn increment" data-id="${item.productId}">+</button>
                        </div>
                    </p>
                <button class="remove-btn" data-id="${item.productId}">Remove</button>
            </div>
        `;

        cartContainer.innerHTML += cartItem;
    });

    // Update the total price
    document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)}`;

    // Add event listeners for increment, decrement, and remove buttons
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            updateCartQuantity(productId, 1);
        });
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            updateCartQuantity(productId, -1);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            removeFromCart(productId);
        });
    });
}

function updateCartQuantity(productId, change) {
    const currentUser = User.getCurrentUser();
    if (!currentUser) return;

    const productInCart = currentUser.cart.find(item => item.productId === productId);

    if (productInCart) {
        productInCart.quantity += change;

        // If the quantity becomes 0, remove the product from the cart
        if (productInCart.quantity <= 0) {
            currentUser.cart = currentUser.cart.filter(item => item.productId !== productId);
        }

        // Update the user in localStorage
        const users = JSON.parse(localStorage.getItem('Users')) || {};
        users[currentUser.username] = currentUser;
        localStorage.setItem('Users', JSON.stringify(users));

        // Re-render the cart
        renderCart();
    }
}

function removeFromCart(productId) {
    const currentUser = User.getCurrentUser();
    if (!currentUser) return;

    // Remove the product from the cart
    currentUser.cart = currentUser.cart.filter(item => item.productId !== productId);

    // Update the user in localStorage
    const users = JSON.parse(localStorage.getItem('Users')) || {};
    users[currentUser.username] = currentUser;
    localStorage.setItem('Users', JSON.stringify(users));

    // Re-render the cart
    renderCart();
}
