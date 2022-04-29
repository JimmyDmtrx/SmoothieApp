import Fruit from './Fruit.class.js';
import Color from './Color.class.js';

class Kiwi extends Fruit {

  constructor() {
	  super();
	  this._color = new Color(0, 255, 0);
	  this._volume = 20;
	  this._sugar = 10;
	  this._acidity = 10;
	  this._vitamins = ["C"];
  }
  toString(){
	console.log("Je suis un kiwi"); 
  }



}

export default Kiwi;
