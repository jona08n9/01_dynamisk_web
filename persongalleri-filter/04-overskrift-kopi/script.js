//Load data
const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

let personer;
let filter = "alle";

const header = document.querySelector("h1");
const filterKnap = document.querySelectorAll("nav button");

filterKnap.forEach((knap) => knap.addEventListener("click", filtrerPersoner));

//Henter Data ned fra JSON
async function hentData() {
  const resspons = await fetch(url, options);
  let personer = await resspons.json();
  // console.log("Personer", personer);
  vis(personer);
}

//Event listener på knap, som skifter filteret.
function filtrerPersoner() {
  header.textContent = "Persongalleri - " + this.textContent;
  filter = this.dataset.troende;
  hentData();
  vis(personer);
}

function vis(personer) {
  const main = document.querySelector("#holder");
  const template = document.querySelector("template");

  //Sletter indholdet af personer
  main.textContent = "";

  //Kører liste for alle articler
  personer.forEach((person) => {
    // console.log("Troende", person.troende);
    //Se hvulken tro folkene har
    if (filter == person.troende || filter == "alle") {
      const klon = template.cloneNode(true).content;
      klon.querySelector("img").src = `faces/${person.billede}`;
      klon.querySelector("img").alt = `faces/${person.fornavn}`;
      klon.querySelector("h2").textContent = `${person.efternavn}, ${person.fornavn}`;
      klon.querySelector(".titel").textContent = `Titel: ${person.titel}`;
      klon.querySelector(".email").textContent = `Email: ${person.email}`;
      main.appendChild(klon);
    }
  });
}

hentData();

// Objecter i Array
// _id: "60116c1eef2e8a1b00036d3a"
// _mock: true
// billede: "COLOURBOX7112442.jpg"
// efternavn: "Walsh"
// email: "jane@mail.com"
// fornavn: "Jane"
// "fødselsdag": "2011-06-07T00:00:00.000Z"
// hobby: "cumque atque aperiam ad quos tempore odio"
// titel: "Et adipisci"
// troende: "tvivler"
