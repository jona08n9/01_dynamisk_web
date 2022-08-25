const bottle = document.querySelectorAll(".flaske");

bottle.forEach((bot) => {
  bot.addEventListener("click", alkoholTjek);

  function alkoholTjek() {
    if (bot.classList.contains("alkohol")) {
      console.log("Der er alkohol i denne vare.");
    } else {
      console.log("Der er ikke alkohol i denne vare.");
    }
  }
});

// ELLER DENNE MED ID PÅ ALLE BILLEDER

// document.querySelector("#oel").addEventListener("click", alkoTjek);
// document.querySelector("#faxek").addEventListener("click", alkoTjek);
// document.querySelector("#pepsi").addEventListener("click", alkoTjek);
// document.querySelector("#drn").addEventListener("click", alkoTjek);

// function alkoTjek() {
//   console.log(this.alt);
//  if (this.alt == "oel" || this.alt == "snaps") {
//   console.log("Der er alkohol i denne drik.")
//  } else {
//   console.log("Der er ikke alkohol i denne drik.")
//  }
// }
