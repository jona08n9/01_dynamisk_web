document.addEventListener("DOMContentLoaded", doneDomingo);

const dyr = { navn: "gris", type: "pattedyr", billede: "http://mabe-kea.dk/E19/pics/pig.png", levested: "svinefarme" };
console.log(dyr);
const article = document.querySelector("article");

function doneDomingo() {
  console.log("Kør makker");
}

const nyP = document.createElement("p");
const nyP2 = document.createElement("p");
const nyImg = document.createElement("img");
const nyH3 = document.createElement("h3");
const dyrene = `Dyr: ${dyr.navn}, Type: ${dyr.type}, Den bor: ${dyr.levested}`;
const destination = document.querySelector("article");

article.appendChild(nyH3);
article.appendChild(nyImg);
article.appendChild(nyP);
nyP.setAttribute("id", "type");
article.appendChild(nyP2);
nyP2.setAttribute("id", "levested");

destination.querySelector("h3").textContent = `${dyr.navn}`;
destination.querySelector("#type").textContent = `Type: ${dyr.type}`;
destination.querySelector("#levested").textContent = `Levested: ${dyr.levested}`;
nyImg.src = `${dyr.billede}`;

// console.log(`Navn: ${dyr.navn}`);
// console.log(`Hvad er det for et dyr: ${dyr.type}`);
// console.log(`Hvor lever den henne: ${dyr.levested}`);
