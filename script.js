var mobileNav = document.querySelector(".mobile-nav");
var toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener('click', function() {
    mobileNav.classList.toggle("open");
})
