let randTal = Math.round(Math.random() * 10);

console.log(randTal);

const but = document.querySelector("#tjek");

but.addEventListener("click", samTal);

function samTal() {
  let gaet = document.querySelector("#tal").value;
  console.log(gaet);
  but.removeEventListener("click", samTal);

  if (gaet == randTal) {
    alert(`Du gættede rigtigt! Tallet var ${randTal}`);
  } else {
    alert("Du gættede forkert. Prøv igen");
    but.addEventListener("click", samTal);
  }
}
