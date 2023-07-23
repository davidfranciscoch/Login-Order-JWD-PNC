const cartItems = [];

function addToCart(menuName, menuPrice) {
    const menuItem = { name: menuName, price: menuPrice };
    cartItems.push(menuItem);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    cartItemsDiv.innerHTML = '';

    let totalPrice = 0;
    cartItems.forEach((item) => {
        cartItemsDiv.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
        totalPrice += item.price;
    });

    totalPriceSpan.textContent = `Rp ${totalPrice}`;
}

function resetCart() {
    cartItems.length = 0;
    updateCart();
}
