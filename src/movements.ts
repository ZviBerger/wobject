import { WOMotion } from "./basics.js";

export const moveInCircle = (radius: number, angel: number) => (
  mo: WOMotion
) => {
  mo.angel += angel;
  mo.dX = Math.cos(mo.angel) * radius;
  mo.dY = Math.sin(mo.angel) * radius;
  return mo;
};

export const moveInLine = (x: number, y: number) => (mo: WOMotion) => {
  mo.dX = x;
  mo.dY = y;
  return mo;
};

export const accelerateInLine = (x: number, y: number) => (mo: WOMotion) => {
  mo.dX += x;
  mo.dY += y;
  return mo;
};
