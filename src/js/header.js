const menuBtn = document.getElementById("menuBtn");
const smallNav = document.getElementById("smallNav");

menuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  smallNav.classList.toggle("hidden");
  smallNav.classList.toggle("flex");
}
