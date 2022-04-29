class Color {
  //appelé à l'instanciation => new Color()
  constructor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
    this._nbColor = 0;
  }

  //appelé quand color.red
  get red() {
    return this._nbColor === 0 ? this._red : this._red / this._nbColor;
    //  this._red / this._nbColor;
  }
  get green() {
    return this._nbColor === 0 ? this._green : this._green / this._nbColor;
  }
  get blue() {
    return this._nbColor === 0 ? this._blue : this._blue / this._nbColor;
  }

  //appelé quand color.red=valeur
  set red(red) {
    this._red = red;
  }
  set blue(blue) {
    this._blue = blue;
  }
  set green(green) {
    this._green = green;
  }

  colorMix(color) {
    // console.log("this",this)
    // console.log("color",color)
    this._red += color.red;
    this._green += color.green;
    this._blue += color.blue;
    this._nbColor++;
  }

  // getRgb() {
  //   //renvoie la moyenne de tous les RGB qui ont influencés la couleur
  //   return (
  //     "rgb(" +
  //     this.red / this._nbColor +
  //     "," +
  //     this.green / this._nbColor +
  //     "," +
  //     this.blue / this._nbColor +
  //     ")"
  //   );
  // }
  getRgb() {
    //renvoie la moyenne de tous les RGB qui ont influencés la couleur
    return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
  }
}

export default Color;
