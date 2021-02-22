export class WOStore {
  data: object;
  constructor() {
    this.data = {};
  }
}

export class WOPosition {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  adapt(motion: WOMotion) {
    this.x += motion.dX;
    this.y += motion.dY;
  }
}

export class WOMargin {
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
  }
  set(left: number, top: number, right: number, bottom: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}

export class WOPadding {
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
  }
  set(left: number, top: number, right: number, bottom: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}
export class WOSize {
  width: number;
  height: number;

  constructor(width: number, high: number) {
    this.width = width;
    this.height = high;
  }
}

export class WOFrame {
  topLeft: WOPosition;
  topRight: WOPosition;
  bottomLeft: WOPosition;
  bottomRight: WOPosition;
  constructor(x: number, y: number, w: number, h: number) {
    this.topLeft = new WOPosition(x, y);
    this.topRight = new WOPosition(x + w, y);
    this.bottomLeft = new WOPosition(x, y + h);
    this.bottomRight = new WOPosition(x + w, y + h);
  }
  update(pos: WOPosition, size: WOSize): void {
    this.topLeft.set(pos.x, pos.y);
    this.topRight.set(pos.x + size.width, pos.y);
    this.bottomLeft.set(pos.x, pos.y + size.height);
    this.bottomRight.set(pos.x + size.width, pos.y + size.height);
  }
}

export class WOMotion {
  dX: number;
  dY: number;
  radius: number;
  angel: number;

  constructor() {
    this.dX = 0;
    this.dY = 0;
    this.radius = 0;
    this.angel = 0;
  }
  set(dX: number, dY: number, radius: number) {
    this.dX = dX;
    this.dY = dY;
    this.radius = radius;
  }
  setRadius(radius: number) {
    this.radius = radius;
  }
}

export class WOPairString {
  objName1: string;
  objName2: string;
  constructor(objName1: string, objName2: string) {
    this.objName1 = objName1;
    this.objName2 = objName2;
  }
  asString(): string {
    return this.objName1 + this.objName2;
  }
}
