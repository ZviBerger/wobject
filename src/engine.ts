import { WOMargin, WOPosition, WOSize, WOPadding, WOMotion } from "./basics.js";

export interface WebObject {
  elements: Array<WebObject>;
  update(): void;
  addElement(s: WebObject): void;
  display(context: CanvasRenderingContext2D): void;
  reOrganize(position?: WOPosition): void;
}

export class WObject implements WebObject {
  elements: Array<WObject>;
  position: WOPosition;
  originPos: WOPosition;
  size: WOSize;
  margin: WOMargin;
  padding: WOPadding;
  motion: WOMotion;
  color: string;
  wobjName: string;

  motionMethods: (motion: WOMotion) => WOMotion;

  constructor(x: number, y: number, w: number, h: number, color?: string) {
    this.elements = [];
    this.position = new WOPosition(x, y);
    this.originPos = new WOPosition(x, y);
    this.size = new WOSize(w, h);
    this.margin = new WOMargin();
    this.padding = new WOPadding();
    this.motion = new WOMotion();
    this.color = color;
    this.wobjName = this.constructor.name;
  }
  update(): void {
    if (this.motionMethods) {
      const newMotion = this.motionMethods(this.motion);
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
  setPosition(position: WOPosition) {
    this.position.x = position.x;
    this.position.y = position.y;
  }

  setMargin(left: number, top: number, right: number, bottom: number) {
    this.margin.set(left, top, right, bottom);
  }
  setPadding(left: number, top: number, right: number, bottom: number) {
    this.padding.set(left, top, right, bottom);
  }
  reOrganize(position?: WOPosition) {
    this.elements.forEach((element) => {
      element.reOrganize(position ?? this.position);
    });
  }

  addElement(s: WObject) {
    s.adoptPosition(this.position);
    this.elements.push(s);
  }

  addElementNotAdopt(s: WObject) {
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

/**
 * @class LightWObject
 *
 */
export class LightWObject implements WebObject {
  elements: Array<WebObject>;
  wobjName: string;

  constructor() {
    this.elements = [];
    this.wobjName = this.constructor.name;
  }
  update(): void {
    this.elements.forEach((element: WebObject) => {
      element.update();
    });
  }
  reOrganize(): void {}

  addElement(s: WebObject) {
    this.elements.push(s);
  }

  myDisplay(context: CanvasRenderingContext2D) {
    //override this method as your wish
  }
  display(context: CanvasRenderingContext2D) {
    this.myDisplay(context);
    this.elements.forEach((element: WebObject) => {
      element.display(context);
    });
  }
}
