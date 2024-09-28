// Function to dynamically render products
function renderProducts() {
    // Get the product container
    const productContainers = document.querySelectorAll('.product-container');
    productContainers.forEach((container) => {
        container.innerHTML = ''; // Clear any existing content
        for (let id in products) {
            const product = products[id];
            
            // Create the product card HTML
            const productCard = `
                <div class="product-card" data-id="${id}">
                    <div class="product-image">
                        <span class="discount-tag">50% off</span>
                        <img src="${product.img[0]}" class="product-thumb" alt="${product.name}">
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div class="product-info">
                        <h2 class="product-brand">${product.name}</h2>
                        <p class="product-short-des">A short description about the product..</p>
                        <span class="price">$${product.price}</span>
                        <span class="actual-price">$${product.price*2}</span>
                    </div>
                </div>
            `;

            // Insert the product card into the container
            container.innerHTML += productCard;
        }
        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.getAttribute('data-id');
                // Set the current product ID in localStorage
                localStorage.setItem('current_product', productId);
                console.log(`Current product set to: ${productId}`);
                window.location.href = 'product.html';
            });
        });
    });
}

renderProducts();


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Call the function to render products

