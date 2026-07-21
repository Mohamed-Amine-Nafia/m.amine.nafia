const menuBtn = document.getElementById("menu");
const mobileNavbar = document.getElementById("mobile-navbar");

menuBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("-translate-x-50");
});
