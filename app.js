const menuBtn = document.getElementById("menu");
const hideNavbar = document.getElementById("hide-navbar");
const mobileNavbar = document.getElementById("mobile-navbar");
const overlay = document.querySelector(".overlay");

const videoPlay = document.querySelector(".play-btn");

const modeSwith = document.getElementById("mode-switch");
const modeSwithDesktop = document.getElementById("mode-switch-desktop");

const cards = Array.from(document.querySelectorAll(".card"));

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

videoPlay.addEventListener("click", () => {
  document.getElementsByTagName("video")[0].classList.remove("hidden");
  document.getElementsByTagName("video")[0].play();
});

window.addEventListener("scroll", () => {
  document.getElementsByTagName("video")[0].classList.add("hidden");
  document.getElementsByTagName("video")[0].pause();
});

footerDate.innerText =
  "Copyright ©" + date.getFullYear() + "- All right reserved";

cards.forEach((card) =>
  card.addEventListener("click", () => {
    card.classList.add("card:hover");
  }),
);
