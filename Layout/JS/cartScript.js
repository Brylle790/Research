const cartContent = document.getElementById('cart-content');
const cartItems = document.getElementsByClassName('cart-item'); 


document.getElementById("cart-icon").addEventListener("click", function () {
    const cartSection = document.getElementById("cart-section");
    
    if(cartSection.classList.contains('open')) {
        cartSection.classList.remove('open');
    } else {
        cartSection.classList.add('open');
    }
    
});
document.getElementById("close-cart").addEventListener("click", function () {
    document.getElementById("cart-section").classList.remove('open');
});

function clearAll() {

    if (cartContent) {
        while (cartContent.firstChild) {
            cartContent.removeChild(cartContent.firstChild);
        }
    } else {
        console.warn('Cart content not found.');
    }
}

