import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";

class Banana extends Fruit {
  constructor() {
    super();
    //COMPOSITION
    this._color = new Color(241, 196, 15);
    this._volume = 30;
    this._sugar = 10;
    this._acidity = 10;
    this._vitamins = ["b6", "Mg"];
  }

  toString() {
    console.log("Je suis une banane");
  }
}

export default Banana;
