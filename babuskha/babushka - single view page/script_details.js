//Collect the ID info from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

//Deifne dish
let dish;

const url = `https://babushka-dd8a.restdb.io/rest/menu/${id}`;
const key = "600ec2fb1346a1524ff12de4";

//Collect the data with the ID
async function colData() {
  console.log("colData");
  const respons = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": key,
    },
  });
  dish = await respons.json();
  console.log({ dish });
  showDish();
}

document.querySelector("#close").addEventListener("click", goBack);

//Show the dish
function showDish() {
  console.log(dish);

  document.querySelector("#pop_name").textContent = dish.navn;
  document.querySelector("#category").textContent = dish.kategori;
  document.querySelector("#pop_image").src = `medium/${dish.billednavn}-md.jpg`;
  document.querySelector("#pop_image").alt = dish.billednavn;
  document.querySelector("#pop_shortInfo").textContent = dish.kortbeskrivelse;
  document.querySelector("#longInfo").textContent = dish.langbeskrivelse;
  document.querySelector("#origin").textContent = dish.oprindelsesregion;
  document.querySelector("#pop_price").textContent = `${dish.pris},-`;

  // Add eventlistener for going back
}

function goBack() {
  history.back();
}

colData();
