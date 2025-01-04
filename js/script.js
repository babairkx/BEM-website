// menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-dropdown");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

// menu scroll background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
})

