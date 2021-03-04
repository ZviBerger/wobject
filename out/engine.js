import { WOMargin, WOPosition, WOSize, WOPadding, WOMotion } from "./basics.js";
export class WObject {
    constructor(x, y, w, h, color) {
        this.elements = [];
        this.position = new WOPosition(x, y);
        this.originPos = new WOPosition(x, y);
        this.size = new WOSize(w, h);
        this.margin = new WOMargin();
        this.padding = new WOPadding();
        this.motion = new WOMotion();
        this.color = color;
    }
    update() {
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
    setMotionMethod(motionMethods) {
        this.motionMethods = motionMethods;
    }
    setMotion(motion) {
        this.motion = motion;
    }
    adoptPosition(position) {
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
            element.reOrganize(position !== null && position !== void 0 ? position : this.position);
        });
    }
    addElement(s) {
        s.adoptPosition(this.position);
        this.elements.push(s);
    }
    myDisplay(context) {
        //override this method as your wish
    }
    display(context) {
        this.myDisplay(context);
        this.elements.forEach((element) => {
            element.display(context);
        });
    }
}
//# sourceMappingURL=engine.js.map