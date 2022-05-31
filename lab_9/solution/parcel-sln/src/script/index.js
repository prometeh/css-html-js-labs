const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navbarLinks = document.querySelector("#navbar-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  navbarLinks.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  navbarLinks.classList.add("hidden");
  closeBtn.classList.add("hidden");
  menuBtn.classList.remove("hidden");
});
