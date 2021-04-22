import { WOPosition } from "/out/index.js";

export class ButtonsController {
  constructor(
    x,
    y,
    buttonSize,
    WOButton,
    actionUp,
    actionRight,
    actionDown,
    actionLeft,
    actionSpace
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
      switch (event.code) {
        case "Space":
          actionSpace();
          break;
      }
    });
    const color = "#ffffff17";
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
        up.position.x + buttonSize * 0.26,
        up.position.y + buttonSize * 0.6
      )
    );

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
  }
}
