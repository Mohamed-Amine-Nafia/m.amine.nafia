const menuBtn = document.getElementById("menu");
const mobileNavbar = document.getElementById("mobile-navbar");

const modeSwith = document.getElementById("mode-switch");

menuBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("-translate-x-50");
});

modeSwith.addEventListener("click", () => {
  modeSwith.classList.toggle("translate-y-full");
  document.documentElement.classList.toggle("dark");
});
