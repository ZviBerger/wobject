import { WOPosition } from "../../../lib";

export class WODirections {
  static UP = "up";
  static RIGHT = "right";
  static DOWN = "down";
  static LEFT = "left";
}
WODirections.DOWN;

export class Direction2Move {
  constructor(deltaX, deltaY) {
    this.directionNow = null; // options  = "UP" | "RIGHT" | "DOWN" | "LEFT";
    this.setRIGHT();
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }
  setDirectNow(directionNow) {
    this.directionNow = directionNow;
  }
  isUP() {
    return this.directionNow === WODirections.UP;
  }
  isRIGHT() {
    return this.directionNow === WODirections.RIGHT;
  }
  isDOWN() {
    return this.directionNow === WODirections.DOWN;
  }
  isLEFT() {
    return this.directionNow === WODirections.LEFT;
  }
  setUP() {
    this.directionNow = WODirections.UP;
  }
  setRIGHT() {
    this.directionNow = WODirections.RIGHT;
  }
  setDOWN() {
    this.directionNow = WODirections.DOWN;
  }
  setLEFT() {
    this.directionNow = WODirections.LEFT;
  }
  isOppositeDirection(direction) {
    return (
      (direction.UP && this.directionNow.isDOWN()) ||
      (direction.DOWN && this.directionNow.isUP()) ||
      (direction.RIGHT && this.directionNow.isLEFT()) ||
      (direction.LEFT && this.directionNow.isRIGHT())
    );
  }
  getDirectionVector() {
    if (this.isUP()) return { x: 0, y: -this.deltaY };
    if (this.isRIGHT()) return { x: this.deltaX, y: 0 };
    if (this.isDOWN()) return { x: 0, y: this.deltaY };
    if (this.isLEFT()) return { x: -this.deltaX, y: 0 };
  }

  getFactorizedPosition(pos, factor) {
    if (this.isUP()) return new WOPosition(pos.x, pos.y + factor * this.deltaY);
    if (this.isRIGHT())
      return new WOPosition(pos.x - factor * this.deltaX, pos.y);
    if (this.isDOWN())
      return new WOPosition(pos.x, pos.y - factor * this.deltaY);
    if (this.isLEFT())
      return new WOPosition(pos.x - factor * this.deltaX, pos.y);

    //default right
    return new WOPosition(pos.x - factor * this.deltaX, pos.y);
  }

  getDeltaX() {
    return this.deltaX;
  }
  getDeltaY() {
    return this.deltaY;
  }
}
