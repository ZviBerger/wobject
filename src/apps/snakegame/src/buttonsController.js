import { WOPosition } from "../../../lib";
import { getRandomColor } from "../../../lib";

export class ButtonsController {
  constructor(
    x,
    y,
    buttonSize,
    WOButton,
    actionUp,
    actionRight,
    actionDown,
    actionLeft
  ) {
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
      switch (key) {
        case "ArrowLeft":
          actionLeft();
          break;
        case "ArrowRight":
          actionRight();
          break;
        case "ArrowUp":
          actionUp();
          break;
        case "ArrowDown":
          actionDown();
          break;
      }
    });
    const color = getRandomColor();
    const up = WOButton.add(
      x + buttonSize,
      y - buttonSize,
      buttonSize,
      buttonSize,
      color,
      "🢁",
      actionUp
    );
    up.text.setPosition(
      new WOPosition(
        up.position.x + buttonSize * 0.2,
        up.position.y + buttonSize * 0.7
      )
    );
    up.text.setFontSize("40px");

    const right = WOButton.add(
      x + buttonSize * 2,
      y,
      buttonSize,
      buttonSize,
      color,
      "🢂",
      actionRight
    );
    right.text.setPosition(
      new WOPosition(
        right.position.x + buttonSize * 0.2,
        right.position.y + buttonSize * 0.7
      )
    );
    right.text.setFontSize("40px");

    const down = WOButton.add(
      x + buttonSize,
      y + buttonSize,
      buttonSize,
      buttonSize,
      color,
      "🢃",
      actionDown
    );
    down.text.setPosition(
      new WOPosition(
        down.position.x + buttonSize * 0.2,
        down.position.y + buttonSize * 0.7
      )
    );
    down.text.setFontSize("40px");

    const left = WOButton.add(
      x,
      y,
      buttonSize,
      buttonSize,
      color,
      "🢀",
      actionLeft
    );
    left.text.setPosition(
      new WOPosition(
        left.position.x + buttonSize * 0.2,
        left.position.y + buttonSize * 0.7
      )
    );
    left.text.setFontSize("40px");
  }
}
