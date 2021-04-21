import { WOAnimation, WOPosition, WORect } from "../../../out/index.js";
import { GameWObject } from "./GameWobject.js";
import { Explosion } from "./Explosion.js";

export class AstroidAnim extends WOAnimation {
  //16 frames
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h, 16, "assets/rock.png", infinityLoop);
  }
}

export class Explodable extends GameWObject {
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h);
    this.explosion = new Explosion(x, y, 300, 300, false);
    //this.explosion.position = this.position;
    this.exploded = false;
  }
  explode() {
    this.elements = []; //remove all other parts
    this.explosion.setPosition(
      new WOPosition(
        this.position.x + this.size.width / 2,
        this.position.y + this.size.height / 2
      )
    );
    this.addElement(this.explosion);
    this.exploded = true;
  }
  update() {
    this.alive = this.explosion.isAlive();

    super.update();
  }
}

export class Astroid extends Explodable {
  constructor(x, y, w, h, infinityLoop) {
    super(x, y, w, h);
    this.animation = new AstroidAnim(x, y, w, h, infinityLoop);
    this.animation.position = this.position;
    this.animation.size = this.size;
    this.addElement(this.animation);
  }

  update() {
    //  this.alive =  this.infinityLoop || !this.animation.hasFinished();

    super.update();
  }
}
