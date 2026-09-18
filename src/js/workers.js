const workerSection = document.getElementById("workerSection");
const searchBar = document.getElementById("searchBar");

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
  {
    id: 6,
    name: "Harry Smith",
    job: "Electrician",
    image: "./image/electrician.jpg",
  },
];

searchBar.addEventListener("input", filterData);

function filterData() {
  const inputValue = searchBar.value.trim();

  console.log(inputValue);
  const searchTerm = inputValue.toLowerCase();

  let filteredWorkers = artisanData.filter((data) => {
    return data.name.toLowerCase().includes(searchTerm);
  });

  display(filteredWorkers);
}

function display(worker) {
  workerSection.innerHTML = worker
    .map((data) => {
      return ` <div
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
}

display(artisanData);

function add(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

add(2, 4);
