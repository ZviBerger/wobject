import { WOImage, WOAnimation } from "../../out/index.js";
import { GameWObject } from "./GameWobject.js";

export class ThrustAnim extends WOAnimation {
  //16 frames
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h, 16, "assets/fire_red.png", infinityLoop);
  }
}

export class SpaceShip extends GameWObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.spaceshipImg = new WOImage(x, y, "assets/spaceShip.png", w, h);
    this.leftThrust = new ThrustAnim(x, y + h, w - 50, h - 20, true);
    this.rightThrust = new ThrustAnim(x, y + h, w - 50, h - 20, true);
    this.spaceshipImg.position = this.position;

    this.addElement(this.spaceshipImg);
    this.addElement(this.leftThrust);
    this.addElement(this.rightThrust);
  }

  update() {
    super.update();
    this.leftThrust.position.x = this.position.x - 5;
    this.rightThrust.position.x = this.position.x + 55;

    this.rightThrust.position.y = this.leftThrust.position.y =
      this.position.y + this.size.height - 20;
  }
}
