export class WOStore {
    constructor() {
        this.data = {};
    }
}
export class WOPosition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    adapt(motion) {
        this.x += motion.dX;
        this.y += motion.dY;
    }
}
export class WOMargin {
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
    constructor(width, high) {
        this.width = width;
        this.height = high;
    }
}
export class WOFrame {
    constructor(x, y, w, h) {
        this.topLeft = new WOPosition(x, y);
        this.topRight = new WOPosition(x + w, y);
        this.bottomLeft = new WOPosition(x, y + h);
        this.bottomRight = new WOPosition(x + w, y + h);
    }
    update(pos, size) {
        this.topLeft.set(pos.x, pos.y);
        this.topRight.set(pos.x + size.width, pos.y);
        this.bottomLeft.set(pos.x, pos.y + size.height);
        this.bottomRight.set(pos.x + size.width, pos.y + size.height);
    }
}
export class WOMotion {
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
export class WOPairString {
    constructor(objName1, objName2) {
        this.objName1 = objName1;
        this.objName2 = objName2;
    }
    asString() {
        return this.objName1 + this.objName2;
    }
}
//# sourceMappingURL=basics.js.map