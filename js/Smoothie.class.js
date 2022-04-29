import Color from "./Color.class.js";

class Smoothie {
  constructor() {
    this._color = new Color(0, 0, 0);
    this._gobelet = document.querySelector("#gobelet");
    this._acidityLevel = document.querySelector("#acidity-level span");
    this._sugarLevel = document.querySelector("#sugar-level span");
    this._volumeLevel = document.querySelector("#volume-level span");
    this._vitaminLevel = document.querySelector("#vitamin-level span");
    this._juice = document.querySelector("#juice");
    this._fruits = [];
    this._volume = 0;
    this._acidity = 0;
    this._sugar = 0;
    this._vitamins = new Set();
  }

  // ----getters
  get vitamins() {
    return this._vitamins;
  }
  get acidity() {
    return this._acidity;
  }
  get sugar() {
    return this._sugar;
  }
  get volume() {
    return this._volume;
  }
  get color() {
    return this._color;
  }
  get fruits() {
    return this._fruits;
  }

  // setters-------
  set acidity(acidity) {
    this._acidity = acidity;
  }
  // set fruits(fruit) {
  //   this._fruits.push(fruit);
  // }
  set sugar(sugar) {
    this._sugar = sugar;
  }
  set volume(volume) {
    this._volume = volume;
  }
  set color(color) {
    this._color = color;
  }
  // set vitamins(vitamins) {
  //   this._vitamins.push(vitamins);
  // }

  addFruit(fruit) {
    if (this.volume + fruit.volume >= 120) {
      alert("ca va déborder");
      return false;
    }
    this.fruits.push(fruit);
    // this.fruits = fruit;
    this.acidity += fruit.acidity;
    this.sugar += fruit.sugar;
    this.volume += fruit.volume;
    // this.vitamins.concat(fruit.vitamins) -- > ne prend pas en charge les doublons
    for (let vitamin of fruit.vitamins) {
      this.vitamins.add(vitamin);
    }
    console.log("color", this.color);
    // let smoothieColor = this.color.colorMix(fruit.color);
    this.color.colorMix(fruit.color);
    // smoothieColor.color.getRgb();
    console.log("color2", this.color);
    // this.color.getRgb();
    // console.log("fruit", fruit.color);
    // console.log(this.color.getRgb());
    // console.log(this.vitamins);
    // console.log("in smoothie this", this.fruits);
    // console.log("in smoothie fruit", fruit);
    this.updateUi();
  }
  updateUi() {
    this._volumeLevel.textContent = this.volume;
    this._acidityLevel.textContent = this.acidity;
    this._sugarLevel.textContent = this.sugar;
    let vitaminList = [];
    this._vitamins.forEach((element) => {
      vitaminList = vitaminList.concat(element);
    });
    this._juice.style.backgroundColor = this.color.getRgb();
    this._juice.style.height = this.volume + "%";
    this._vitaminLevel.textContent = vitaminList.join(", ");
  }
}

export default Smoothie;
