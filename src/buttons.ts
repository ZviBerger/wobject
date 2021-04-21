import { WObject } from "./engine.js";
import { WORect } from "./shapes.js";
import { adjustColor } from "./utility.js";

type ClickAction = () => void;

interface Clickable {
  onClickMethod(): void;
  contain(x: number, y: number): boolean;
  pressedNow: boolean;
}
class WOInternalButton extends WORect implements Clickable {
  onClick: ClickAction;
  id: number;
  pressedNow: boolean;
  clickedColor: string;
  normalColor: string;
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    text: string,
    id: number
  ) {
    super(x, y, w, h, color);
    this.id = id;
    this.setText(text);
    this.pressedNow = false;
    this.clickedColor = adjustColor(this.color, -30);
    this.normalColor = this.color;
  }
  onClickMethod() {
    this.onClick && this.onClick();
  }
  contain(x: number, y: number): boolean {
    return this.frame.contain(x, y);
  }

  myDisplay(context: CanvasRenderingContext2D) {
    super.myDisplay(context);
    if (this.pressedNow) {
      this.color = this.clickedColor;
    } else {
      this.color = this.normalColor;
    }
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

      canvas.addEventListener(
        "touchstart",
        async (event: TouchEvent) => {
          WOButton.instance.checkWhenTouched(event);
        },
        { passive: true }
      );

      canvas.addEventListener("touchend", async (event: TouchEvent) => {
        setTimeout(() => {
          WOButton.instance.checkAfterEvent(event);
        }, 100);
      });

      canvas.addEventListener("mousedown", (event: MouseEvent) => {
        WOButton.instance.checkWhenClicked(event);
      });

      canvas.addEventListener("mouseup", (event: MouseEvent) => {
        setTimeout(() => {
          WOButton.instance.checkAfterEvent(event);
        }, 100);
      });
    }

    WOButton.instance.canvas = canvas;
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
    text?: string,
    onClick?: ClickAction
  ): WOInternalButton {
    if (!WOButton.instance)
      throw new Error(
        "WOButton singleton class did not initiated. call init() first."
      );

    const nextID = WOButton.instance.elements.length ?? 0;
    const newButton = new WOInternalButton(x, y, w, h, color, text, nextID);
    onClick && WOButton.instance.actionMap.set(nextID, onClick);
    WOButton.instance.elements.push(newButton);
    return newButton;
  }

  private checkWhenClicked(event: MouseEvent): void {
    WOButton.instance.elements.forEach((button: WOInternalButton) => {
      if ((button.pressedNow = button.contain(event.offsetX, event.offsetY))) {
        const action = WOButton.instance.actionMap.get(button.id);
        action && action();
      }
    });
  }
  private checkWhenTouched(event: TouchEvent): void {
    WOButton.instance.elements.forEach((button: WOInternalButton) => {
      if (
        (button.pressedNow = button.contain(
          event.touches[0].clientX,
          event.touches[0].clientY
        ))
      ) {
        const action = WOButton.instance.actionMap.get(button.id);
        action && action();
      }
    });
  }

  private checkAfterEvent(event: Event): void {
    WOButton.instance.elements.forEach((button: WOInternalButton) => {
      button.pressedNow = false;
    });
  }
}
