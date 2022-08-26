let num = 0;

const img = document.querySelector("img");
const knap = document.querySelector("button");
const billeder = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png"];

knap.addEventListener("click", skiftBillede);

function skiftBillede() {
  if (num < 6) {
    num++;
    console.log(billeder[num]);
    img.src = billeder[num];
  } else {
    num++;
    knap.textContent = "Forfra";
    img.src = billeder[num];
    knap.addEventListener("click", sidsteBillede);
  }
}

function sidsteBillede() {
  knap.removeEventListener("click", sidsteBillede);
  num = 0;
  img.src = billeder[num];
  knap.textContent = "Videre";
}
