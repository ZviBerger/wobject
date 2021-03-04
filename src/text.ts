import { WObject } from "./engine.js";
export class WOTextBox extends WObject {
  text: string;
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    text: string
  ) {
    super(x, y, w, h, color);
    this.text = text;
  }
  setText(text: string) {
    this.text = text;
  }
  display(context: CanvasRenderingContext2D) {
    context.fillText(this.text, this.position.x, this.position.y);
  }
}
