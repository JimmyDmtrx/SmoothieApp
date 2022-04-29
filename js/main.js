import Banana from "./Banana.class.js";
import Strawberry from "./Strawberry.class.js";
import Kiwi from "./Kiwi.class.js";
import Smoothie from "./Smoothie.class.js";

// ----variable
let smoothie = new Smoothie();
let bananaBtn = document.getElementById("banana");
let strawberryBtn = document.getElementById("strawberry");
let kiwiBtn = document.getElementById("kiwi");
// -------listener
bananaBtn.addEventListener("click", addBanana);
strawberryBtn.addEventListener("click", addStrawberry);
kiwiBtn.addEventListener("click", addKiwi);
// ------ functions
function addBanana() {
  console.log("banana");
  const banana = new Banana();
  smoothie.addFruit(banana);
}
function addStrawberry() {
  console.log("strawberry");
  const strawberry = new Strawberry();
  smoothie.addFruit(strawberry);
}
function addKiwi() {
  console.log("Kiwi");
  const kiwi = new Kiwi();
  smoothie.addFruit(kiwi);
}

//ECOUTEURS DE CLICK SUR NOS BOUTONS BANANE FRAISE KIWI
//smoothie.addFruit(new Banana())
