function updateCartCount() {
    const root = window.Shopify.routes.root ?? '/';
    fetch(root + 'cart.js')
        .then(r => r.json())
        .then(cart => {
        const el = document.getElementById('cart-count');
        if (!el) return;
        el.textContent = cart.item_count > 0 ? cart.item_count : '';
    });
}

console.log('🟢 Cart polling started');
setInterval(updateCartCount, 2000);