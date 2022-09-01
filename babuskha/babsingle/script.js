//Load data from RESTDB
const url = "https://babushka-dd8a.restdb.io/rest/menu";
const options = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

//Definer retter
let dishes;

//Set filter to start with all dishes
let filter = "all";

//Define header in main
const mainHeader = document.querySelector("h1");

//Define a const for all buttons to filter with, and add eventListener
const filterBut = document.querySelectorAll("nav button");
filterBut.forEach((but) => but.addEventListener("click", filterDishes));

//Collect data from REST DB
async function colData() {
  const resspons = await fetch(url, options);
  let dishes = await resspons.json();
  console.log("Dishes:", dishes);
  show(dishes);
}

//Show the dishes
function show(dishes) {
  //Add the template and main as const
  const main = document.querySelector("#main");
  const template = document.querySelector("template");

  //Reset all information in main
  main.textContent = "";

  //Run list for all dishes
  dishes.forEach((dish) => {
    //Filter based on the filter value
    if (filter == "all" || filter == dish.kategori) {
      const clone = template.cloneNode(true).content;
      clone.querySelector("h2").textContent = `${dish.navn}`;
      // clone.querySelector("#category").textContent = `${dish.kategori}`;
      clone.querySelector("img").src = `medium/${dish.billednavn}-md.jpg`;
      clone.querySelector("img").alt = `${dish.billednavn}`;
      clone.querySelector("#shortInfo").textContent = `${dish.kortbeskrivelse}`;
      // clone.querySelector("#longInfo").textContent = `${dish.langbeskrivelse}`;
      clone.querySelector("#price").textContent = `${dish.pris},-`;
      clone.querySelector("#dish").addEventListener("click", () => visDetaljer(dish));
      main.appendChild(clone);
    }
  });
  console.log("loaded");
}

//Filter the dishes according to data from buttons
function filterDishes() {
  console.log("let's go");
  mainHeader.textContent = this.textContent;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  filter = this.dataset.dish;
  colData();
}

function visDetaljer(dish) {
  console.log(dish._id);
  window.location.href = `details.html?id=${dish._id}`;
}

colData();

// Array Object info
// _id: "600ec071ef2e8a1b00024623"
// billede: Array [ "600ec0daef2e8a1b00024661" ]
// billednavn: "voda"
// kategori: "drikkevarer"
// kortbeskrivelse: "Voda-vodka - vodka i rigelige mængder"
// langbeskrivelse: "Voda-vodka - en vodka brygget på det pureste vand af smeltet sne fra Sibirien. Passer godt til alle hovedretter"
// navn: "Voda-vodka"
// oprindelsesregion: "Sibirien"
// pris: 19
