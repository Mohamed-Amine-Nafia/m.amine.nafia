const menuBtn = document.getElementById("menu");
const hideNavbar = document.getElementById("hide-navbar");
const mobileNavbar = document.getElementById("mobile-navbar");
const overlay = document.querySelector(".overlay");

const modeSwith = document.getElementById("mode-switch");
const modeSwithDesktop = document.getElementById("mode-switch-desktop");

const footerDate = document.getElementById("footer-date");

const date = new Date();

function toggleNavBar() {
  mobileNavbar.classList.toggle("-translate-x-50");
  overlay.classList.toggle("hidden");
}

function addDark() {
  document.documentElement.classList.toggle("dark");
}

menuBtn.addEventListener("click", () => {
  toggleNavBar();
});
hideNavbar.addEventListener("click", () => {
  toggleNavBar();
});

modeSwith.addEventListener("click", () => {
  modeSwith.classList.toggle("translate-y-full");
  addDark();
});

modeSwithDesktop.addEventListener("click", () => {
  modeSwithDesktop.classList.toggle("translate-x-full");
  addDark();
});

footerDate.innerText =
  "Copyright ©" + date.getFullYear() + "- All right reserved";
