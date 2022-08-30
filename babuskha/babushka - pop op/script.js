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
      clone.querySelector("img").src = `medium/${dish.billednavn}-md.jpg`;
      clone.querySelector("img").alt = `${dish.billednavn}`;
      clone.querySelector("#shortInfo").textContent = `${dish.kortbeskrivelse}`;
      clone.querySelector("#price").textContent = `${dish.pris},-`;
      clone.querySelector("#dish").addEventListener("click", () => showDetails(dish));
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

//Create const for the popup
const boxPopup = document.querySelector("#popup_bg");
const popup = document.querySelector("#popup");

//Make the function that shows the detail window
function showDetails(dish) {
  //Toggle the class "hide" from the whole popup window
  boxPopup.classList.toggle("hide");
  //Insert all information from dish to the specific tags
  document.querySelector("#pop_name").textContent = dish.navn;
  document.querySelector("#category").textContent = dish.kategori;
  document.querySelector("#pop_image").src = `medium/${dish.billednavn}-md.jpg`;
  document.querySelector("#pop_image").alt = dish.billednavn;
  document.querySelector("#pop_shortInfo").textContent = dish.kortbeskrivelse;
  document.querySelector("#longInfo").textContent = dish.langbeskrivelse;
  document.querySelector("#origin").textContent = dish.oprindelsesregion;
  document.querySelector("#pop_price").textContent = `${dish.pris},-`;

  // Add eventlistener for closing the popup box
  document.querySelector("#close").addEventListener("click", closeDetails);
}

// Function for closing the pop-up
function closeDetails() {
  boxPopup.classList.toggle("hide");
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
