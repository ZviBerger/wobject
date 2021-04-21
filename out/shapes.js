import { WObject } from "./engine.js";
import { WOFrame } from "./basics.js";
import { WOTextBox } from "./text.js";
//===============================================================
/**
 *@class WOShape is a general shape form extends WObject
 */
class WOShape extends WObject {
    setText(text) {
        this.text = new WOTextBox(10, 30, this.size.width, this.size.height, "#000", text);
        this.addElement(this.text);
    }
    setTextPosition(position) {
        this.text && this.text.setPosition(position);
    }
}
//===============================================================
/**
 *@class WORect is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */
export class WORect extends WOShape {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.frame = new WOFrame(x, y, w, h);
    }
    update() {
        super.update();
        this.frame.update(this.position, this.size);
    }
    myDisplay(context) {
        context.clearRect(this.position.x, this.position.y, this.size.width, this.size.height);
        context.beginPath();
        context.lineWidth = 1;
        context.fillStyle = this.color;
        context.shadowColor = "#666565";
        context.strokeStyle = this.color;
        context.shadowBlur = 10;
        //context.filter = "contrast(80%)";
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        context.stroke();
        /*
        new WOCircle(this.frame.topLeft.x, this.frame.topLeft.y, 5, "#000").display(
          context
        );
        new WOCircle(
          this.frame.topRight.x,
          this.frame.topRight.y,
          5,
          "#000"
        ).display(context);
        new WOCircle(
          this.frame.bottomRight.x,
          this.frame.bottomRight.y,
          5,
          "#000"
        ).display(context);
        new WOCircle(
          this.frame.bottomLeft.x,
          this.frame.bottomLeft.y,
          5,
          "#000"
        ).display(context);
        */
    }
}
//===============================================================
/**
 *@class WOCircle is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */
export class WOCircle extends WOShape {
    constructor(x, y, r, color) {
        super(x, y, r * 2, r * 2, color);
        this.radius = r;
    }
    myDisplay(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.shadowColor = "#666565";
        context.strokeStyle = this.color;
        context.shadowBlur = 10;
        context.stroke();
    }
}
//# sourceMappingURL=shapes.js.map