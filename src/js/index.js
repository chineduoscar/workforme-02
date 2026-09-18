const artisanSection = document.getElementById("artisanSection");
const subBtn = document.getElementById("subBtn");
const subModal = document.getElementById("subModal");
const closeBtn = document.getElementById("closeBtn");

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

artisanSection.innerHTML = artisanData
  .map((data) => {
    return `<div
            class="rounded-lg border border-gray-100 p-5 flex items-center flex-col gap-5 shadow-sm"
          >
            <img
              src=${data.image}
              alt=""
              class="w-15 h-15 rounded-full"
            />
            <h1 class="font-bold text-2xl">${data.name}</h1>
            <p
              class="rounded-full px-2 py-1 bg-red-50 text-red-500 font-semibold"
            >
              ${data.job}
            </p>
          </div>`;
  })
  .join(" ");

const openModal = () => {
  subModal.classList.remove("hidden");
  subModal.classList.add("flex");
};

const closeModal = () => {
  subModal.classList.add("hidden");
  subModal.classList.remove("flex");
};

closeBtn.addEventListener("click", closeModal);
subBtn.addEventListener("click", openModal);

window.addEventListener("click", windowCloseModal);

function windowCloseModal(e) {
  console.log(e.target);
  console.log(subModal);
  if (e.target === subModal) {
    closeModal();
  }
}
