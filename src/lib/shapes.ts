import { WObject } from "./engine";
import { WOFrame, WOPosition } from "./basics";
import { WOTextBox } from "./text";

//===============================================================
/**
 *@class WOShape is a general shape form extends WObject
 */
class WOShape extends WObject {
  text: WOTextBox;
  public setText(text: string): void {
    this.text = new WOTextBox(
      10,
      30,
      this.size.width,
      this.size.height,
      "#000",
      text
    );
    this.addElement(this.text);
  }
  setTextPosition(position: WOPosition) {
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
  frame: WOFrame;
  constructor(x: number, y: number, w: number, h: number, color: string) {
    super(x, y, w, h, color);
    this.frame = new WOFrame(x, y, w, h);
  }
  update(): void {
    super.update();
    this.frame.update(this.position, this.size);
  }

  myDisplay(context: CanvasRenderingContext2D) {
    context.clearRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );

    context.beginPath();
    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.shadowColor = "#666565";
    context.strokeStyle = this.color;
    context.shadowBlur = 10;

    //context.filter = "contrast(80%)";
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );

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

export class WORoundedRect extends WORect {
  borderRadius: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
    color: string
  ) {
    super(x, y, w, h, color);
    this.borderRadius = r;
  }
  myDisplay(context: CanvasRenderingContext2D) {
    const x = this.position.x;
    const y = this.position.y;
    const w = this.size.width;
    const h = this.size.height;
    const r = this.borderRadius;
    context.beginPath();
    context.lineWidth = 1;
    context.fillStyle = this.color;
    console.log(this.color);
    context.shadowColor = "#666565";
    context.strokeStyle = this.color;
    context.shadowBlur = 10;
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);
    context.closePath();
    context.fill();
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
  radius: number;
  constructor(x: number, y: number, r: number, color: string) {
    super(x, y, r * 2, r * 2, color);
    this.radius = r;
  }

  myDisplay(context: CanvasRenderingContext2D) {
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
