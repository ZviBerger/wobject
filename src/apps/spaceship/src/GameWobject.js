import {
  LightWObject,
  WObject,
  WOFrame,
  WOCollidersContainer,
  WOCircle,
  WOTextBox,
} from "../../../lib";

export class GameWObject extends WObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.alive = true;
    this.frame = new WOFrame(x, y, w, h);
    this.addElement = this.addElementNotAdopt;
  }
  update() {
    super.update();
    this.frame.update(this.position, this.size);
  }
  myDisplay(context) {
    return;

    new WOTextBox(
      this.position.x,
      this.position.y,
      100,
      100,
      "#fff",
      this.alive ? "T" : "F"
    ).display(context);
    new WOCircle(this.frame.topLeft.x, this.frame.topLeft.y, 5, "#fff").display(
      context
    );
    new WOCircle(
      this.frame.topRight.x,
      this.frame.topRight.y,
      5,
      "#fff"
    ).display(context);
    new WOCircle(
      this.frame.bottomRight.x,
      this.frame.bottomRight.y,
      5,
      "#fff"
    ).display(context);
    new WOCircle(
      this.frame.bottomLeft.x,
      this.frame.bottomLeft.y,
      5,
      "#fff"
    ).display(context);
  }

  isAlive() {
    return this.alive;
  }
  setLive() {
    this.alive = true;
  }
  setTimeToLeave() {
    this.alive = false;
  }
}

export class MemoryAndCollisionsManager extends WOCollidersContainer {
  update() {
    //take out from the list will remove all references to the object
    //so the GC will delete it.
    this.elements = this.elements.filter((el) => el.isAlive());
    //call to super update to have also basic functionality
    super.update();
  }
}
