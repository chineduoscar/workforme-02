const menuBtn = document.getElementById("menuBtn");
const smallNav = document.getElementById("smallNav");
const artisanSection = document.getElementById("artisanSection");

const artisanData = [
  {
    id: 1,
    name: "John Henry",
    job: "Electrcian",
    image: "./image/electrician.jpg",
  },
  {
    id: 2,
    name: "John Mark",
    job: "Plumber",
    image: "./image/electrician.jpg",
  },
  {
    id: 3,
    name: "Mark Bread",
    job: "Mechanic",
    image: "./image/electrician.jpg",
  },
  {
    id: 4,
    name: "Miracle Samuel",
    job: "Electrcian",
    image: "./image/electrician.jpg",
  },
  {
    id: 5,
    name: "OG Ford",
    job: "Plumber",
    image: "./image/electrician.jpg",
  },
];

menuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  smallNav.classList.toggle("hidden");
  smallNav.classList.toggle("flex");
}
