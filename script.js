document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            renderProductCards(data.categories);
        })
        .catch(error => console.error('Error fetching product data:', error));
});

function renderProductCards(categories) {
    categories.forEach(category => {
        const tabContent = document.getElementById(category.category_name);
        category.category_products.forEach(product => {
            const productCard = createProductCard(product);
            tabContent.appendChild(productCard);
        });
    });
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.className = 'product-image';
    productImage.src = product.image;
    productCard.appendChild(productImage);

    if (product.badge_text) {
        const productBadge = document.createElement('div');
        productBadge.className = 'product-badge';
        productBadge.innerText = product.badge_text;
        productImage.insertAdjacentElement('beforebegin', productBadge);
    }

    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';
    productCard.appendChild(productDetails);


    const titleAndVendor = document.createElement('div');
    titleAndVendor.className = 'product-title-and-vendor';
    productDetails.appendChild(titleAndVendor);

    const productTitle = document.createElement('h3');
    productTitle.innerText = product.title;
    titleAndVendor.appendChild(productTitle);

    const vendorName = document.createElement('p');
    vendorName.className = 'vendor-name';
    vendorName.innerText = product.vendor;
    titleAndVendor.appendChild(vendorName);

    const productPrices = document.createElement('div');
    productPrices.className = 'product-prices';
    productDetails.appendChild(productPrices);

    const discountedPrice = document.createElement('p');
    discountedPrice.className = 'discount-price';
    discountedPrice.innerText = `Rs.${product.price}.00`;
    productPrices.appendChild(discountedPrice);

    const originalPrice = document.createElement('p');
    originalPrice.className = 'original-price';
    originalPrice.innerHTML = `<del>Rs.${product.compare_at_price}.00</del>`;
    productPrices.appendChild(originalPrice);

    const discount = document.createElement('p');
    discount.className = 'discount';
    discount.innerText = calculateDiscount(product.price, product.compare_at_price) + '% off';
    productPrices.appendChild(discount);


    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart-btn';
    addToCartBtn.innerText = 'Add to Cart';
    productDetails.appendChild(addToCartBtn);


    return productCard;
}


function calculateDiscount(price, comparePrice) {
    const discount = ((comparePrice - price) / comparePrice) * 100;
    return discount.toFixed(2);
}

function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');

    if (window.innerWidth < 768) {
        tabs.forEach(tab => {
            if (tab.id === tabName) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        tabs.forEach(tab => {
            if (tab.id === tabName) {
                tab.style.display = 'grid';
            } else {
                tab.style.display = 'none';
            }
        });
    } else {
        tabs.forEach(tab => {
            if (tab.id === tabName) {
                tab.style.display = 'grid';
            } else {
                tab.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    changeTab('Men'); 

    window.addEventListener('resize', function () {
        changeTab('Men'); 
    });
});
