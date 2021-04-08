import { WObject } from "../../../out/engine.js";
import { getRandomColor } from "../../../out/utility.js";
import { WORect } from "../../../out/shapes.js";
import { moveInLine } from "../../../out/movements.js";
import { WOPosition } from "../../../out/basics.js";
import { Direction2Move } from "./directions.js";

class Vertebrae extends WORect {
  constructor(x, y, w, h, color, direction) {
    super(x, y, w, h, color);
    this.direction = direction;
    this.lastPos = this.position;
  }
}

export class Snake extends WORect {
  constructor(x, y, w, h, color, direction) {
    super(x, y, w, h, color);
    // this.head = new WORect(x, y, w, h, getRandomColor());
    this.direction = direction;
    this.lastDir = direction;
    this.lastPos = this.position;
    this.add(getRandomColor());
  }
  add(color) {
    const direction = new Direction2Move(
      this.lastDir.deltaX,
      this.lastDir.deltaY
    );
    direction.setDirectNow(this.lastDir.directionNow);
    const position = direction.getFactorizedPosition(this.lastPos, 1);
    const vertebrae = new Vertebrae(
      position.x,
      position.y,
      this.size.width,
      this.size.height,
      color,
      direction
    );
    this.addElementNotAdopt(vertebrae);
  }
  move(directVector) {
    this.setMotionMethod(
      moveInLine(
        directVector.getDirectionVector().x,
        directVector.getDirectionVector().y
      )
    );
  }
  update() {
    /*
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 
    h   2   3   4   5   6   7   8  
  
    tail-> [8][7][6][5]
                    [4]
                    [3]
                    [2][1]  [0] <- Head
  
                     
      */
    if (!this.motionMethods) return; //we are not moving..

    //update the first vertebrae (not the head..)
    this.elements[0].setPosition(this.position);
    this.elements[0].direction = this.direction;

    //update the head
    const newMotion = this.motionMethods(this.motion);
    this.position.adapt(newMotion);
    this.motion = newMotion;
    this.frame.update(this.position, this.size);

    //update the rest of the vertebrates
    for (let i = this.elements.length - 1; i > 0; i--) {
      this.elements[i].setPosition(this.elements[i - 1].position);
      this.elements[i].direction.setDirectNow(
        this.elements[i - 1].direction.directionNow
      );
    }
    this.lastDir = this.elements[this.elements.length - 1].direction;
    this.lastPos = this.elements[this.elements.length - 1].position;
  }
}
