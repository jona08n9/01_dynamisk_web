window.addEventListener("load", hils);

const morgen = "Godmorgen";
const dag = "Goddag";
const aften = "Godaften";
const nat = "Godnat";

let tid = new Date().getHours();

function hils() {
  if (tid > 4 && tid < 11) {
    console.log(`${morgen}, klokken er ${tid}`);
  } else if (tid > 10 && tid < 19) {
    console.log(`${dag}, klokken er ${tid}`);
  } else if (tid > 18) {
    console.log(`${aften}, klokken er ${tid}`);
  } else {
    console.log(`${nat}, klokken er ${tid}`);
  }
}
