let searchForm = document.querySelector('.search_form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart_item_container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle("active");
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    // navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// end
