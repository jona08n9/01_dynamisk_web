const bottle = document.querySelectorAll(".flaske");

bottle.forEach((bot) => {
  bot.addEventListener("click", alkoholTjek);

  function alkoholTjek() {
    bot.removeEventListener("click", alkoholTjek);

    if (bot.classList.contains("alkohol")) {
      console.log("Der er alkohol i denne vare.");
    } else {
      console.log("Der er ikke alkohol i denne vare.");
    }

    bot.addEventListener("click", alkoholTjek);
  }
});
