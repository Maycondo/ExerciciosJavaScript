const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelector(".nav-link");

navToggle.addEventListener("click", function () {
    navLink.classList.toggle("nav-links-active"); 
});
