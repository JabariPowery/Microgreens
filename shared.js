var mobileNav = document.querySelector(".mobile-nav");
var toggleButton = document.querySelector(".toggle-button");
var footerDate = document.querySelector(".footer-date");

toggleButton.addEventListener('click', function() {
    mobileNav.classList.toggle("open");
    toggleButton.classList.toggle("open-button");
})

footerDate.innerHTML = new Date().getFullYear();