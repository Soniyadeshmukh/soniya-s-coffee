let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItiem.classList.remove('active');
}


let cartItiem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItiem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    // cartItiem.classList.remove('active');
}


let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    // searchForm.classList.remove('active');
    cartItiem.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItiem.classList.remove('active');
}