const navElement = document.querySelector("nav");
const menuElement = document.querySelector(".nav-btn");
const navlinksElement = document.querySelector("nav > .nav-links");
const [closeBtn, openBtn] = document.querySelectorAll(".nav-btn > img");

const toggling = () => {
  navElement.classList.toggle("black");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  navlinksElement.classList.toggle("hidden");
};

openBtn.addEventListener("click", toggling);
closeBtn.addEventListener("click", toggling);
