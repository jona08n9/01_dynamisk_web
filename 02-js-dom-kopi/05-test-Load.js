document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Den spiller");
}

const header = document.querySelector("header");
const overskrift = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3_1 = document.querySelector("#h3_1");
const h3_2 = document.querySelector("#h3_2");
const img_1 = document.querySelector("#img1");
const img_2 = document.querySelector("#img2");
const section = document.querySelector("#section");
const article_1 = document.querySelector("#article1");
const article_2 = document.querySelector("#article2");
const p_1 = document.querySelector("#p1");
const p_2 = document.querySelector("#p2");
const p_3 = document.querySelector("#footer_p");
const footer = document.querySelector("footer");

overskrift.textContent = "Ny Titel";
console.log(overskrift);

img_1.src = "https://placeimg.com/640/480/animals";

let mainSection = document.querySelector("section");
let newArticle = document.createElement("article");
let newOverskrift = document.createElement("h3");
let newH3Text = document.createTextNode("Overskrift på ny h3");
newOverskrift.appendChild(newH3Text);
newArticle.appendChild(newOverskrift);

mainSection.appendChild(newArticle);
