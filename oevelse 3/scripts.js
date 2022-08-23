let randTal = Math.round(Math.random() * 10);
let forsoeg = 0;
const but = document.querySelector("#tjek");
console.log(randTal);

but.addEventListener("click", samTal);
function samTal() {
  forsoeg++;
  let gaet = document.querySelector("#tal").value;

  console.log(gaet);

  if (gaet > randTal) {
    alert(`Du gættede forkert! Dit gæt ${gaet}, var for højt. Prøv igen.`);
  } else if (gaet < randTal) {
    alert(`Du gættede forkert! Dit gæt ${gaet}, var for lavt. Prøv igen.`);
  } else {
    alert(`Du gættede rigtigt! Godt ramt med ${gaet}. Du brugte ${forsoeg} forsøg.`);
  }
}
