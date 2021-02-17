export class WOStore {
  data: object;
  constructor() {
    this.data = {};
  }
}

export class WOPosition {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  adapt(motion: WOMotion) {
    this.x += motion.dX;
    this.y += motion.dY;
  }
}

export class WORect {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
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
  set(left, top, right, bottom) {
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
  set(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}
export class WOSize {
  width: number;
  high: number;

  constructor(width, high) {
    this.width = width;
    this.high = high;
  }
}

export class WOFrame {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
  constructor(topLeft, topRight, bottomLeft, bottomRight) {
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
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
  set(dX, dY, radius) {
    this.dX = dX;
    this.dY = dY;
    this.radius = radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
}
