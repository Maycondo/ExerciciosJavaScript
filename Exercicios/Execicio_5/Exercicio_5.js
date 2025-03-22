const toggleBtn = document.querySelector(".siedebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sideNav = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", function() {
    sideNav.classList.toggle("sidebar-active")
})

closeBtn.addEventListener("click", function() {
    sideNav.classList.remove("sidebar-active")
})