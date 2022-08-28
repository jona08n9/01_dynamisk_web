const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};
let filter = "ja";

async function hentData() {
  const resspons = await fetch(url, options);
  const personer = await resspons.json();
  vis(personer);
}

hentData();

const main = document.querySelector("#holder");
const template = document.querySelector("template");

function vis(personer) {
  console.log(personer);

  personer.forEach((person) => {
    if (filter == person.troende) {
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
