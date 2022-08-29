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
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
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
    //Se hvilken tro folkene har
    if (filter == person.troende || filter == "alle") {
      const klon = template.cloneNode(true).content;
      klon.querySelector("img").src = `faces/${person.billede}`;
      klon.querySelector("img").alt = `${person.fornavn}`;
      klon.querySelector("h2").textContent = `${person.efternavn}, ${person.fornavn}`;
      klon.querySelector(".titel").textContent = `Titel: ${person.titel}`;
      klon.querySelector(".email").textContent = `Email: ${person.email}`;
      klon.querySelector(".id_card").addEventListener("click", () => visDetaljer(person));
      main.appendChild(klon);
    }
  });
  console.log("ok");
}

const detailWindow = document.querySelector("#popup");
const xDetails = document.querySelector("#close");
const idName = document.querySelector(".id_name");
const idImg = document.querySelector(".id_img");
const idTitle = document.querySelector(".id_title");
const idEmail = document.querySelector(".id_email");
const idBirth = document.querySelector(".id_birth");
const idHobby = document.querySelector(".id_hobby");
const idFaith = document.querySelector(".id_faith");

xDetails.addEventListener("click", closeDetails);

function visDetaljer(person) {
  console.log(person);
  detailWindow.classList.toggle("hide");

  idName.textContent = `${person.efternavn}, ${person.fornavn}`;
  idImg.src = `faces/${person.billede}`;
  idImg.alt = person.billede;
  idTitle.textContent = person.titel;
  idEmail.textContent = person.email;
  idBirth.textContent = person.fødselsdag.slice(0, 10);
  idHobby.textContent = person.hobby;
  idFaith.textContent = person.troende;
}

function closeDetails() {
  detailWindow.classList.toggle("hide");
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
