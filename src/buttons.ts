import { WObject } from "./engine.js";
import { WORect } from "./shapes.js";

type ClickAction = () => void;

interface Clickable {
  onClickMethod(): void;
  contain(x: number, y: number): boolean;
}
class WOInternalButton extends WORect implements Clickable {
  onClick: ClickAction;
  id: number;
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    id: number
  ) {
    super(x, y, w, h, color);
    this.id = id;
    this.setText("Click on me");
  }
  onClickMethod() {
    this.onClick && this.onClick();
  }
  contain(x: number, y: number): boolean {
    return this.frame.contain(x, y);
  }
}

export class WOButton extends WObject {
  canvas: object;
  private static instance: WOButton;
  private actionMap: Map<number, ClickAction>;

  private constructor() {
    super(0, 0, 0, 0, ""); //empty super
  }

  public static init(canvas: any): WOButton {
    if (!WOButton.instance) {
      WOButton.instance = new WOButton();
      WOButton.instance.actionMap = new Map<number, ClickAction>();
      canvas.addEventListener("click", (event: MouseEvent) => {
        WOButton.instance.checkWhenClicked(event);
      });
    }
    return WOButton.instance;
  }

  public static getInstance(): WOButton {
    return WOButton.instance;
  }
  public static add(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    onClick?: ClickAction
  ): void {
    if (!WOButton.instance)
      throw new Error(
        "WOButton singleton class did not initiated. call init() first."
      );

    let nextID = WOButton.instance.elements.length ?? 0;
    let newButton = new WOInternalButton(x, y, w, h, color, nextID);
    onClick && WOButton.instance.actionMap.set(nextID, onClick);
    WOButton.instance.elements.push(newButton);
  }

  private checkWhenClicked(event: MouseEvent): void {
    WOButton.instance.elements.forEach((button: WOInternalButton) => {
      if (button.contain(event.offsetX, event.offsetY)) {
        const action = WOButton.instance.actionMap.get(button.id);
        action && action();
      }
    });
  }
}
