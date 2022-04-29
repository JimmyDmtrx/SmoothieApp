import Fruit from './Fruit.class.js';
import Color from './Color.class.js';

class Strawberry extends Fruit {
  

  constructor() {
	  super();
	  this._color = new Color(255, 0, 0);
	  this._volume = 3;
	  this._sugar = 8;
	  this._acidity = 30;
	  this._vitamins = ["C", "b9"];
  }

  toString(){
	console.log("Je suis ue fraise"); 
  }


}

export default Strawberry;
