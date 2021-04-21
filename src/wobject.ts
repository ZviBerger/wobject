import { WOPosition } from "./basics";
import { WebObject } from "./engine";
export class WOApp implements WebObject {
  canvas: any;
  context: CanvasRenderingContext2D;
  elements: Array<WebObject>;
  updateRate: number;
  constructor(canvasID: string, updateRate: number) {
    this.canvas = document.getElementById(canvasID);
    this.context = this.canvas.getContext("2d");
    this.elements = [];
    this.updateRate = updateRate;

    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  update() {
    this.elements.forEach((element) => {
      element.update();
    });
  }
  reOrganize(position?: WOPosition) {
    this.elements.forEach((element) => {
      try {
        element.reOrganize();
      } catch (e) {
        console.log("Error:", e);
      }
    });
  }

  addElement(element: WebObject) {
    this.elements.push(element);
    this.reOrganize();
  }

  display() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.elements.forEach((element) => {
      element.display(this.context);
    });
  }
  run() {
    this.update();
    this.display();
    setInterval(() => {
      this.update();
      this.display();
    }, this.updateRate);
  }
}
