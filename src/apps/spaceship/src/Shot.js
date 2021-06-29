import { WOAnimation } from "../../../lib";
import { GameWObject } from "./GameWobject.js";

export class ShotAnim extends WOAnimation {
  //16 frames
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h, 16, "./assets/fire_blue.png", infinityLoop);
  }
}

export class Shot extends GameWObject {
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h);
    this.animation = new ShotAnim(x, y, w, h, infinityLoop);
    this.animation.position = this.position;
    this.addElement(this.animation);
  }

  update() {
    // this.alive = !this.animation.hasFinished();
    super.update();
  }
}
