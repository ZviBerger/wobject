import { WObject } from "./engine.js";
import { WOPadding, WOPosition } from "./basics.js";

interface Container {
  isFull(element: WObject): boolean;
  reOrganize(position: WOPosition): void;
}

export class WOContainer extends WObject implements Container {
  lastElementX: number;
  lastElementWidth: number;

  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
    this.lastElementX = x;
    this.lastElementWidth = x;
  }
  reOrganize(position: WOPosition) {}
  isFull(element: WObject) {
    return false;
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
  }
}

export class WOHorizontalContainer extends WOContainer {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
  }
  reOrganize(position: WOPosition) {
    if (!position) return;
    let countWidths = 0;
    this.elements.forEach((element) => {
      countWidths += element.getFullWidth() + this.margin.left;
    });

    if (countWidths > 0) countWidths -= this.margin.left;
    let leftSpace = (this.size.width - countWidths) / 2;
    leftSpace += position.x;
    let lastEnd = position.x ?? 0;
    this.elements.forEach((element, i) => {
      element.position.x = i == 0 ? leftSpace : lastEnd + this.margin.left;
      lastEnd = element.position.x + element.size.width;
      element.reOrganize(element.position);
    });
  }
  addElement(element) {
    element.position.y += this.margin.top + this.position.y;
    this.elements.push(element);
    this.reOrganize(this.position);
  }
  isFull(element) {
    let lastElement = this.elements.slice(-1).pop();
    let lastElementX = lastElement.position.x ?? this.position.x;
    let lastElementWidth = lastElement.size.width ?? 0;
    let endWithMargin =
      lastElementX + lastElementWidth + (lastElement.margin.right ?? 0);
    return (
      endWithMargin + element.size.getFullWidth() >
      this.position.x + this.size.width
    );
  }
}
export class WOVerticalContainer extends WOContainer {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
  }
  reOrganize(position) {
    if (!position) return;
    let countHeight = 0;
    this.elements.forEach((element) => {
      countHeight += element.getFullHeight() + this.margin.top;
    });
    if (countHeight > 0) countHeight -= this.margin.top;
    let topSpace = (this.size.height - countHeight) / 2;
    topSpace += position.y;
    let lastEnd = position ? position.y : 0;
    this.elements.forEach((element, i) => {
      element.position.y = i == 0 ? topSpace : lastEnd + this.margin.top;
      lastEnd = element.position.y + element.size.height;
      element.reOrganize(element.position);
    });
  }
  addElement(element: WObject) {
    element.position.x += this.margin.left + this.position.x;
    this.elements.push(element);
    this.reOrganize(this.position);
  }
}

export class WODynamicContainer extends WOContainer {
  rowsNum: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    padding: WOPadding
  ) {
    super(x, y, w, h, color);
    this.padding = padding;
    this.rowsNum = 0;
  }
  reOrganize(position: WOPosition) {
    if (!position) return;
  }
  addElement(element: WObject) {
    this.elements.push(element);
    this.reOrganize(this.position);
  }
}

export class WOGridContainer extends WOContainer {
  itemsPerRow: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    itemsPerRow: number
  ) {
    super(x, y, w, h, color);
    this.itemsPerRow = itemsPerRow;
  }
}
