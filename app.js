const menuBtn = document.getElementById("menu");
const hideNavbar = document.getElementById("hide-navbar");
const mobileNavbar = document.getElementById("mobile-navbar");

const modeSwith = document.getElementById("mode-switch");
const modeSwithDesktop = document.getElementById("mode-switch-desktop");

menuBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("-translate-x-50");
});

modeSwith.addEventListener("click", () => {
  modeSwith.classList.toggle("translate-y-full");
  document.documentElement.classList.toggle("dark");
});

modeSwithDesktop.addEventListener("click", () => {
  modeSwithDesktop.classList.toggle("translate-x-full");
  document.documentElement.classList.toggle("dark");
});

hideNavbar.addEventListener("click", () => {
  mobileNavbar.classList.toggle("-translate-x-50");
});
