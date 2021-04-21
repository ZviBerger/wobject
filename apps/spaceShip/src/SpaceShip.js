import { WOImage } from "/out/index.js";
import { GameWObject } from "./GameWobject.js";

export class SpaceShip extends GameWObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.spaceshipImg = new WOImage(x, y, "assets/spaceShip.png", w, h);
    this.spaceshipImg.position = this.position;
    this.addElement(this.spaceshipImg);
  }

  update() {
    super.update();
  }
}
