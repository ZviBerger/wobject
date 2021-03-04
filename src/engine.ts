import { WOMargin, WOPosition, WOSize, WOPadding, WOMotion } from "./basics.js";
import { getRandomColor } from "./utility.js";

export class WObject {
  elements: Array<WObject>;
  position: WOPosition;
  originPos: WOPosition;
  size: WOSize;
  margin: WOMargin;
  padding: WOPadding;
  motion: WOMotion;
  color: string;

  motionMethods: (motion: WOMotion) => WOMotion;

  constructor(x: number, y: number, w: number, h: number, color: string) {
    this.elements = [];
    this.position = new WOPosition(x, y);
    this.originPos = new WOPosition(x, y);
    this.size = new WOSize(w, h);
    this.margin = new WOMargin();
    this.padding = new WOPadding();
    this.motion = new WOMotion();
    this.color = color;
  }
  update(): void {
    if (this.motionMethods) {
      let newMotion = this.motionMethods(this.motion);
      this.position.adapt(newMotion);
      this.motion = newMotion;
    }
    this.elements.forEach((element) => {
      element.update();
    });
  }
  getFullWidth() {
    return this.margin.left + this.size.width + this.margin.right;
  }
  getFullHeight() {
    return this.margin.top + this.size.height + this.margin.bottom;
  }
  setMotionMethod(motionMethods: (motion: WOMotion) => WOMotion) {
    this.motionMethods = motionMethods;
  }

  setMotion(motion: WOMotion) {
    this.motion = motion;
  }

  adoptPosition(position: WOPosition) {
    this.position.x += position.x;
    this.position.y += position.y;
  }

  setMargin(left, top, right, bottom) {
    this.margin.set(left, top, right, bottom);
  }
  setPadding(left, top, right, bottom) {
    this.padding.set(left, top, right, bottom);
  }
  reOrganize(position) {
    this.elements.forEach((element) => {
      element.reOrganize(position ?? this.position);
    });
  }

  addElement(s: WObject) {
    s.adoptPosition(this.position);
    this.elements.push(s);
  }

  myDisplay(context: CanvasRenderingContext2D) {
    //override this method as your wish
  }

  display(context: CanvasRenderingContext2D) {
    this.myDisplay(context);
    this.elements.forEach((element) => {
      element.display(context);
    });
  }
}
