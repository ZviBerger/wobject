import { WObject } from "./engine.js";
export class WOTextBox extends WObject {
  text: string;
  fontSize: string;
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    text?: string,
    fontSize?: string
  ) {
    super(x, y, w, h, color);
    this.text = text;
    this.fontSize = fontSize;
  }
  setText(text: string) {
    this.text = text;
  }
  setFontSize(fontSize: string) {
    this.fontSize = fontSize;
  }
  display(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = this.color;
    context.fill();
    context.shadowColor = "#666565";
    context.strokeStyle = "#000";
    context.shadowBlur = 0;
    context.font = `${this.fontSize ?? "30px"} Courier New`;
    context.fillText(this.text, this.position.x, this.position.y);
    context.stroke();
  }
}
