import { WOPosition } from "./basics.js";
import { LightWObject } from "./engine.js";
//======================================================================
//getRandomColor - return a RBG random color (format like '#FFFFFF')
//======================================================================
export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//======================================================================
//adjustColor - make the color lighter or darker -by the @Param amount
//======================================================================

export const adjustColor = (color: string, amount: number) => {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color: string) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};
//======================================================================
//getRandomNumber - get random number in the range min-max
//======================================================================

export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
//======================================================================
//getRandomPosition - return a position in the range xMin-xMax, yMin-yMax
//======================================================================

export const getRandomPosition = (xMin: any, xMax: any, yMin: any, yMax: any) =>
  new WOPosition(getRandomNumber(xMin, xMax), getRandomNumber(yMin, yMax));

export class WOClock extends LightWObject {
  iterationsToCount: number;
  count: number;
  constructor(iterationsToCount: number) {
    super();
    this.iterationsToCount = iterationsToCount;
    this.count = 0;
  }
  update() {
    this.count += 1;
  }
  isTime(): boolean {
    return this.count >= this.iterationsToCount;
  }

  restart() {
    this.count = 0;
  }
}
