let sidebar = document.querySelector('.sidebar');
document.querySelector('#menu-btn').onclick = () => {
    sidebar.classList.toggle("active");
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search_form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
    cartItem.classList.remove('active');
    sidebar.classList.remove('active');
}

let cartItem = document.querySelector('.cart_item_container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle("active");
    searchForm.classList.remove('active');
    sidebar.classList.remove('active');
}

window.onscroll = () => {
    sidebar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// end
