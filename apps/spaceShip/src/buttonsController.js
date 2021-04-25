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
    actionMiddle,
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
    const color = "#343434";
    const up = WOButton.add(
      x + buttonSize,
      y - buttonSize,
      buttonSize,
      buttonSize,
      color,
      "",
      actionUp
    );

    const right = WOButton.add(
      x + buttonSize * 2,
      y,
      buttonSize,
      buttonSize,
      color,
      "",
      actionRight
    );

    const down = WOButton.add(
      x + buttonSize,
      y + buttonSize,
      buttonSize,
      buttonSize,
      color,
      "",
      actionDown
    );

    const left = WOButton.add(
      x,
      y,
      buttonSize,
      buttonSize,
      color,
      "",
      actionLeft
    );

    const middle = WOButton.add(
      x + buttonSize,
      y,
      buttonSize,
      buttonSize,
      color,
      "",
      actionMiddle
    );
  }
}
