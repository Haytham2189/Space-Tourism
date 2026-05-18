const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

const mobileNavClose = document.querySelector(".mobile-nav-close");

const navbarMenu = document.querySelector(".navbar-menu");

mobileNavToggle.addEventListener("click", () => {
  navbarMenu.classList.add("open");
});

mobileNavClose.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});