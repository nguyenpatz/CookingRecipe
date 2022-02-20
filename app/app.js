// click btn menu open searchbar and navbar
const btnMenu = document.querySelector(".btn__menu");

// const menuMobile = document.querySelector(".menu__mobile");
// const headerSearchbar = document.querySelector(".header__searchbar-mobile");
// const headerMobile = document.querySelector(".header__mobile");
// console.log(headerSearchbar);

const mobileContainer = document.querySelector(".mobile__container");

btnMenu.addEventListener("click", function() {
    mobileContainer.classList.toggle("show");

});