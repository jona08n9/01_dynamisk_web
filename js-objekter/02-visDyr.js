document.addEventListener("DOMContentLoaded", doneDomingo);

const dyr = { navn: "gris", type: "pattedyr", billede: "http://mabe-kea.dk/E19/pics/pig.png", levested: "svinefarme" };
console.log(dyr);
const article = document.querySelector("article");

function doneDomingo() {
  console.log("Kør makker");
}

const nyP = document.createElement("p");
const nyImg = document.createElement("img");
const dyrene = `Dyr: ${dyr.navn}, Type: ${dyr.type}, Den bor: ${dyr.levested}`;
const destination = document.querySelector("article");

article.appendChild(nyP);
article.appendChild(nyImg);
destination.querySelector("p").textContent = dyrene;
nyImg.src = `${dyr.billede}`;

// console.log(`Navn: ${dyr.navn}`);
// console.log(`Hvad er det for et dyr: ${dyr.type}`);
// console.log(`Hvor lever den henne: ${dyr.levested}`);
