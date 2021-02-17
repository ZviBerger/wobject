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
        //  this.motionMethods  = (motion: WOMotion) => new WOMotion();
    }
    update() {
        //this.color=getRandomColor();
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
        return this.margin.top + this.size.high + this.margin.bottom;
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
    display(context) {
        // a default displaying
        //override the functionality by extending this class
        context.clearRect(this.position.x, this.position.y, this.size.width, this.size.high);
        context.beginPath();
        context.lineWidth = "1";
        context.fillStyle = this.color;
        context.shadowColor = "#666565";
        context.strokeStyle = this.color;
        context.shadowBlur = 10;
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.high);
        context.stroke();
        this.elements.forEach((element) => {
            element.display(context);
        });
    }
}
//# sourceMappingURL=engine.js.map