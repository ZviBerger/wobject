import { WOAnimation } from "../../../lib";
import { GameWObject } from "./GameWobject.js";

export class ExplosionAnim extends WOAnimation {
  //48 frames
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h, 48, "assets/type_C.png", infinityLoop);
  }
}

export class Explosion extends GameWObject {
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h);
    this.animation = new ExplosionAnim(x, y, w, h, infinityLoop);
    this.animation.position = this.position;
    this.addElement(this.animation);
  }

  setPosition(position) {
    this.position.x = position.x - this.size.width / 2;
    this.position.y = position.y - this.size.height / 2;
  }

  update() {
    super.update();
    this.alive = this.infinityLoop || !this.animation.hasFinished();
  }
}
