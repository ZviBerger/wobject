import { WObject } from "./engine.js";
import { WOFrame } from "./basics.js";
import { WOTextBox } from "./text.js";

class WOShape extends WObject {
  text: WOTextBox;
  public setText(text: string): void {
    this.text = new WOTextBox(
      this.position.x + 10,
      this.position.y + 10,
      this.size.width,
      this.size.width,
      "#000",
      text
    );
  }
}

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
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    context.stroke();
    this.text && this.text.display(context);
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