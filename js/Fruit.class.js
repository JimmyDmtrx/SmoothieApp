class Fruit {

  constructor() {
    this.color = "white";
    this._acidity = 0;
    this._sugar = 0;
    this._volume = 0;
    this._vitamins = [];
  }

  toString() {
    console.log("Je suis un fruit délicieux");
  }

  set volume(volume) {
    this._volume = volume;
  }
  get volume() {
    return this._volume;
  }
  set acidity(acidity) {
    this._acidity = acidity;
  }
  get acidity() {
    return this._acidity;
  }
  set sugar(sugar) {
    this._sugar = sugar;
  }
  get sugar() {
    return this._sugar;
  }
  set color(color){
    this._color=color;
  }
  get color() {
    return this._color;
  }

  
  set vitamins(vitamins) {
    this._vitamins = vitamins;
  }
  get vitamins() {
    return this._vitamins;
  }


}

export default Fruit;
